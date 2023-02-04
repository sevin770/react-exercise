import React, { useReducer, useState } from "react";

//reducer - state를 업데이트 하는 역할(은행)
//dispatch - state업데이트를 위한 요구
//action - 요구의 내용

const ACTION_TYPES = {
  deposit: "deposit이렇게쓰면이름바꿔도됨",
  withdraw: "withdraw이렇게쓰면이름바꿔도됨"
};

const reducer = (state, action) => {
  console.log("reducer가 일을 합니다", state, action);
  switch (
    action.type //action의 타입에 따라 state를 업데이트 할 수 있다.
  ) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};
function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행</h2>
      <p>잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000" //단위
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}

export default App;
