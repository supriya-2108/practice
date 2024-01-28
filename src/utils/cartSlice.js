import { createSlice } from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        // In vanilla (old redux) it was prohibited to mutate the state and return was mandatory but in Reddux Toolkit they have said to mutate the state directly and returning is also not mandatory

        // const newstate=[...state]; newstate.items.push(action.payload);return newstate : old version
        // behind the scene redux still is doing this only but this is abstracted using library IMMER to do this
        addItem: (state,action)=>{
            // mutating the state = directly modifying the state
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        // cart:['pizza'] ==>original state
        clearCart: (state)=>{
            // state=[] this is not mutating the state this is just changing the reference this state is a local variable it will change it locally but not the original state (the state is parameter is a local variable) we can check the current state by using (current(state) this comes from redux toolkit)

            // RTK - either mutate the existing state or return a newstate the below statement is equivalent to return{item: []} original state is empty
            state.items.length=0;
        }
    }
})
export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer
