import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Shop.css';

const Shop = () => {
const [meals,setMeals]=useState([])
const [cart,setcart]=useState([])
useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res=> res.json())
    .then(data => setMeals(data.meals))
},[])

const handleAddToCart =(meal) =>{

    const newCart = [...cart,meal]
    setcart(newCart)
}
    return (
        <div>
            <div className='shop-container'>
                <div className="meals-conatiner">
                <h3>Meals</h3>
                {
                    meals.map(meal => <Meal key ={meal.idMeal} meal={meal}
                    handleAddToCart={handleAddToCart}
                    ></Meal>)
                }

                </div>


                <div className="cart-conatiner">
                    <Cart cart={cart}></Cart>
                   
                </div>
            </div>
        </div>
    );
};

export default Shop;