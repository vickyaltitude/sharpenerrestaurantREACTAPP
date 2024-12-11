import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import {useContext} from 'react'
import CartContext from '../../store/cart-context';

const Cart = (props) => {

    const CartCtx = useContext(CartContext)
    let totalAmount = CartCtx.items.reduce((cumul,curr)=> { 
        console.log( curr)
      return  cumul + (curr.price*curr.inputQty)},0)
   
    
  const cartItems = (
    <ul className={classes['cart-items']}>
      {CartCtx.items.map((item) => (
        <li key={Math.random()}>{item.name}</li>
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