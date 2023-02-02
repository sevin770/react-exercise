import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/uesrSlice'

let stock = createSlice({
    name: 'stock',
    initialState : [10,11,12]
})

let product = createSlice({
    name : 'product',
    initialState : 
    [{id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}],
    reducers : {
      numCount(state,action){
        let 번호 = state.findIndex((a)=>{ return a.id === action.payload }) // 일치하면 몇 번째에 위치하는지 알려줌.
        state[번호].count++ 
      },
      addItem(state,action){
        state.push(action.payload);
      }
    }
})


export let {numCount,addItem} = product.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    product :product.reducer
  }
}) 

