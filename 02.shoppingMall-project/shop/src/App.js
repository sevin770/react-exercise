import { createContext, useState } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav, NavItem } from "react-bootstrap";
import data from "./Components/data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import {Detail1, Detail2} from "./Pages/Detail";
import Cart from "./Pages/Cart";
import axios from 'axios'

let Context = createContext()

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [num, setNum] = useState(0);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate("/");}}>Home</Nav.Link>
            <Link to="/detail" className="nav-link">Detail</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Nav.Link onClick={()=>{ navigate("/event"); }}>Event</Nav.Link>
            <Nav.Link onClick={() => {navigate(1);}}>앞으로</Nav.Link>
            <Nav.Link onClick={() => {navigate(-1);}}>뒤로</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
            <>
              <div className="main-bg" style={{backgroundImage: `url("${process.env.PUBLIC_URL + "/bg.png"}")`,}}></div>
              <div className="container">
              <Item shoes={shoes} setShoes={setShoes}/>
              </div>
              <button onClick={()=>
                {
                  setNum(num+1);
                  console.log(num);
                  if( num == 0 ){
                    axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
                    console.log(shoes);
                    console.log(결과.data);
                    let copy = [...shoes, ...결과.data];
                    setShoes(copy);
                  })
                    .catch(()=>{
                    console.log('실패함')
                    })
                  } else if( num == 1) {
                    axios.get('https://codingapple1.github.io/shop/data3.json').then((결과)=>{
                    console.log(shoes);
                    console.log(결과.data);
                    let copy = [...shoes, ...결과.data];
                    setShoes(copy);
                  })
                    .catch(()=>{
                    console.log('실패함')
                    })
                  }
                }
              }>더보기</button>
            </>
          }/>
        <Route path="/detail/" element={<Detail1 shoes={shoes}/>} />
        <Route path="/detail/:id" element={<Detail2 shoes={shoes}/>} />
        <Route path="*" element={<div>없는 페이지입니다. 404</div>} />
        <Route path="/about" element={ <About /> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>
        <Route path="/event" element={<Event navigate={navigate} />}>
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> }></Route>
          <Route path="two" element={ <div>생일기념 쿠폰받기</div> }></Route>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(props){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
      <button onClick={()=>{ props.navigate("/event");}}>eventHome</button>
      <button onClick={()=>{ props.navigate("/event/one");}}>one</button>
      <button onClick={()=>{ props.navigate("/event/two");}}>two</button>
    </div>
  )
}

function Item(props) {
  return (
    <div className="row">
      {props.shoes.map((a, i) => {
        return (
          <div className="col-md-4" key={i}>
            <img src={process.env.PUBLIC_URL + "/shoes" + (i+1) + ".jpg"} width="80%" />
            <h4>{props.shoes[i].title}</h4>
            <p>{props.shoes[i].price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
