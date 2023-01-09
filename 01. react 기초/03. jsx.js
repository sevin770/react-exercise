// JSX문법: .js 파일에서 쓰는 html대용품

// html와 다른점
// 1. class는 className로 써야함.
// 2. 변수 넣는 건 {} : 데이터바인딩

// html글 바꾸려면 자바스크립트로는 
// document.getElementById().innerHTML = ?? 로 해야하는데 JSX는 그냥 중괄호 쓰고 쓰면 다 들어감.

// 3. style속성 넣을 때도 중괄호.
// style = {{스타일명: '값'}} 오브젝트 자료형식으로 넣어야 한다.

// html -> h4 style="color: red";
// JSX  -> h4 style={ {color:'red', fontSize='16px' } }   
// // -는 대문자로 font-size ->fontSize

// 4. 에러 메시지는 터미널/브라우저에서 확인

// app.js 에 html쓸 때 주의점
// return()안에는 병렬로 태그 2개 이상 기입 금지.
// <div><div>이런식으로 쓰면 안됨
    
// 이렇게 써야함.
// <div>
// </div>

//------------------------------------------------------------

function App(e) {
    let post = '강남 우동 맛집'; 
    //document.querySelector('h4').innerHTML = post;
    //이렇게 길게 써야하는데 리액트를 사용하면 아래처럼 중괄호 문법을 쓰면 변수를 쉽게 넣을 수 있다.

    return (
      <div className="App">
        <div className="App">
          <div className="black-nav">
            <h4 id={post}>블로그임</h4>
          </div>
          <h4>{post}</h4>
        </div>
      </div>
    );
  }
  
  