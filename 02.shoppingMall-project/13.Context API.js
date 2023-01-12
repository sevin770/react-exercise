html페이지가 하나인 사이트
single page application 라이브러리(리액트등등)의 단점

컴포넌트간 state공유가 어렵다
부모->자식 외에 공유 안됨

부모 -> 자식이라도 뛰어넘는게 안됨.
app -> detail -> tabcontent 구조인데 
app에서 tabcontent로 state를 쓰려면 detail을 거쳐가야 함.

<Detail1 shoes={shoes}/>
<TabContent 탭={탭} shoes = {props.shoes}/>
function TabContent({탭, shoes}){
이런식으로 가져다 써야 하는데 중첩이 여러겹이면 아주 복잡하고 귀찮음
그래서

1. Context API : props전송 없이 state공유가능
성능이슈, 컴포넌트 재활용이 어려운 단점 때문에 잘 사용하지 않는다. 
- state변경 시 쓸데없는 것까지 재렌더링 해버린다. 변경된 state를 안쓰고 있어도 적용된 컴포넌트들은 다 재렌더링 되어버림.
- 다른 페이지에서 import해서 재사용할 때 관리가 힘들다. 

2. Redux 외부라이브러리 사용

----------------------------------------------------------------------------

◆ Context API 사용법 

let [재고] = useState([10,11,12]) >> 이걸 detail과 tabcontent에서 쓰려면? 

셋팅1. context는 state보관함이다. 보관함을 하나 만들어준다.
let Context1 = createContext()

셋팅2. <Context>로 공유를 원하는 컴포넌트 감싸기
<Context1.Provider> <Detail1 shoes={shoes}/> <Context1/>

셋팅3. value = {{재고, shoes}} 공유를 원하는 state넣어주기 ,로 여러개 가능
<Context1.Provider value = {{재고}}> <Detail1 shoes={shoes}/> <Context1/>

사용1. 보관함 export하고 공유한 컴포넌트로 가서 보관함 import하기
export let Context1 = createContext()

공유한 컴포넌트
import {Context1} from './../App.js'

사용2. useContext(Context)
useContext(Context1) : 보관함 해체해주는 함수.

let a = useContext(Context1) 
a를 출력해보면 state가 여러개 나옴. 원하는 거 꺼내쓰면 됨.

let {재고, shoes} = useContext(Context1) 
{재고} 라고 쓰면 props가 없어도 app 에 있던 state 10,11,12가 나온다. 

detail컴포넌트 뿐만 아니라 그 자식컴포넌트들도 props없이 위에 코드만 짜주면 자유롭게 쓸 수 있다. 
