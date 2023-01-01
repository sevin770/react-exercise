import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//Challenge:
//1. 다음을 사용하여 현재 시간을 얻을 수 있습니다.
// let time = new Date().toLocaleTimeString();
// console.log(time);
//Get Time(시간 가져오기) 버튼이 표시될 때 <h1>에 가장 최근 시간 표시
//is pressed.

//2. 매초마다 호출되는 코드를 얻을 수 있다는 점에서
//setInterval 메서드 사용.
//<h1>에서 매초마다 업데이트할 시간을 얻을 수 있습니까?

//e.g. 예를 들어, 아래 코드의 주석을 제거하여 Hey printed by second를 확인합니다.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
