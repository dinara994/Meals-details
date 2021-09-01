import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

//const [ingredient, setIngredient] = useState([])
//- [хранит данные от useState, => функция которую мы можем вызвать вызывающаяся(в которую можно положить ) ] = передает
//- react СОХРАНИ у себя в таблице ^ пустой МАССИВ, [1.-верни обратно, и верни функцию с помошью которого я могу менять на другую []
// чтоб ты потом мог отреагировать на изменение и ПЕРЕРИСОВАТЬСЯ]
//- useParams - В нашем приложении React иногда мы хотим получить доступ к параметрам текущего маршрута, в
// этом случае срабатывает хук useParams. В пакете response-router-dom есть хуки useParams, которые позволяют вам получить доступ к параметрам текущего маршрута.
const Ingredient = () => {
    const params = useParams()
    const [ingredient, setIngredient] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.stringredient}`)
            .then(({data}) => {
                const dish = data.meals
                setIngredient(dish)
                const mealIng = Array(20).fill(0).reduce((acc, item, idx) => {
                    const result = `strIngredient${idx + 1}`
                    return dish[result] ? [...acc, dish[result]] : acc;
                },[])
                setIngredient(mealIng)
            })
    }, [params.ingredient])


        axios('')

    return (
        <div>
            <div className='row'>
                {
            ingredient.map(el =>
                    <div key={el.idMeal}>
                            <img src={el.strMealThumb} alt=""/>
                            <h3>{el.strMeal}</h3>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default Ingredient;