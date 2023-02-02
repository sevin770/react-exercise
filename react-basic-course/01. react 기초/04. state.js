// state문법
// 일반 변수대신 state 이용해도 자료를 잠깐 저장해둘 수 있다.
// 중요한 데이터는 변수말고 state에 담는다.


// state 만드는 법

// import { useState } from 'react';
// 위에 이렇게 적어주고
// return안에
//   let [a,b] = useState('내용내용');
// a: 변수
// b: state변경 도와주는 함수

// 1.import {useState}
// 2.useState(보관할자료)
// 3.let[작명,작명] 

// state는 언제 쓰나? 변동 시 자동으로 html에 반영되게 만들고 싶을 때 
// (일반 변수는 변동 시에 html에 바로 반영이 안됨.)

// 자주 변경될 거 같은 html 부분은 state로 만들기. 
// logo같이 자주 변경 안될 거 같은 건 굳이 state만들 필요 없음.

// * warinning은 무시해도 되는데 없애고 싶다면 (Lint 끄는 기능)
// /* eslint-disable */ 써주면 됨.


// - Destructuring 문법
// array안에 문법을 각각 빼주는 문법. 
// 왼쪽 오른쪽 형식을 똑같이 맞춰주시면 자동으로 알아서 변수가 생성

// let num = [1,2];
// let [a,b] = [1,2];

// a=1, b=2 로 뽑아짐.

// ------------------------------------
// let array = ['Kim', 20];
// let name = array[0];
// let age = array[1];
// ==> let [name, age] = ['Kim', 20]
// ------------------------------------

// useState()를 쓰면 그 자리에 [데이터1, 데이터2] 이렇게 생긴 이상한 array가 남는다.
// 데이터1 자리엔 '남자 코트 추천'같은 자료가 들어있고 
// 데이터2 자리엔 state변경을 도와주는 함수가 들어있다.

// 그 데이터들을 각각 변수로 빼고 싶으면 
// let [a, b] = useState('남자 코트 추천') 이러면 되는 것일 뿐임.

//------------------------------------------------------------

let [글제목, b] = useState('여자코트추천');
return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
