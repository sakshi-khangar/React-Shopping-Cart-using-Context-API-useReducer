import React, { useReducer , createContext   } from 'react'

export const CartContext = createContext();

const initialState = {
    cart : []
};
function cartReducer(state,action){
    if (action.type==="ADD"){
        return {
    cart:[...state.cart,action.item]
    };
}
 if (action.type === "REMOVE"){
    return {
        cart :state.cart.filter(item=>item.id !== action.id)
    };
 }
 return state;
}
function CartProvider({children}) {
    const [state,dispatch] = useReducer (cartReducer,initialState);

    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartProvider
