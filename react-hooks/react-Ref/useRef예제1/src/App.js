import React, { useState, useRef } from "react";
function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef); // countRef.current
  console.log("렌더링");

  const increaseCountState = () => {
    setCount(count + 1);
  };
  const increaseCountRef = () => {
    // Ref는 변화해도 렌더링이 되지 않기 때문에 화면이 업데이트 되지 않는다.
    countRef.current = countRef.current + 1;
    console.log("Ref", countRef.current);
  };

  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
}

export default App;
