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
        }
    }
})

// let user = createSlice({
//     name: 'user',
//     initialState : 'kim'
//     reducers : {
//         changeName(state){
//             return 'john' + state
//         }
//     }
// }) 
// array,object 형식은 state 변경할 때 return으로 해줄 필요가 없다. 그냥 즉시 변경 가능


export let {changeName, increase} = user.actions
export default user