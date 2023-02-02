

1. html,css디자인
2. 상태 저장할 state 생성
3. state에 따라서 ui가 어떻게 보일지 생성

삼항연산자 밖에 못씀.
html에서 이프문 쓰는 법?
컴포넌트 안에 담아서 넣는다. 

function TabContent(){
  if( 탭 === 0 ){
    return <div>내용0</div>
  } 
  else if( 탭 === 1 ){
    return <div>내용1</div>
  } 
  else if( 탭 === 2 ){
    return <div>내용2</div>
  }     
}

컴포넌트는 결과에 꼭 return을 넣어줘야 오류가 안난다.


  let [탭, 탭변경] = useState(0)

    <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{
            탭변경(0);
          }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{
            탭변경(1);
          }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{
            탭변경(2);
          }}>버튼2</Nav.Link>
        </Nav.Item>
    </Nav>
    <TabContent 탭={탭}/>


    function TabContent(props){
 
      if( props.탭 == 0 ){
        return <div>내용0</div>
      } 
      else if( props.탭 == 1 ){
        return <div>내용1</div>
      } 
      else if( props.탭 == 2 ){
        return <div>내용2</div>
      } 
        
    }



-------------------------------------------------


팁1) props가 귀찮으면?
props 위치에 {props이름} 으로 등록. 
여러개가 있다면? {props이름1, 이름2}
그럼 props.이름이 아니라 그냥 이름만 써도 됨.

function TabContent({탭}){
 
  if( 탭 == 0 ){
    return <div>내용0</div>
  } 
  else if( 탭 == 1 ){
    return <div>내용1</div>
  } 
  else if( 탭 == 2 ){
    return <div>내용2</div>
  } 
    
}

팁2) if문 안쓰는 법 배열순서를 이용한다.

function TabContent({탭}){
  return [<div>내용0</div>, <div>내용0</div>, <div>내용0</div>][탭]
}
