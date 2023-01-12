import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { Fade, Nav } from 'react-bootstrap'

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;

let Box = styled.div`
  padding: 20px;
`;

function Detail1(props) {
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [inputbox, setInputbox] = useState("");
  let [opacity, setOpacity] = useState('');

  useEffect(()=>{
    let b = setTimeout(()=>{ setOpacity('on')},100);
    return()=>{
      clearTimeout(b);
      setOpacity('off')
    }
  },[])
  

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log(1);
  }, [count]);

  useEffect(() => {
    if (isNaN(inputbox) === true) {
      console.log("숫자가 아닙니다");
    }
  }, [inputbox]);

  return (
    <div className={`container ${opacity}`} >
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <h4>디테일 페이지</h4>
      <Box>
        <YellowBtn>
          <Link to="1">1번 상품</Link>
        </YellowBtn>
        <YellowBtn bg="black">
          <Link to="2">2번 상품</Link>
        </YellowBtn>
        <YellowBtn bg="orange">
          <Link to="3">3번 상품</Link>
        </YellowBtn>
      </Box>
      {count}
      <button onClick={() => {setCount(count + 1);}}>
        버튼
      </button>
      <Box>
        {" "} <input type="text" onChange={(e) => { setInputbox(e.target.value);}}/>{" "}
      </Box>
    </div>
  );
}

function Detail2(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });

  let [탭, 탭변경] = useState(0)


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + "/shoes" + (찾은상품.id + 1) + ".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
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
      <TabContent 탭={탭} shoes = {props.shoes}/>
    </div>
  );
}

function TabContent({탭, shoes}){
  let [fade, setFade] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{
      setFade('end')
    },100)
    return ()=>{
        clearTimeout(a)
        setFade('')
    }
  },[탭])

  return (
    <div className={'start ' + fade}>
      {[<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  ) 
}

export { Detail1, Detail2 };
