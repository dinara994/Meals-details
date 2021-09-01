import React, {useEffect, useState,} from "react";
import axios from "axios";
import '../../index.css'
import {Link} from "react-router-dom";

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios('https://themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, [])

    return (
        <div>
            <div className='row'>
                {
                    meals.map(item =>
                        <div className='col-3' key={item.idMeal}>
                            <Link to={`/meal/${item.idMeal}`}>
                                <div className='box'>
                                    <img src={item.strMealThumb} alt=""/>
                                    <h3>{item.strMeal}</h3>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Meals