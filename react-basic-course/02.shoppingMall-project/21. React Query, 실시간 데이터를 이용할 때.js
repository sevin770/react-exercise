서버랑 통신하는 응용기능

- 몇초마다 자동으로 데이터 다시 가져오게 하려면?
- 요청실패시 몇초 간격으로 재시도?
- 다음 페이지 미리가져오기?
- ajax 성공/실패시 각각 다른 html을 보여주려면?

->> 직접짜기 귀찮다면 react query사용.
실시간sns, 코인거래소등 실시간 데이터를 계속 가져와야 하는  사이트에서 유용. 그외에는 그닥..

1. 설치
npm install react-query

2. indext.js 셋팅

import { QueryClient, QueryClientProvider } from "react-query"  //1번
const queryClient = new QueryClient()   //2번

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>     {/* 3번 */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
); 

===============

서버에서 유저이름 가져와서 보여주기

1. html 적당한 위치 골라서 작성. 
2. 유저이름 불러오기 : 
axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
    a.data
})
하지만 react-query를 이용해서 ajax를 요청하면 응용기능을 더 쉽게 구현가능하다.

- 사용법
* return은 { } 와 함께 생략 가능

useQuery('작명', ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{ 
      return a.data })
  })

- 최종적으로 변수에 넣어서 사용한다.

function App(){
    let result = useQuery('작명', ()=>
      axios.get('https://codingapple1.github.io/userdata.json')
      .then((a)=>{ return a.data })
    )
  }

◆ 장점1. ajax 요청 성공/실패/로딩중 상태를 쉽게 파악할 수 있습니다. 

result.data : ajax가 성공했을 때 가져오는 데이터
result.isLoading : ajax 요청이 로딩중일 때
result.error : ajax가 실패했을 때

<Nav.Link className="ms-auto">
    {result.isLoading? '로딩중' : result.data.name}
</Nav.Link>
이런식으로 코딩하면 로딩중일 땐 로딩중이 나오고 아닐 땐 데이터 이름이 출력된다. 

{ result.isLoading && '로딩중' }
{ result.error && '에러남' }
{ result.data && result.data.name }

이런식으로 다양하게 코딩 가능.

◆ 장점2. 틈만나면 알아서 ajax 재요청해줍니다. 

let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      console.log('요청됨') 
      return a.data })
  )

* 콘솔로 찍어보면 주소 탭을 다른 곳 갔다가 다시 들어갈 때마다 실시간 요청된다.
* 타이머기능 : {staleTime : 2000} 하면 refetch 간격을 2초로 설정해줄 수 있다. 

let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      console.log('요청됨') 
      return a.data }),
      {staleTime : 2000}
  )

◆ 장점3. 실패시 재시도 알아서 해줌

◆ 장점4. ajax로 가져온 결과는 state 공유 필요없음.
또 불러오고 싶으면 걍 ajax 요청 코드 한 번 더 적으면 된다.

◆ 장점5. ajax 결과 캐싱기능
성공 결과를 5분 동안 기록해놓는다.
5분 안에 또 재요청 했을 때, 미리 기록해놓은 결과를 우선 보여준다. 성공한 결과를 미리 보여주고 get요청을 시작하니까 더 빠르다.

- Redux Toolkit 설치한 경우 RTK Query 라는것도 기본적으로 사용가능
근데 셋팅하는 코드가 좀 더럽다.