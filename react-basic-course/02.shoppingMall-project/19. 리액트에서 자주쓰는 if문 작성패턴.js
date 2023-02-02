1. 컴포넌트 안에서 쓰는 if/else

◆ if문은 return () 안의 JSX 내에서는 사용 불가능
<div> if (어쩌구) {저쩌구} </div> 가 불가함.
그래서 return + JSX 전체를 퉤 뱉는 if문을 작성해서 사용. 


function Component() {
    if ( true ) {
      return <p>참이면 보여줄 HTML</p>;
    } else {
      return null;
    }
  } 

◆ else는 생략 가능
function Component() {
    if ( true ) {
      return <p>참이면 보여줄 HTML</p>;
    } 
    return null;
  } 

2. JSX안에서 쓰는 삼항연산자 

◆ JSX 내에서도 쓸 수 있어서 if/else 대신 사용한다.
조건을 간단히 주고 싶을 때 사용

function Component() {
    return (
      <div>
        {
          1 === 1
          ? <p>참이면 보여줄 HTML</p>
          : null
        }
      </div>
    )
  }

◆ 중첩사용도 가능. 하지만 코드가 지저분하고 보기가 힘들어서 비추천
  function Component() {
    return (
      <div>
        {
          1 === 1
          ? <p>참이면 보여줄 HTML</p>
          : ( 2 === 2 
              ? <p>안녕</p> 
              : <p>반갑</p> 
            )
        }
      </div>
    )
  } 

3. && 연산자로 if 역할 대신하기

&&연산자에 자료형을 넣으면?
&&로 연결된 값들 중에 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막값을 남겨준다

true && '안녕'; //'안녕'출력
false && '안녕'; //false출력
true && false && '안녕'; //false출력

  function Component() {
    return (
      <div>
        { 1 === 1 && <p>참이면 보여줄 HTML</p> }
      </div>
    )
  }

- 왼쪽 조건식이 false면 false가 남는다.

4. switch / case 조건문
장점: if문 연달아 쓸 때 코드를 줄일 수 있다.
단점: 변수 하나밖에 검사를 못한다.

1. switch (검사할변수){} 
2. case 검사할변수가이거랑일치하냐 :
3. 일치하면 case : 밑에 있는 코드를 실행
4. default : 마지막에 쓰는 else문과 동일

(예시 코드)
function Component2(){
    var user = 'seller';
    if (user === 'seller'){
      return <h4>판매자 로그인</h4>
    } else if (user === 'customer'){
      return <h4>구매자 로그인</h4>
    } else {
      return <h4>그냥 로그인</h4>
    }
  }

(switch문법으로 변환)
function Component2(){
    var user = 'seller';
    switch (user){
      case 'seller' :
        return <h4>판매자 로그인</h4>
      case 'customer' :
        return <h4>구매자 로그인</h4>
      default : 
        return <h4>그냥 로그인</h4>
    }
  }

5. object/array 자료형 응용 
경우에 따라서 다른 html 태그들을 보여주고 싶은 경우?
조건문을 여러 개 작성해야할 때 응용법.

예시) 쇼핑몰에서 상품설명부분을 탭으로 만든다.
현재 state가 info면 <p>상품정보</p>
현재 state가 shipping이면 <p>배송정보</p>
현재 state가 refund면 <p>환불약관</p> 보여주기


1. 자바스크립트 object 자료형에 내가 보여주고 싶은 HTML을 담는다.
object{} 뒤에 [] 대괄호를 붙여서 "key값이 현재상태인 자료를 뽑겠습니다" 라고 써놓는다.
그럼 변수의 값에 따라서 원하는 HTML을 보여줄 수 있다.

function Component() {
    var 현재상태 = 'info';
    return (
      <div>
        {
          { 
             info : <p>상품정보</p>,
             shipping : <p>배송관련</p>,
             refund : <p>환불약관</p>
          }[현재상태]
        }
      </div>
    )
  }

2. 변수에 저장해서 쓰면 깔끔하다.

var 탭UI = { 
    info : <p>상품정보</p>,
    shipping : <p>배송관련</p>,
    refund : <p>환불약관</p>
  }
function Component() {
    var 현재상태 = 'info';
    return (
      <div>
        {
          탭UI[현재상태]
        }
      </div>
    )
  } 
