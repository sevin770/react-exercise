html은 너무 더럽다
깔끔하게 축약할 수 있는 react 기능

component 만드는 문법
1. function만들고 (다른 function 바깥에 해야함. 영어 대문자로 시작함.)
2. return()안에 html 담기
3. <함수명></함수명> 쓰기.

function App(){
    return(
        <div className="container">
            <h1>hello</h1>
            <Modal></Modal> - 밑에 만든 함수를 이렇게 가져다가 쓰는 거임.
            <Modal/> - 이렇게 써도 됨.
        </div>
    )
}
function Modal(){
    return(
        <div className="popupBox">
            <h2>modal</h2>
        </div>
    )
}

컴포넌트 만드는 문법2) 
변수에 넣어서 이런식으로 만드는 방법도 있다. (실수 방지를 위해 const를 사용)

const Modal = () => {
    return(
        <div className="popupBox">
            <h2>modal</h2>
        </div>
    )
}


*유의점
return ( ) 내부는 하나의 태그로 시작해서 하나의 태그로 끝나야한다.
이런식으로.
    return(
        <div>
          <div></div>
          <div></div>
        </div>
      )

그래서 굳이 <div> 두개를 나란히 적고 싶으면 저렇게 하나의 div로 또 감싸거나 해야함.
의미없는 div 쓰기 싫으면 <> </> 이걸로 감싸도 됨. fragment 문법

* 의미없는 <div>대신 <></>사용 가능하다.


어떤 걸 컴포넌트로 만들면 좋을까?
1. 반복적인 html 축약할 때.
2. 큰 페이지들.
3. 자주 변경되는 것들.

- 컴포넌트의 단점 : state를 가져다 쓸 때 문제가 생긴다.
기존 함수에 있는 변수는 다른 함수에서 맘대로 가져다 쓸 수가 없기 때문이다.