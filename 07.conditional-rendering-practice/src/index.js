import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

//userIsRegistered 변수를 이동하지 않고
//1. userIsRegistered가 true이면 Login을 버튼 텍스트로 표시합니다.
//userIsRegister가 거짓인 경우 버튼 텍스트로 Register를 표시합니다.
//2. userIsRegistered가 false인 경우에만 Confirm Password 입력을 표시합니다.
//userIsRegistered가 true이면 표시하지 않습니다.
