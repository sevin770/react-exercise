
- 동적인 UI만드는 step
탭,모달창, 경고문, 햄버거메뉴 등등 활용 가능

1. html,css로 미리 디자인 완성
2. ui현재 상태를 state로 저장
3. state에 따라 ui가 어떻게 보일지 작성



2. state 저장

let [modal, setModal] = useState(ture); 
// 형식은 자유. 모달창 상태 표현만 가능하면 된다.
// true-false , 문자로 열림-닫힘, 숫자로 0-1 ...등등

3. state가 true면 보여주세요 라는 조건식 작성

하지만 html {}안에 if 조건문은 들어갈 수 없다.
삼항연산자는 가능.
html중간에 조건문을 쓰고 싶으면 삼항연산자!!

null : 비어있는 html용으로 자주 사용.

 { 
    modal === true? <Modal /> : null
 }

그냥 자바스크립트면 html을 직접 건드림
리액트는 스위치(state)만 건드림.


let [modal, setModal] = useState(ture); 

// 모달창 혼자해보기
// function App () => {
//    return(
//       <h4 onClick={ () => { 
//          if ( modal === false ) {
//            setModal(true);
//          }
//          else { 
//            setModal(false);
//          }
//        }}>{글제목[2]}</h4>
//    )
// }

//답
// !true는 출력해보면 false
// !false는 출력해보면 true

function App () => {
   return(
      <div>
      <h4 onClick={()=>{ setModal(!modal)}}>{글제목[2]}</h4>
      { 
         modal == true ? <Modal></Modal> : null
      }
      </div>
   )
}


변수에 넣어서 사용하는 아래와 같은 방식도 있다.

function Modal() {
   return (
     <div className="modal">
       <h4>{props.글제목}</h4>
       <p>날짜</p>
       <p>상세내용</p>
     </div>
   );
 }
 const Modal2 = () => {
   return (
     <div className="modal">
       <h4>제목</h4>
       <p>날짜</p>
       <p>상세내용</p>
     </div>
   );
 };