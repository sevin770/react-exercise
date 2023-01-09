자식이 부모의 state를 가져다 쓰고 싶을 땐 props를 이용.

<app> 컴포넌트 : 부모
<modal> 컴포넌트 : 자식
부모의 컴포넌트가 가지고 있는 state를 자식컴포넌트에서 가져다 쓸 수 있다. props를 이용하면 됨.
자식에서 부모로 전송은 불가능. 형제로도 안됨. 부모->자식으로만 됨.

부모 -> 자식 state전송하는 법
1. <자식컴포넌트 작명 = {state이름}>
보편적으로 작명은 state이름과 똑같이 쓴다.

{modal === true ? <Modal 작명={글제목}/> : null}

2. props파라미터 등록 후 props.작명 사용

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.작명}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}



Q. 팝업창마다 다양한 색상의 모달창이 필요할 때?

{modal === true ? <Modal 작명={글제목} color={"yellow"}/> : null }

-작명하고 밑에 넣어준다. state뿐만 아니라 일반문자, 함수등도 전송 가능.

function Modal(props) {
  return (
    <div className="modal" style={background :props.color}> // 이런식으로 파라미터로 넣을 수 있음.
      <h4>{props.작명}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}


파라미터 문법은 다양한 기능을 하는 함수를 만들 때 사용한다. props도 파라미터 문법과 같다. 


-혼자해보기

모달창 안에 글수정 버튼을 누르면 첫 글제목이 '여자코트 추천'으로 바뀌게 하기.

{modal === true ? <Modal 글제목={글제목} 글제목변경={글제목변경}/> : null}

(생략)

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.글제목];
        copy[0] = '예쁜코트추천'
        props.글제목변경(copy);
      }}>글수정</button>
    </div>
  );
}


- 누른 글제목이 모달창 안에 뜨게 하려면?

동적인 ui 만들기 스텝 1.html,css작성 2.현재 state 저장 3.state에 따라 ui가 어떻게 보일지 작성.

function App (){
  let [title, setTitle] = useState(0);
  (생략)
  {
    modal == true ? <Modal title={title} 글제목={글제목} /> : null
  }
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

그다음에 넣어주면 끝

function App (){
  return (
    <div>
      { 
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4 onClick={()=>{ setModal(true); setTitle(i); }}>{ 글제목[i] }</h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      }
    </div>
  )
}





* state 를 자시에 만들면 부모 -> 자식 전송할 필요없다. 
하지만 여러가지 컴포넌트들에 필요하다면 가장 최상위 컴포넌트에 저장해야 한다. (app컴포넌트)
자식에 만들어 놓으면 나중에 다른 컴포넌트들에서 쓸 수 없기 때문에.
