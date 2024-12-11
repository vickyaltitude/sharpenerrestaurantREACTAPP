import {useState, useContext } from 'react';
import CartContext from '../../../store/cart-context';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

  const [inputQty,setInputQty] = useState(0)
  const cartCtx = useContext(CartContext)

  const handleItemTotalAmount = (ev) =>{
    ev.preventDefault();
    let currentItem = props.meals.filter((meal)=> props.itemId === meal.id)
         currentItem[0].inputQty = Number(inputQty)
    cartCtx.addItem(...currentItem)

  }

  return (
    <form className={classes.form} onSubmit={ (event) => handleItemTotalAmount(event)}>
      <Input
        label='Amount'
        input={{
            value: inputQty,
            onChange: (e)=> setInputQty(e.target.value),
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