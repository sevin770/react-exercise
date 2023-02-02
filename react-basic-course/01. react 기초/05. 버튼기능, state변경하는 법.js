// 이벤트 핸들러

// onClick={ 함수 } 이 안에는 함수만 써야 함. function을 쓰거나 함수 따로 만들어서 넣거나.

//   function 함수(){
//     console.log(1);
//   }
// <span onClick={ 함수 }>👍</span>
// or
// <span onClick={ function(){console.log(1);} }>👍</span>
// <span onClick={ () => {console.log(1);} }>👍</span>


// - state 변경하는 법 : 등호안먹힘.
// <span onClick={ () => {따봉 = 따봉+1 }}>👍</span> : 이딴 거 안됨.
// state 변경함수를 이용해야 한다.

// * state변경함수(새로운 state값)

// 클릭시에 따봉을 1로 변경시키자.
// let [따봉, 따봉변경] = useState(0);
// <span onClick={ () => { 따봉변경(1) }}>👍</span> {따봉} 

//------------------------------------------------------------

let [따봉, 따봉변경] = useState(0);

return (
  <div className="App">
    <div className="black-nav">
      <div>개발 blog</div>
    </div>
    <div className="list">
      <h4>{글제목[0]} <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
    </div>
  </div>
)