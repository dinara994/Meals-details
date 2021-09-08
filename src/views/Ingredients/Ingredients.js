import React from 'react';
import {Link} from "react-router-dom";

const Ingredients = ({ingredients}) => {
    return (
        <div className='row mealdeteil'>
            <h4>Ingredients</h4>

            {

                ingredients.map((el, idx) =>
                        <Link to={`/ingredient/${el}`} className='col-4' key={idx}>
                            <div className='box-mealing'>
                                <img src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt=""/>
                                <h3>{el}</h3>
                            </div>
                        </Link>
                )
            }
        </div>
    );
};

export default Ingredients;