import  CartContext from "./cart-context"
import {useState} from 'react'

const CartProvider = (props)=>{
   
    const [items,setItems] = useState([])
    const [totalAmount,setTotalAmount] = useState(0);

    const addItemToCartHandler = (getItems,total) => {

           setItems(...items,getItems)
           setTotalAmount(total)

    };
    const removeItemFromCartHandler = () => {

    };

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)
}

export default CartProvider