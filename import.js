
//index.js파일

import React from "react";
import ReactDOM from "react-dom";
//import pie from "./math.js"; //pie 이름은 아무거나 해도 됨. 디폴트를 가져온다.
//import pie, { doublePi, triplePi } from "./math.js"; //디폴트가 아니라 {} 다른 함수들은 이름을 같게 해줘야함.
import * as pi from "./math.js"; //다 가져오기. 밑에 html부분에서 가져올 때 이름을 붙여줘야 함.
console.log(pi);

ReactDOM.render(
  // <ul>
  //   <li>{pie}</li>
  //   <li>{doublePi()}</li>
  //   <li>{triplePi()}</li>
  // </ul>,
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

//math.js파일

const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}
function triplePi() {
  return pi * 3;
}

export default pi;
//여러가지를 내보내려면?
export { doublePi, triplePi };



//예제

//index.js
import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, subtract, divide } from "./calculator.js";
//import * as Calculator from "./calculator.js";

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  // <ul>
  //   <li>{Calculator.add(1, 2)}</li>
  //   <li>{Calculator.multiply(2, 3)}</li>
  //   <li>{Calculator.subtract(7, 2)}</li>
  //   <li>{Calculator.divide(5, 2)}</li>
  // </ul>,
  document.getElementById("root")
);

//calculator.js
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}

export { add, multiply, subtract, divide };