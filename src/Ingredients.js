import React from 'react';
import {Link} from "react-router-dom";

const Ingredients = ({Ingredients}) => {
    return (
        Ingredients.map((el, idx) =>
            <div key={idx} className='col-3'>
                {/*<Link to={`/meal/:ingredient${el}`}>*/}
                {/*    <img src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt=""/>*/}
                {/*    <h3>{el}</h3>*/}
                {/*</Link>*/}
            </div>
        )
    );
};

export default Ingredients;