import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from './../store'

function Cart() {
  
  let a = useSelector((state) => {return state })
  // console.log(a)
  // console.log(a.user)
  // console.log(a.stock)

  let cartItem = useSelector((state)=> state.product)
  console.log(cartItem);

  let dispatch = useDispatch();

  return (
    <div>
      {a.user}의 장바구니
      <button onClick ={()=>{dispatch(changeName())}}>변경</button>
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
            cartItem.map((a,i)=>{
              return(
              <tr key={i}>
                <td>{cartItem[i].id}</td>
                <td>{cartItem[i].name}</td>
                <td>{cartItem[i].count}</td>
                <td></td>
              </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
