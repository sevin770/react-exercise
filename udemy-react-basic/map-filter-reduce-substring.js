Map -Create a new array by doing something with each item in an array.
맵 - 배열의 각 항목에 대해 작업을 수행하여 새 배열을 만듭니다.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

var numbers = [3, 56, 2, 48, 5];

1.
function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers);

2. map을 사용하지 않을 때 : 배열을 만들어줘야 한다.
var newNumbers = [];
numbers.forEach(function (x) {
  newNumbers.push(x * 2);
});
console.log(newNumbers);

3. 배열을 만들 필요 없이 알아서 새 배열로 푸쉬해준다.
const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers);

-----------------------------------------------------------

Filter - Create a new array by keeping the items that return true.
필터 - true를 반환하는 항목을 유지하여 새 배열을 만듭니다.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

var numbers = [3, 56, 2, 48, 5];

1. 특정 기준에 충족하는 숫자만 반환해서 새 배열 만듦.
const newNumbers = numbers.filter(function (num) {
  return num > 10;
});
console.log(newNumbers);

2. filter를 사용하지 않을 때.
var newNumbers = [];
numbers.forEach(function(num){
  if(num < 10){
    newNumbers.push(num);
  }
});

-----------------------------------------------------------

Reduce - Accumulate a value by doing something to each item in an array.
축소 - 배열의 각 항목에 대해 작업을 수행하여 값을 누적합니다.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

var numbers = [3, 56, 2, 48, 5];

1.
numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
  console.log("accumulator= " + accumulator);
  console.log("currentNumber= " + currentNumber);

2. 축소를 사용하지 않을 때.
var newNumber = 0;
numbers.forEach(function (currentNumber) {
  newNumber += currentNumber;
});
console.log(newNumber);

-----------------------------------------------------------

Find - find the first item that matches from an array.
찾기 - 배열에서 일치하는 첫 번째 항목을 찾습니다.
filter와 다른 점 : 루프를 반복하지 않는다. 배열 중 하나가 true를 반환하는 즉시 중단.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

var numbers = [3, 56, 2, 48, 5];

const newNumber = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumber);

-----------------------------------------------------------

FindIndex - find the index of the first item that matches.
색인 찾기 - 일치하는 첫 번째 항목의 색인을 찾습니다.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

-----------------------------------------------------------

substring - 글자수 자르기
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100); //100자로 자르기
});

console.log(newEmojipedia);