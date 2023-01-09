사용자가 입력한 글 다루기

리액트에서 input은 이렇게 
 <input></input> 
 <input />
 닫는 태그를 꼭 써줘야 한다.

 -인풋에 뭔가 입력시 코드실행하고 싶다면? onChange / onInput 
 
 이벤트핸들러는 종류가 아주 많다. 약 서른개 정도
 onMouseOver : 마우스를 갖다 댔을 때 이벤트 실행
 onScroll : 스크롤을 조작할 때 이벤트 실행
 등등 필요할 때 찾아쓴다.

 -인풋에 입력한 값 가져오는 법
 인풋에 입력한 값 저장하려면 변수/state에 저장한다.


-변수에 저장하는 법.

 e: 이벤트 객체. 지금 발생하는 이벤트에 관련한 여러 기능이 담겨있는 일종의 변수.
 e.target : 이벤트 발생한 html태그.
 e.target.value : 이벤트 발생한 html태그에 입력한 값.
<input onChange={(e)=>{ console.log(e.target.value)}} /> 
입력하는 대로 콘솔창에 출력된다.

따봉을 눌러도 모달창이 열린다. 따봉을 누르는 순간 부모 요소들까지 다 3번 클릭한 것과 마찬가지기 때문에...이벤트 버블링
막으려면 e.stopProPagation(); 


-state에 저장하는 법

let [입력값, 입력값변경] = useState('');

스테이트를 만든 후 출력해보면

<input onChange={(e)=>{ 입력값변경(e.target.value); console.log(입력값)}} />
state 변경 함수는 늦게 처리된다. 그래서 완료되기도 전에 콘솔을 먼저 출력함. 콘솔창보면 첫번째는 공백이 나옴.


-혼자해보기
버튼 누르면 글 하나 추가되는 기능 만들기. 
(unshift:arrat 맨 앞에 추가, push:array 맨 끝에 추가)

<input onChange={(e)=>{ 입력값변경(e.target.value);}} />
<button onClick={()=>{ 
 let titleCopy = [...글제목];
 let goodCopy = [...따봉];
 titleCopy.push(입력값);
 goodCopy.push(0);
 글제목변경(titleCopy);
 따봉변경(goodCopy);
 }}>목록추가</button>


-글마다 삭제 버튼 & 기능 만들기. html에 추가.
(splice 배열의 요소를 삭제 splice(요소의 위치, 요소의 개수))

 <button onClick={()=>{
    let removeCopy = [...글제목];
    removeCopy.splice(i,1)
    글제목변경(removeCopy);
  }}