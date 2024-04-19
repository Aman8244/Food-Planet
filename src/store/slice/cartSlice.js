import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem:[]
}

export const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const cartItem = {
                ...action.payload,
                restaurantId:action.payload.restaurantId
            }
            state.cartItem.push(cartItem)
        },
        removeItem:(state,action)=>{
            const {id} = action.payload
            const {restaurantId} = action.payload
            state.cartItem = state.cartItem.filter(el=>{
                return ((el._id !== id) && (el.restaurantId === restaurantId))
            })
        },
        reduceByOne:(state,action)=>{
            const {id} = action.payload
            const {restaurantId} = action.payload

            state.cartItem = state.cartItem.map((el)=>{
                if(el._id === id && el.quantity !== 1 && el.restaurantId === restaurantId){
                    return {
                        ...el,
                        quantity:el.quantity - 1
                    }
                }
                return el
            })
        },
        addByOne:(state,action)=>{
            const {id} = action.payload
            const {restaurantId} = action.payload
            state.cartItem = state.cartItem.map((el)=>{
                if(el._id === id && el.quantity <= 100 && el.restaurantId === restaurantId){
                    return {
                        ...el,
                        quantity:el.quantity+1
                    }
                }
                return el
            })
        },
        clearCart:(state,action)=>{
            state.cartItem = []
        }
    }
});
export const {addItem,removeItem,clearCart,reduceByOne,addByOne} = CartSlice.actions;
export default CartSlice.reducer;