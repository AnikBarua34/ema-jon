import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBirthdayCake, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {

    const {strMeal,strMealThumb,strCategory}=props.meal;
    const element = <FontAwesomeIcon icon={faBell} />
    return (
        <div className='meal-div'>
            <div>
            <img src={strMealThumb} alt="" />
            </div>


           <div>
           <h2>{strMeal}</h2>
           <h3>Category : {strCategory}</h3>
           <button onClick={()=>props.handleAddToCart(props.meal)}> {element}Add Meal To Cart</button>
           </div>
            
        </div>
    );
};

export default Meal;