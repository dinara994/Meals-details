import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

//const [ingredient, setIngredient] = useState([])
// -[хранит данные от useState, => функция которую мы можем вызвать вызывающаяся(в которую можно положить ) ] = передает
// react СОХРАНИ у себя в таблице ^ пустой МАССИВ, [1.-верни обратно, и верни функцию с помошью которого я могу менять на другую []  чтоб ты потом мог отрагмроватьт на изменение и ПЕРЕРИСОВАТЬСЯ]

const Ingredient = () => {
    const params = useParams()
    const [ingredient, setIngredient] = useState([])

    useEffect(() => {
        axios(`https://themealdb.com/api/json/v1/1/filter.php?i=${params.ingredient}`)
            .then(({data}) => setIngredient(data.meals[0]))
    }, [params.ingredient])

    return (
        <div>
            <div className='row'>
                {
                    ingredient.map(item =>
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
    );
};

export default Ingredient;