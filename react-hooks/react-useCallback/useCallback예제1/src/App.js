import React, { useState, useEffect, useCallback } from "react";

function App() {
  const [number, setNumber] = useState(0);
  // 01. number가 변경되면 초기화되면서 아래에 someFunction 함수 객체도 다른 주소로 저장되기 때문에 useEffect가 실행됨.
  // const someFunction = () => {
  //   console.log(`someFunc: number: ${number}`);
  //   return;
  // };

  const [toggle,setToggle] = useState(true);

  //useCallback을 이용한다.
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`); // 03. 하지만 재사용이기 때문에 number가 업데이트 되지 않는다.
    return;
  }, [number]); // 02. [] 빈 배열을 넣어주면 첫 렌더링 시에만 실행되고 저장됨. 이후에는 초기화 되지 않고 재사용. 04. [nubmer]로 해주어야 number가 바뀔 떄마다 갱신됨.


  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={()=>{setToggle(!toggle)}}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;
