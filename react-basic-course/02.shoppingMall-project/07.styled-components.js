
styled-components

◆ 장점

장점1 ) js파일에서 모두 해결할 수 있다.

장점2 ) 해당 모듈을 쓰면 스타일이 다른 js파일로 오염되지 않음. 

리액트는 코드를 다 짜면 하나로 합쳐주기 때문에 css파일들도 하나로 합쳐진다. 
그래서 스타일을 모든 곳에서 다 갖다 쓸 수 있게 되고 복잡해짐.

js파일이름.module.css 로 작명하면 해당 js에만 적용됨. 
ex)App.module.css

장점3 ) 페이지 로딩시간 단축

별도의 css파일을 만드는 게 아니라 html에 style태그를 주입해주는 형식이기 때문이다.
해당 페이지 구동에만 필요한 css만 불러오니까 더 빠름.


1. npm install styled-components

2. 불러올 js에서 import한다.
import 작명 from 'styled-components'

3.  작명.태그`원하는 스타일 입력`

4. 변수에 저장해서 사용.
하나의 컴포넌트가 만들어진 것이기 때문에 변수 이름은 대문자로 시작


import styled from 'styled-components';

let YellowBtn = styled.button`
  background : yellow;
  color: black;
  padding: 10px;
`

function Detail1(props) {
    return (
      <div className="container">
        <h4>디테일 페이지</h4>
        <Box>
          <YellowBtn>버튼</YellowBtn>
        </Box>
      </div>
    );
  }



  Q. 중복되는 스타일은 props로 컴포넌트 재활용. 
  걍 외부 라이브러리 사용법임. 
  
  let YellowBtn = styled.button`
  background : ${props => props.bg};
  color: black;
  padding: 10px;
`
function Detail1(props) {
    return (
      <div className="container">
        <h4>디테일 페이지</h4>
        <Box>
          <YellowBtn bg="blue">버튼</YellowBtn>
        </Box>
      </div>
    );
  }


- 자바스크립트 문법도 적용할 수 있어서 간단한 프로그래밍도 가능하다.

let YellowBtn = styled.button`
background : ${props => props.bg};
color: ${props => props.bg == 'blue'? 'white' : 'black'};
padding: 10px;
`

- 기존 스타일 복사가능

let NewBtn = styled.button(YellowBtn)`
`

◆ 단점

1. js 파일이 매우 복잡해진다.
2. 보통 중복되는 스타일은 컴포넌트간 import할텐데 css파일 쓰는 거랑 다를바가 없다. 
3. 협업시 css담당의 숙련도 이슈
