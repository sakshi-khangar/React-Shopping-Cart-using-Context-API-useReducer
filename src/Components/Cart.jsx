import { useContext } from "react";
import { CartContext } from "./CardContext";

function Cart (){
    const {state, dispatch} = useContext (CartContext);

    return(
        <div className="cart-box">
            <h2>Cart</h2>

            {state.cart.map(item =>(
                <div className="cart-item" key={item.id}>
                    <p>{item.name}-{item.price}</p>
                    <button onClick={()=> dispatch({type:"REMOVE",id:item.id})}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}
export default Cart;
