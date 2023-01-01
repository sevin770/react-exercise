import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(123);
  //useState라는 함수는 값과 배열을 출력한다. ()안은 초기값.

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

//https://reactjs.org/docs/hooks-reference.html#usestate
