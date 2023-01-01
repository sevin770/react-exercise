//https://reactjs.org/docs/forms.html#controlled-components 참고

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    // console.log(event.target.value); // 현재 입력값 인쇄
    // console.log(event.target.placeholder); // placeholder 인쇄
    // console.log(event.target.type); // 유형 인쇄

    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    // submit클릭하면 hello옆에 이름이 뜸.
    setHeading(name);
    //console.log(name);

    event.preventDefault(); //기본 다음 동작 방지
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        {/* <button onClick={handleClick}>Submit</button> */}
        <button type="submit">Submit</button>
        {/* form안에 넣고 타입을 submit 으로 지정 후에 onSubmit으로 함수호출 */}
      </form>
    </div>
  );
}

export default App;
