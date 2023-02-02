

store.js파일

1. slice생성
createSlice: useState와 비슷한 속성
state하나를 slice라고 부른다.

createSlice({
    name: 'state이름~~',
    initialState : '값'
})

예시) 현재 유저의 이름을 저장

createSlice({
    name: 'user',
    initialState : 'kim'
})


2. slice 만들고 변수에 저장한 다음에 reducer에 등록해야 사용가능하다.

let 작명 = createSlice({
    name: 'user',
    initialState : 'kim'
})

export default configureStore({
    reducer: {
        작명 : user.reducer
     }
  }) 

  보통 작명은 옆에 이름이랑 똑같이 씀
  user : user.reducer


3. 다른 컴포넌트에서 꺼내 쓰기.
useSelector : redux store 가져와 줌 
let 변수 = useSelector((state) => {return state }) 이렇게 작성해서 변수에 넣어서 사용.

import { useSelector } from 'react-redux'

function Cart(){
    
    let a = useSelector((state) => {return state })
    console.log(a)

    return()
}


◆ useSelector 편하게 쓰려면??

useSelector((state) => {return state })
store 안에 있는 모든 state를 뜻함. 

- 한가지 항목만 가져다 쓰려면?
useSelector((state) => {return state.user })
이렇게 쓰면 user 스테이트만 가져옴.

- return {} 는 같이 생략가능
useSelector((state) => state.user )


◆ 컴포넌트가 적으면 props사용하는 게 코드가 더 짧지만, 컴포넌트가 여러개로 늘어나면 리덕스 사용.

◆ 공유가 필요 없는 state는 굳이 Redux store에 저장할 필요 없다.


--------------------------------

- 혼자해보기
cart에 state적용

let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ]
  })
  
  export default configureStore({
    reducer: {
      user : user.reducer,
      cart : cart.reducer
    }
  }) 


◆ state 가져다 쓰기
useSelector

-------
let state = useSelector((state)=>state)
console.log(state.cart[0].name)

-------

function Cart() {
  
    let state = useSelector((state) => {return state.cart })
    // console.log(state)
    // console.log(state.user)
    // console.log(state.stock)
  
    let cartItem = useSelector((state)=> state.product)
    console.log(cartItem);
  
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
            </tr>
          </thead>
          <tbody>
          {
           state.cart.map((a, i)=>
            <tr key={i}>
                <td>1</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>안녕</td>
            </tr>
           )
          }
          </tbody>
        </Table>
      </div>
    );
  }


