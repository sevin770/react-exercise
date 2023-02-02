리액트18버전 이후부터 렌더링 성능이 저하되는 컴포넌트에서 쓸 수 있는 기능이 하나 추가됨.
useTransition 이걸로 오래걸리는 부분을 감싸면 렌더링시 버벅이지 않게 해줌.
(실은 코드 실행시점만 조절해주는 식임)


1. batch 기능
state변경 시 재렌더링이 일어나는데, 여러 개가 변경될 시 마지막 시점에서만 재렌더링 1회한다.

state1변경()
state2변경()
state3변경() -> 여기서만 재렌더링 1회

ajax요청, setTimeout 내부라면, batch가 일어나지 않는 예외가 있었지만,
하지만 18버전 이후로는 잘 됨.
(batching 되는게 싫고 state변경함수 실행마다 재렌더링시키고 싶으면 flushSync라는 함수를 쓰면 됨)

2. useTransition 으로 느린 컴포넌트 성능향상기능

◆ 우선 재렌더링이 느린 컴포넌트 만들어보기 =

import {useState, useTransition} from 'react'

let a = new Array(10000).fill(0)

function App(){
  let [name, setName] = useState('')
  
  return (
    <div>
      <input onChange={ (e)=>{ setName(e.target.value) }}/>
      {
        a.map(()=>{
          return <div>{name}</div>
        })
      }
    </div>
  )
}

솔루션) html 10000개 지우기. 페이지 나누기. 
굳이 다 보여줘야 한다면? useTransition

◆ useTransition 사용하는 법

1. let [변수1, 늦게처리해줘] = useTransition() 로 사용한다. 변수 이름은 isPending, startTransition로 사용.
변수1(isPending)은 늦게처리해줘(startTransition)이 처리중일 때 true로 변함. 그럼 로딩중에 표시같은 걸 해줄 수 있음.
{
    isPending ? '로딩중' :
    a.map(()=>{
      return <div>{name}</div>
    })
  }
2. 문제의 state변경 감싸기. 
startTransition(()=>{
    setName(e.target.value) 
  })

--------------------------------------------------------
import {useState, useTransition} from 'react'

let a = new Array(10000).fill(0)

function App(){
  let [name, setName] = useState('')
  let [isPending, startTransition] = useTransition()
  
  return (
    <div>
      <input onChange={ (e)=>{ 
        startTransition(()=>{
          setName(e.target.value) 
        })
      }}/>

      {
        isPending ? '로딩중' :
        a.map(()=>{
          return <div>{name}</div>
        })
      }
    </div>
  )
}
--------------------------------------------------------

startTransition 동작원리는? 

브라우저는 하나의 작업밖에 수행할 수 없는데,
1. a를 <input>에 보여주기
2. <div> *10000 개 만들기
를 동시에 실행하려니까 버벅거리는 것.

startTransition로 감싸주면, 코드 시작을 뒤로 늦춰준다. 다른 작업 후에 실행 해달라는 뜻.

--------------------------------------------------------

◆ useDeferredValue 사용해도 느린 컴포넌트 성능향상 가능.
let a = useDeferredValue(state)
state에 넣은 게 변동사항이 생기면 그걸 늦게 처리해줌.

import {useState, useTransition, useDeferredValue} from 'react'

let a = new Array(10000).fill(0)

function App(){
  let [name, setName] = useState('')
  let state1 = useDeferredValue(name) //name이라는 state에 변동이 생기면 {state1}은 늦게 처리된다. 
  
  return (
    <div>
      <input onChange={ (e)=>{ 
          setName(e.target.value) 
      }}/>

      {
        a.map(()=>{
          return <div>{state1}</div>
        })
      }
    </div>
  )
}
