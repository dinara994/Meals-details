import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import Ingredients from "../Ingredients/Ingredients";
import Youtube from "../../components/Youtube/Youtube";

const MealsDetails = () => {
    const params = useParams() //{id: 12345} -обьект в нем храниться
    const [meal, setMeal] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [youTube, setYouTube] = useState('')

    //UseEffect - срабатывает когда рендерится компонент
    useEffect(() => {
        const fetchData = async () => {
            const {data: {meals}} = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`) //id название параметра(Запрос на сервер)
            setMeal(meals[0])

            const ingredientsArray = Array(20).fill(0).reduce((acc, item, idx) => {
                const ingredient = meals[0][`strIngredient${idx + 1}`]
                return ingredient ? [...acc, ingredient] : acc
            }, [])
            const youtubeCode = meals[0].strYoutube.slice(meals[0].strYoutube.indexOf('v=') +2, meals[0].strYoutube.length)
        // .. = meals[0]-обьект с 1 блюдом => key stryoutube=> slice вырезаем(код видео)
            setIngredients(ingredientsArray) //массив с названиями ингредиентов
            setYouTube(youtubeCode)
        }
        fetchData()

    }, [params.id]) //если параметр изменится(в адресной строке) то надо получить заново новый рподукт

    return (

        <div className='row'>
            <div className='col-6'>
                <img src={meal.strMealThumb} alt="" className='img__details'/>
                <h3>{meal.strMeal}</h3>
                <p><span>Instructions:</span> {meal.strInstructions}</p>
            </div>

            <div className='col-6'>
                <Ingredients ingredients={ingredients} />
                <Youtube youTube={youTube} />

            </div>

        </div>

    );
};

export default MealsDetails;
