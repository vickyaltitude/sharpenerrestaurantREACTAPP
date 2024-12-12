import  CartContext from "./cart-context"
import {useState} from 'react'

const CartProvider = (props)=>{
   
    const [items,setItems] = useState([])

    const addItemToCartHandler = (getItems) => {
           
        console.log(items,getItems)
          let updateItems = items.filter(item => item.id === getItems.id)
          if(updateItems.length){
             let newItems = items.map(item => item.id === getItems.id ? {...item,inputQty: getItems.inputQty + item.inputQty} : item)
             setItems(latest =>  newItems)
          }else{
            setItems((latest)=>[...latest,getItems])
          }
         
          
           

    };
    const removeItemFromCartHandler = (getItems,method) => {
       
          if(method === 'increase'){
            let newItems = items.map(item => item.name === getItems ? {...item,inputQty: item.inputQty + 1} : item)
            setItems(latest =>  newItems)
          
          }else if(method === 'decrease'){
            let newItems = items.map(item => item.name === getItems ? {...item,inputQty: item.inputQty === 0 ? 0 : item.inputQty - 1} : item)
            setItems(latest =>  newItems)
          }
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