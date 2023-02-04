import React, { useState, useMemo, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? "한국" : "외국"
  // };

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국"
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  // 객체타입의 값을 저장하면 다른 메모리에 저장된다. 변수에는 그 메모리를 지시하는 주소가 저장됨.
  // 그래서 number값을 바꿔주면 location값도 초기화되서 계속 주소가 바뀌기 때문에 useEffect가 실행되는 것.
  //(값은 같아도 지시하는 주소를 뜻하는 것이기 때문에 다르다.) 그래서 location에 useMemo를 사용해주면 실행을 막을 수 있다.

  return (
    <div>
      <h2>하루에 몇 끼를 먹습니까?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <br />
      <h2>어느 나라에 있습니까?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타기</button>
      <br />
    </div>
  );
}

export default App;
