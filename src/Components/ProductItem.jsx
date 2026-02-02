import React, { useContext } from 'react';
import { CartContext } from './CardContext';

function ProductItem(){
    const {dispatch} = useContext (CartContext);
    
        return (
        <>
                <div className="product-box">
                <h3>Mobile</h3>
                <p>Price : 10000 Rs</p>
                <button onClick={()=>dispatch({
                    type : "ADD",
                    item: {id : 1, name : "Mobile" , price : 10000}
                })}>Add to Cart</button>
            </div>
            <div className='product-box'>
                <h3>Laptop</h3>
                <p>Price : 45000 Rs</p>
                <button onClick={()=>dispatch({
                    type : "ADD",
                    item : {id : 2 , name : "Laptop" , price : 45000}
                })}>Add to Cart</button>
            </div>
        
        </>
        )
}
export default ProductItem
