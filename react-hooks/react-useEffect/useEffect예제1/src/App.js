import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링마다 매번 실행됨 - 렌더링 이후
  useEffect(() => {
    console.log("렌더링");
  });

  // 마운팅 + count가 변경 될 때마다 실행됨
  useEffect(() => {
    console.log("count변화");
  }, [count]);

  // 마운팅 + name가 변경 될 때마다 실행됨
  useEffect(() => {
    console.log("name변화");
  }, [name]);

  // 마운팅 될 때만 실행
  useEffect(() => {
    console.log("마운팅");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {count}</span>
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name : {name}</span>
    </div>
  );
}

export default App;
