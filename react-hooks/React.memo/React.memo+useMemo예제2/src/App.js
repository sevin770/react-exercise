import { useState, useMemo } from "react";
import Child from "./Child";

function App() {
  const [parentAge, setParentAge] = useState(7);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트가 렌더링이 되었어요.");

  const name = useMemo(() => {
    return {
      lastName: "홍",
      firstName: "길동"
    };
  }, []);

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} />
    </div>
  );
}

export default App;
