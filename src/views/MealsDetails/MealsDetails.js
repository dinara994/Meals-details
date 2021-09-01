import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";

const MealsDetails = () => {
    const params = useParams() //{id: 12345} -обьект в нем храниться
    const [meal, setMeal] = useState({})
    const [ingredients, setIngredients] = useState([])
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`) //id название параметра
            .then(({data}) => {
                const obj = data.meals[0]
                setMeal(obj)
                const mealIngs = Array(20).fill(0).reduce((acc, item, idx) => {

                    return obj[`strIngredient${idx + 1}`] ? [...acc, obj[`strIngredient${idx + 1}`]] : acc;
                },[])
                setIngredients(mealIngs)
            })
    }, [params.id]) //если параметр изменится(в адресной строке) то надо получить заново новый рподукт

    return (

        <div className='row'>
            <div className='col-6'>
                <img src={meal.strMealThumb} alt="" className='img__details'/>
                <h3>{meal.strMeal}</h3>
                <h4><span>Instructions:</span> {meal.strInstructions}</h4>
            </div>

            <div className='col-6'>
                {
                    ingredients.map(el=>
                        <div className='col-3'>
                            <img src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt=""/>
                            <h3>{el}</h3>
                        </div>
                    )
                }
            </div>

        </div>

    );
};

export default MealsDetails;
