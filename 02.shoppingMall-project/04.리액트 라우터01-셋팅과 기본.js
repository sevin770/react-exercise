◆리액트 미사용 페이지 나누는 법
1. html파일 더 만들어서 상세페이지내용 채움.
2. 누가 /detail로 접속하면 html파일을 보내줌.

◆리액트 사용 페이지 나누는 법
1. index.html 하나만 쓴다. 컴포넌트를 만들어서 상세페이지내용 채움.
2. 누가 /detail로 접속하면 그 컴포넌트를 보여줌.

react-router-dom 라이브러리 쓰면 쉽게 만들 수 있다. 
외부라이브러리 사용법: 필요할 때 검색해서 쓰는 거임.
react-router-dom 6 사이트 참고

◆ 설치
npm install react-router-dom@6  

◆ index.js로 가서 
import { BrowserRouter } from "react-router-dom";
추가하고 <App/> 을 <BrowserRouter>로 감싸준다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
); 

◆ App.js 에서  
import { Routes, Route, Link } from 'react-router-dom'
작성하고 사용.

path 는 경로 /는 메인페이지  element는 html내용 <></> 박스안에 있어야댐.

<Routes>
<Route path="/" element={<div>상세페이지임</div>} /> 
<Route path="/detail" element={<div>상세페이지임</div>} />
<Route path="/about" element={<div>어바웃페이지임</div>}/>
</Routes>


페이지도 컴포넌트로 만들어야 라우터 안에 넣기 편리함.

◆페이지 이동버튼 Link
<Link to="/">홈</Link>
<Link to="/detail">상세페이지</Link>


폴더구조? 비슷한 파일끼리 묶으면 끝. 