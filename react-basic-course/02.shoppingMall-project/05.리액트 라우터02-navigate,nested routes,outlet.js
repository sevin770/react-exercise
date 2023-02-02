1. 페이지 이동 도와주는
useNavigate()

use어쩌구 하는 것들은 다 hook이다. 유용한 것들이 들어있는 함수라고 보면 됨.

let navigate = useNavigate(); 
작성하고 사용.

Link를 쓰면 a태그 같은게 생성되기 때문에 꼴보기 싫다.
<Link to="/" className="nav-link">Home</Link>

그래서 navigate를 이용함.  
<Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>

navigate(-1) 하면 1페이지 뒤로가기 
navigate(1) 하면 1페이지 앞으로가기 


2. 404페이지 - 없는 페이지 ui

path="*" 작성한 것 외 모든 페이지를 의미한다.

<Route path="*" element={<div>없는 페이지입니다. 404</div>} />



2.nested routes

/about/member
/about/location 
등등 여러 경로로 만들고 싶을 때?

<Route path="/about" element={ <div>어바웃</div> } />
<Route path="/about/member" element={ <div>멤버들</div> } />
<Route path="/about/location" element={ <div>회사위치</div> } />

경로 각각 만들어도 되지만 nested routes 이용하면 더 간편. 위랑 똑같다.

<Route path="/about" element={ <About/> } >  
  <Route path="member" element={ <div>멤버들</div> } />
  <Route path="location" element={ <div>회사위치</div> } />
</Route>

장점1. route작성이 간단해진다
장점2. nested route 접속 시에는 element 2개나 보임. about/member로 들어가면 about, member의 element가 다 보임
하지만 member를 about 내부 어디에 보여줄 지 작성해놔야 한다.
about에 해당 위치에
<Outlet></Outlet> 작성한다.

언제씀? 
- 여러가지 페이지가 필요할 때
- 페이지 간에 차이점이 별로 없을 때. 유사한 페이지를 만들 때


1. 이런식으로 ui를 만들면 뒤로가기 버튼 이용 가능
2. 페이지 이동이 쉬움(ui스위치 조작 쉬움)


- event 페이지 만들어서 혼자해보기