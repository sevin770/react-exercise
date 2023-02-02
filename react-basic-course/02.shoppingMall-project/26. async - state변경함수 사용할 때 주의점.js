자바스크립트의 sync / async 관련 상식

synchronous 동기방식 
코드 적은 순서대로 윗줄부터 차례로 코드가 실행된다.

하지만 asynchronous(비동기적) 하게 코드실행이 가능한 함수들이 있다.
ajax, 이벤트리스너, setTimeout
처리시간이 오래 걸린다. 그래서 순차적으로 실행되지 않고 완료되면 실행된다.

(예시)
console.log(1+1)
axios로 get요청하고나서 console.log(1+2) 실행해주셈~
console.log(1+3)

이런 코드는 2, 4가 바로 출력되고 그 다음에 3이 출력된다.
물리적으로 잠깐 처리가 보류되어서 ajax요청 속도가 빨라도 2,4가 먼저 출력됨.

◆ 리액트의 setState 함수 특징

function App(){
    let [name, setName] = useState('kim')
  }

- setName() 같은 state 변경함수들은 전부 asynchronous (비동기적) 으로 처리됨

-예제) : 버튼을 누르면 2개 기능을 순차적으로 실행한다.

import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);
  return (
    <div className="App">
        <div>안녕하십니까 전 {age}</div>
        <button onClick={()=>{
            setCount(count+1);
            if(count<3){
              setAge(age+1);
            }
        }}>누르면한살먹기</button>
    </div>
  );
}

export default App;


그런데 왜 count<3 인데 23까지 증가할까? 
state 변경함수는 async 하게 처리되는 함수기 때문에 오래 걸리면 제쳐두고 다음 코드를 실행해준다.

① 버튼을 세번째 누르면 setCount(count+1); 이걸 실행해서 count를 3을 만들어줌
② 근데 count를 3으로 만드는건 오래걸리니까 제껴두고 if ( count > 3 ) {} 이걸 실행함
③ 이때 count는 아직 2라서 if문 안의 setAge(age+1)이 잘 동작하고 있는 거임.

◆ 순차적으로 실행하고 싶을 때 해결책은 useEffect

import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);
  useEffect(()=>{
    if ( count != 0 && count < 3 ) {
      setAge(age+1)
    }
   }, [count]) 
  return (
    <div className="App">
        <div>안녕하십니까 전 {age}</div>
        <button onClick={()=>{
            setCount(count+1);
        }}>누르면한살먹기</button>
    </div>
  );
}

export default App;


-(count != 0 && count < 3) 조건식을 이렇게 써주는 이유?
처음 페이지 로드될 때도 한 번 실행이 되기 때문에 버그가 생길 수 있음. 
그래서 0일 때(페이지 처음 로드되었을 때) 동작시키지 않는다는 조건을 붙여줘야 함. 
