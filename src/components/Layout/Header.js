import React, {Fragment} from 'react';
import foodImage from '../../assests/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';


const Header = () =>{
  
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>OrderFood</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
           
                <img src={foodImage} alt ="table full of delicious image!"></img>
            </div>
        </Fragment>
    )
}

export default Header