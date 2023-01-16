
예제1)
+버튼 누르면 항목의 갯수가 올라가도록 만들기.
순서가 아니라 id로 연결

◆ findIndex : array에서 원하는 게 몇 번째에 있나 찾아주는 함수

배열.findIndex((파라미터)=>{return 조건식})
저 안에 들어가는 파라미터는 배열에 있는 데이터를 의미.

let product = createSlice({
    name : 'product',
    initialState : 
    [{id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}],
    reducers : {
      numCount(state,action){
        let 번호 = state.findIndex((a)=>{ return a.id === action.payload }) // 일치하면 몇 번째에 위치하는지 알려줌.
        state[번호].count++ 
      }
    }
})
export let {numCount} = product.actions

위처럼 데이터 작성후 cart.js에서 사용하기
 
        {
            cartItem.map((a,i)=>{
              return(
              <tr key={i}>
                <td>{cartItem[i].id}</td>
                <td>{cartItem[i].name}</td>
                <td>{cartItem[i].count}</td>
                <td><button onClick={()=>{
                  dispatch(numCount(cartItem[i].id)); 
                }}>+</button></td>
              </tr>
              )
            })
          }

------------------------------------------------------------

예제2)
버튼 누르면 state에 상품 추가하기.

let product = createSlice({
  name : 'product',
  initialState : 
  [{id : 0, name : 'White and Black', count : 2},
  {id : 2, name : 'Grey Yordan', count : 1}],
  reducers : {
    addItem(state,action){
      state.push(action.payload);
    }
  }
})


export let {addItem} = product.actions

----------------------
위처럼 작성 후 detail 페이지에서 사용하기
cart페이지 가보면 목록이 추가된 걸 볼 수 있다.


import { addItem } from "../store"
import { useDispatch } from "react-redux"

function Detail2(props) {

  let dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        </div>
        <div className="col-md-6">
          <button className="btn btn-danger" onClick={()=>{dispatch(addItem({id:3, name:
          'Grey item', count:1}));}}>주문하기</button>
        </div>
      </div>
    </div>
  );
}

