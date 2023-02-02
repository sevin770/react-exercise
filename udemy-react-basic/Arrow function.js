import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// function square(x) {
//   return x * x;
// }
// const newNumbers = numbers.map(square);
// console.log(newNumbers);

1.
const newNumbers = numbers.map(function (x) {
  return x * x;
});
console.log(newNumbers);

2.
const newNumbers = numbers.map((x) => {
  return x * x;
});
console.log(newNumbers);

-매개변수가 하나일 경우에 괄호를 지울 수 있다.
const newNumbers = numbers.map((x) => {
  return x * x;
});
console.log(newNumbers);

-단일 표현식만 반환하는 단일행 명령문만 있는 경우(식or값) return과 {}을 삭제할 수 있다.
const newNumbers = numbers.map((x) => x * x);
console.log(newNumbers);

3.
const newNumbers = numbers.map((x, y) => {
  return x * y;
});
console.log(newNumbers);

예제1
// const newNumbers = numbers.map(function(x){
//   return x * 2;
// });

const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

예제2
// const newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

const newNumbers = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumbers);

예제3
const newNumber = number.find((num) => num > 10);
const newNumber = number.findIndex((num) => num > 10);

