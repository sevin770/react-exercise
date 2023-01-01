import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return (
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
//}

//삼항연산자
//condition ? do if true : do if false

// function App() {
//   return (
//     <div className="container">
//       {isLoggedIn === true ? <h1>hello</h1> : <Login />}
//     </div>
//   );
// }

//예시
const currentTime = new Date(2022, 12, 30, 18).getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">
      {/* 조건이 충족되지 않을 경우 아무것도 출력하지 않는다. null사용 */}
      {currentTime > 12 ? <h1>Why are you still working</h1> : null}
      {/* &&를 사용해도 같은 표현. 양 쪽이 다 ture여야 한다. */}
      {currentTime > 12 && <h1>Why are you still working</h1>}
    </div>
  );
}

export default App;
