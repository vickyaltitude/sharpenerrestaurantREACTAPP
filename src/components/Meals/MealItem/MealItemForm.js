import {useState, useContext } from 'react';
import CartContext from '../../../store/cart-context';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

  const [inputAmount,setInputAmount] = useState(0)
  const cartCtx = useContext(CartContext)

  const handleItemTotalAmount = (ev) =>{
    ev.preventDefault();
    console.log(cartCtx)
     cartCtx.totalAmount = Number(cartCtx.totalAmount) + inputAmount
   
    console.log(cartCtx.totalAmount)
  }

  return (
    <form className={classes.form} onSubmit={ (event) => handleItemTotalAmount(event)}>
      <Input
        label='Amount'
        input={{
            value: inputAmount,
            onChange: (e)=> setInputAmount(e.target.value),
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
        }}
      />
      <button type='submit'>+ Add</button>
    </form>
  );
};

export default MealItemForm;