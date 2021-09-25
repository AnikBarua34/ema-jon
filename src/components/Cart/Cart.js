import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart}= props;
        let mealName = [];
        for(const meal of cart){
        mealName = (meal.strMeal)
}



    return (
        <div>
            <h3>Cart</h3>
                    <h3>Meal Name : {mealName}</h3>
                    <h3> cart length : {props.cart.length}</h3>
        </div>
    );
};

export default Cart;