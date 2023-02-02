
리덕스에서 state변경하는 법
1. state 수정해주는 함수 만들고
2. 원할 때 그 함수 실행해달라고 store.js에 요청



let user = createSlice({
    name: 'user',
    initialState : 'kim'
})

여기서 kim을 john kim으로 바꾸고 싶다면?
1. reducers : { state수정해주는 함수(){}}

let user = createSlice({
    name: 'user',
    initialState : 'kim'
    reducers : {
        changeName(state){
            return 'john' + state
        }
    }
})

2. 만든 함수를 export한다. 
변수 외부에서 해야함.
state보관함이름.actions : state변경 함수가 남는다.

export let { 변경함수이름 } = user.actions : 오른쪽 자료를 변수로 빼는 문법 
export let { changeName } = user.actions
 

3. 만든 함수 import 해서 사용한다.
useDispatch() : store.js로 요청보내주는 함수.

import { changeName } from './../store'

let dispatch = useDispatch() 

원하는 실행 위치에 함수실행해달라고 store.js에 요청
dispatch(state변경함수()) 



1. state변경해주는 함수 만들기 2.export 3.dispatch(state변경함수())
-------------------------------------------------

let user = createSlice({
    name: 'user',
    initialState : 'kim',
    reducers : {
        changeName(state){
            return 'john' + state
        }
    }
})

export let {changeName} = user.actions

-------------------------------------------------


import { useDispatch, useSelector } from 'react-redux'
import { changeName } from './../store'
import store from './shop/src/store'

function Cart() {
  
  let a = useSelector((state) => {return state })
  let dispatch = useDispatch();

  return (
    <div>
      {a.user}의 장바구니
      <button onClick ={()=>{dispatch(changeName())}}>변경</button>
    </div>
  );
}

export default Cart;


-----------------

수정함수는 복잡하게 왜 만드는 걸까?
각각 컴포넌트 내에서 state를 변경할 수 있으면 오류가 났을 때 어떤 컴포넌트가 범인인지 찾기가 힘듦.
수정함수를 만들어 놓으면 store.js만 살펴보면 됨.