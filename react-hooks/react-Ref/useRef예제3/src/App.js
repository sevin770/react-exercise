import React, { useState, useRef, useEffect } from "react";
function App() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  //변화는 감지해야 하지만 렌더링을 발생시키면 안되는 값을 다룰 때 이용한다.
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링수:", renderCount.current);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
}
export default App;
