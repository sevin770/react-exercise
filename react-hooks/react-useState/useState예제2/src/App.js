import { useState } from "react";

const heaveyWork = () => {
  console.log("엄청 무거운 작업");
  return ["홍길동", "김민수"];
};
//업데이트 될 때마다 실행되면 무거워짐. 렌더링 될 때만 실행되도록 하려면? 콜백함수로 부른다.

function App() {
  const [names, setNames] = useState(() => {
    return heaveyWork();
  });
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state : ", prevState);
      return [input, ...prevState];
    });
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
