◆ 자식 컴포넌트 재렌더링 막기.

function Child(){
    console.log('재렌더링됨')
    return <div>자식임</div>
}
function Cart() {
    let [count, setCount] = useState(0);
    return (
      <div>
        <Child></Child>
        <button onClick={()=>{setCount(count+1)}} >+</button>
      </div>
    );
  }

  
-> 버튼을 누를 때마다 cart컴포넌트가 재렌더링 된다.
-> 자식 컴포넌트들도 전부 자동으로 다 재렌더링된다.
실제로 버튼 누를 때마다 child 컴포넌트에 있는 콘솔이 출력됨.
지연시간이 아주 오래 걸린다. 
무거운 컴포넌트도 재렌더링이 되니까.

◆ memo 꼭 필요할 때만 재렌더링 하려면? mome

import { memo, useMemo, useState } from 'react'

let Child = memo( function(){
    console.log('재렌더링됨')
    return <div>자식임</div>
})
function Cart() {
    let [count, setCount] = useState(0);
    return (
      <div>
        <Child></Child>
        <button onClick={()=>{setCount(count+1)}} >+</button>
      </div>
    );
  }

-> 이제 버튼을 눌러도 child컴포넌트는 재렌더링 되지 않는다.

◆ mome의 원리 : props가 변할 때만 재렌더링 해준다. 
<Child count={count}></Child> 이런식으로 props를 전송해주면 child도 재렌더링된다.

재렌더링 되기 전에 기존/신규 props를 비교하고 재렌더링 여부를 결정하는 작업을 한다.
props가 길고 복잡하다면 시간이 오래 걸릴 수 있기 때문에 더 안좋을 수도 있다. 
꼭 필요한 무거운 컴포넌트들에만 사용하기. 


◆ useMemo
컴포넌트 렌더링 시 1회만 실행해줌.

(예시)

import { memo, useMemo, useState } from 'react'

function 함수(){
    return 반복문 10억번 돌린 결과
}

function Cart(){
    let result = 함수(); // 이렇게 하면 10억번을 돌리니까 개오래걸림. 효율적으로 하기 위해 useMemo 사용
    let result = useMemo(()=>{return 함수()},[state]); // state만 변화할 때만 실행된다. 
}

◆ useEffect와 useMemo 의 차이점?
실행시점의 차이.

useEffect는 html보여주는 게 실행이 다 끝나면 실행 됨.
useMemo는 렌더링 될 때 실행됨.