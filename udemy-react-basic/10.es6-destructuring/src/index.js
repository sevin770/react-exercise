//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//자바스크립트 구조

import animals, { useAnimals } from "./data";

console.log(animals);

//[]배열 분해. 해체된 변수를 임의의 이름으로 호출할 수 있다.
const [cat, dog] = animals;
//console.log(cat);

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

//{}객체 분해. 해당 개체의 속성 이름과 일치해야 한다.
// : 콜론을 추가하고 임의의 이름을 지정할 수 있다.
// const { name: catName, sound: catSound } = cat;
// console.log(catName);

//분해한 객체에 사용자 정의 값 부여하기. 기본적으로 데이터에 값이 정의되지 않은 경우.
// const { name = "Fluffy", sound = "Purr" } = cat;
// console.log(name);

//객체 안에 객체 분해
// const {name,sound,feedingRequirements: { food, water }} = cat;
// console.log(food);

