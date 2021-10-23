import React from 'react';
import {Link} from "react-router-dom";

const MealsList = ({meals}) => {
    return (
        <div className='row'>
            {
                meals.map(item =>
                    <div className='col-3' key={item.idMeal}>
                        <Link to={`/meal/${item.idMeal}`}>
                            <div className='box'>
                                <img src={item.strMealThumb} alt="" className='img-news'/>
                                <h3>{item.strMeal}</h3>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default MealsList;