import React, { useState, useRef } from "react";
function App() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref: ", countRef.current);
  };
  const increaseVar = () => {
    // 함수가 불릴 때마다 변수는 0으로 초기화가 된다. Ref는 unmount되기 전까지 값을 유지한다.
    countVar = countVar + 1;
    console.log("Var: ", countVar);
  };
  const printResultes = () => {
    console.log(`ref : ${countRef.current}, var: ${countVar}`);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResultes}>Ref Var 값 출력</button>
    </div>
  );
}
export default App;
