import { useState } from "react";
import { useInput } from "./useInput";

function App() {
  const [inputValue, handleChange] = useInput("안녕");
  const [inputValue2, handleChange2] = useInput("123");

  const handleSubmit = () => {
    alert(inputValue);
    //setInputValue(""); //초기화
  };
  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <input value={inputValue2} onChange={handleChange2} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}
export default App;
