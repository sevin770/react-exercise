//리액트는 JSX파일을 생성하여 작동한다.
//JSX파일로 자바스크립트에 HTML삽입하기

import React from "react";
import ReactDOM from "react-dom";

const fname = "Angela";
const lname = "Yu";
//let num = Math.floor(Math.random() * 10) + 1;

ReactDOM.render(
  // 이 렌더링 방식은 단일 HTML요소만 사용할 수 있기 때문에 여러가지 태그를 쓸 땐 div박스 안에 넣어주는 등으로 래핑해야한다.
  <div>
    <h1>Hello World {fname + " " + lname}</h1>
    <h1>
      Hello World {fname} {lname}
    </h1>
    <h1>Hello World {`${fname} ${lname}`}</h1>
    <p>your lucky number is {Math.floor(Math.random() * 10) + 1}</p>{" "}
    {/*  표현식은 가능하나 명령문은 안됨.  */}
  </div>,
  document.getElementById("root")
);



//날짜 나오게 하기.

import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const currentDate = new Date();
console.log(currentDate);
const year = currentDate.getFullYear();
console.log(year);

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);



//css스타일 적용하는 법.
//1. class는 className, 모든 html태그 카멜케이스로 작성
// html 파일에 <script src="../src/index.js" type="text/JSX"></script> type을 JSX로 해줘야 함.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//2. 닫는 태그를 해줘야함.<img src=""/>

import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <img src={img} /></img>
    <img src={img + "?grayscale"} /> //이런 식으로 속성값에 추가할 수도 있다.
  </div>,
  document.getElementById("root")
);

//3. 인라인 스타일 적용법
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>My favourite Foods</h1>
  </div>,
  document.getElementById("root")
);

//3-2. 인라인 스타일 적용법

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue"; //스타일 개체의 속성을 업데이트 시키면 새로 적용됨.

ReactDOM.render(
  <div>
    <h1 style={customStyle}>My favourite Foods</h1>
  </div>,
  document.getElementById("root")
);

//활용예제

import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2022, 1, 1, 20);
const currentTime = date.getHours();
console.log(currentTime);

let greeting;

const customStlye = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStlye.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStlye.color = "blue";
} else {
  greeting = "Good Night";
  customStlye.color = "green";
}

ReactDOM.render(
  <h1 className="heading" style={customStlye}>
    {greeting}
  </h1>,
  document.getElementById("root")
);


//리액트 컴포넌트

import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1>My favourite Foods</h1>;
}
ReactDOM.render(
  <div>
    <Heading />
  </div>,
  document.getElementById("root")
);

//1. Heading을 Heading.jsx파일을 따로 만들어서 빼내기.

import React from "react"; //jsx코드이기 때문에 리액트 모듈에서 리액트를 가져와야함.

function Heading() {
  return <h1>My favourite Foods</h1>;
}

//2. 내보내기. index.js에서 쓸 수 있도록.

import React from "react";

function Heading() {
  return <h1>My favourite Foods</h1>;
}

export default Heading; // export

//3. index.js에서 가져오기.

import Heading from "./Heading";

//4. 출력완료


//예제 
// components폴더를 만들고 app.jsx, heading.jsx, content.jsx 파일을 만든다.
// 모두 연결시킨다.

//index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//App.jsx
import React from "react";
import Heading from "./Heading";
import Content from "./Content";

function App() {
  return (  // return은 출력
    <div>
      <Heading />
      <Content />
      <Content />
    </div>
  );
}
export default App;

//Heading.jsx
import React from "react";

function Heading() {
  return <h1>My favourite Foods</h1>;
}
export default Heading; 

//Content.jsx
import React from "react";

function Content() {
  return ( 
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  );
}
export default Content;


//활용예제 컴포넌트로 나눠보기

//index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

RenderDOM.render(<App />,document.getElementById("root"));

//App.jsx
import React from "react";
import Heading from "./Heading.jsx";

function App(){
    return (
        <div>
            <Heading />
        </div>
    );
}
export default App;

//Heading.jsx
import React from "react";

function Heading() {
  const date = new Date(2022, 1, 1, 20);
  const currentTime = date.getHours();

  let greeting;

  const customStlye = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStlye.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStlye.color = "blue";
  } else {
    greeting = "Good Night";
    customStlye.color = "green";
  }

  return (
    <h1 className="heading" style={customStlye}>
      {greeting}
    </h1>
  );
}
export default Heading;

