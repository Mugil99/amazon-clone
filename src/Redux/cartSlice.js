import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    user: null,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
            console.log(state.cart)
        },
        removeFromCart: (state, action) => {
            state.cart = [...state.cart]
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.payload.id);
            if (index >= 0) {
                state.cart.splice(index, 1)
            }
            console.log(state.cart)
        },
        updateUser: (state, action) => {
            state.user = action.payload
            console.log(state.user)
        },
        setToZero:(state,action)=>{
            state.cart=[]
        }
    }
})

// export the generated Redux action creators and the reducer function for the whole slice
export const { addToCart, removeFromCart, updateUser,setToZero} = cartSlice.actions
export default cartSlice.reducer