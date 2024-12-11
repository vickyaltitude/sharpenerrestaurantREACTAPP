import  CartContext from "./cart-context"
import {useState} from 'react'

const CartProvider = (props)=>{
   
    const [items,setItems] = useState([])

    const addItemToCartHandler = (getItems) => {
           
          let updateItems = items.filter(item => item.id === getItems.id)
          setItems((latest)=>[...latest,getItems])
          
           

    };
    const removeItemFromCartHandler = () => {

    };

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)
}

export default CartProvider