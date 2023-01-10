import { useState } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from "./Components/data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./Pages/Detail";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

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
            </>
          }/>
        <Route path="/detail/" element={<Detail shoes={shoes}/>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route path="*" element={<div>없는 페이지입니다. 404</div>} />
        <Route path="/about" element={ <About /> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>
        <Route path="/event" element={<Event navigate={navigate} />}>
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> }></Route>
          <Route path="two" element={ <div>생일기념 쿠폰받기</div> }></Route>
        </Route>
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
            <img src={process.env.PUBLIC_URL + "/shoes" + (i + 1) + ".jpg"} width="80%" />
            <h4>{props.shoes[i].title}</h4>
            <p>{props.shoes[i].price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
