Lifecycle useEffect


컴포넌트의 Lifecycle

컴포넌트가 보여지는 순간 mount (페이지에 장착)
조작시 컴포넌트가 update
필요없으면 제거 unmount

중간중간에 코드실행 가능.
hook 갈고리를 달아서 실행할 코드를 작성한다. 

갈고리 다는 법

1. class 방식

class Detail3 extends React.components {
    componentDidMount (){}
    componentDidUpdate (){}
    componentDiUnmount (){}
  }

-저 안에 코드를 적으면 각각mount, update, unmount될 때마다 코드가 실행된다. 

2. function 방식(최근방식)

import React, {useEffect} from "react";

function Detail(props){
    useEffect (()=>{
        console.log('안녕');
    })
}

- useEffect는 mount,update시 코드 실행.
- 그런데 2번 실행된다. 디버깅을 위해 2번 실행되는데, 발행 후 실제로 사이트는 1번 작동된다.
이게 싫으면 index.js파일에서 <React.StrictMode> 제거


◆ update : 재랜더링

버튼 누르면 업데이트 될 때마다 useEffect도 같이 실행됨. 

------------------------------------------------------------------------
function Detail1(props) {
  
    useEffect(()=>{
      console.log('안녕');
     })
  
     let [count, setCount] = useState(0)
  
      return (
        <div className="container">
          <h4>디테일 페이지</h4>
         {count}
         <button onClick={()=>{setCount(count+1)}}>버튼</button> 
        </div>
      );
    }
------------------------------------------------------------------------


Q. useEffect 바깥에 넣어도 똑같이 실행이 됨. 

    useEffect(()=>{
   })
   console.log('안녕');

그럼 왜 쓰는 건가? 쓰는 이유
: useEffect는 html랜더링 후에 실행이 된다. 그래서 복잡한 작업은 뒤에 해주기 때문에 빠르다. 


- useEffect 안에 적는 코드들
1. 어려운 연산
2. 서버에서 데이터 가져오는 작업
3. 타이머 장착


- Side effect: 함수의 핵심기능과 상관없는 부가기능
useEffect 이름을 따왔다


- 혼자해보기
디테일 페이지 방문 후 2초 지나면 div숨기기
:setTimeout 사용.

------------------------------------------------------------------------

function Detail1(props) {
  
  let [alert, setAlert] = useState(true); 
  let [count, setCount] = useState(0);

  useEffect(()=>{
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  },[])
    return (
      <div className="container">
         {
        alert == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null
          }
        <h4>디테일 페이지</h4>
        <button onClick={()=>{setCount(count+1)}}>버튼</button> 
      </div>
    );
  }

------------------------------------------------------------------------

  useEffect(()=>{
    setTimeout(() => {setAlert(false)}, 2000); 
    console.log(1);
  },[count])

  [] 안에는 useEffect 실행 조건을 넣을 수 있다.
  [] 을 비워두면 마운트 될 때 1회 실행됨. 업데이트 될 때는 실행x
  [] 마운트, 안에 넣은 게업데이트 될 때마다실행 됨.


  ◆ return ()=>{} 를 넣을 수 있다. 
  useEfferct 동작 전에 실행되는 return 
  :clean up function 주로 기존 코드를 치우기 위해 작성.
  clean up function은 mount시 실행 안됨 unmount시(다른페이지로 넘어갔을 때) 실행된다.

  useEffect(()=>{
    let a = setTimeout(() => {setAlert(false)}, 2000);

    return ()=>{}
      clearTimeout(a);
    })

    (사용예시) 서버로 데이터 요청하는 코드 작성 -> 2초 사이에 재렌더링 되어버림 그럼 요청이 끝나기도 전에 계속 반복되고 버그생김. 
    retrun 기존 데이터요청은 제거해주세요 라는 코드를 쓰면 버그방지.


    -정리

    1. 재랜더링마다 코드실행하고 싶다면
    useEffect(()=>{})

    2. mount시 1회 코드실행하고 싶으면
    useEffect(()=>{},[])

    3. unmount시 1회 코드실행하고 싶으면
    useEffect(()=>{
      return ()=>{}
    },[])

    4. useEffect 실행 전에 뭔가 실행하려면 언제나 
    return()=>{}

    5. 특정 state변경 시에만 실행하려면 [state명]
    useEffect(()=>{},[state명])



    Q. 숫자인지 문자인지 구분하는 코드

    isNaN('abc')  true
    isNaN('123') false

    
    useEffect(()=>{
      if(isNaN(inputbox) === true) {
        console.log('숫자가 아닙니다')
      }
    },[inputbox])

    return(
      <input type="text" onChange={(e)=>{setInputbox(e.target.value)}}/>
    )
     