import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import {useContext} from 'react'
import CartContext from '../../store/cart-context';

const Cart = (props) => {

    const CartCtx = useContext(CartContext)
    let totalAmount = CartCtx.items.reduce((cumul,curr)=> { 
     
      return  cumul + (curr.price*curr.inputQty)
    
    },0)
   
    function handleItemIncrease(eve){
        let mealName = eve.target.parentNode.firstChild.innerText
        CartCtx.removeItem(mealName,'increase')
    }
     
    function handleItemDecrease(eve){
      let mealName = eve.target.parentNode.firstChild.innerText
      CartCtx.removeItem(mealName,'decrease')
    }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {CartCtx.items.map((item) => (
        <li key={Math.random()}>
          <span> {item.name}</span> - <span>{item.inputQty} Quantity</span>  &nbsp;&nbsp;
          <button onClick={(eve)=>handleItemDecrease(eve)}>-</button> &nbsp;
          <button onClick={(eve)=>handleItemIncrease(eve)}>+</button>
          
          </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
     
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;