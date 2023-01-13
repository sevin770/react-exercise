import { increase } from "./shop/src/store"

state가 array/object인 경우


let user = createSlice({
    name: 'user',
    initialState : {name: 'kim' age: 20},
    reducers : {
        changeName(state){
            return 'john' + state
        }
    }
})

오브젝트자료이기 때문에 user.name으로 써줘야 한다. 

name을 park 으로 바꾸려면?

let user = createSlice({
    name: 'user',
    initialState : {name: 'kim', age: 20},
    reducers : {
        changeName(state){
            return {name: 'partk , age: 20}
        }
    }
})

◆ array/object의 경우 직접수정해도 state가 변경된다. return안써도 됨
immer.js의 도움

let user = createSlice({
    name: 'user',
    initialState : {name: 'kim', age: 20},
    reducers : {
        changeName(state){
            state.name='park'
        }
    }
})

◆문자 하나만 필요해도 일부러 {}안에 담기도 한다. 편리하니까.

◆state 변경함수에 파라미터 뚫는 법.
파라미터.payload 해야 정상작동됨.
보통 파라미터 이름은 action으로 작명. 
state변경 함수들을 action이라고 함.

let user = createSlice({
    name: 'user',
    initialState : {name: 'kim', age: 20},
    reducers : {
        increase(state,action) {
            state.age +=action.payload
        },
    }
})
increase(10)
increase(100)



------------------------------------------------------
◆버튼 누르면 age가 1씩 올라가도록 만들기.

import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState : {name: 'kim', age: 20},
    reducers : {
        changeName(state){
            state.name = 'park'
        },
        increase(state){
            state.age +=1
        },
    }
})

export let {changeName, increase} = user.actions
export default user

------------------------------------------------------

import { changeName,increase } from './../store/uesrSlice'


function Cart() {

    let dispatch = useDispatch();
  
    return (
      <div>
        {state.user.name}{state.user.age}의 장바구니
        <button onClick = {()=>{ dispatch(increase())}}>나이변경</button>
      </div>
    );
  }
  
  export default Cart;