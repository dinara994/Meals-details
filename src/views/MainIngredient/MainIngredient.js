import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import MealsList from "../../components/MealsList/MealsList";

const MainIngredient = () => {
    const [meals, setMeals] = useState([])
    const params = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            setMeals(data.meals)
        }
        fetchData()
    }, [params.name])
    return (
        <div className='container'>
            <div className='row'>
                <Link className='col-3 col-md-3 col-sm-6 '>
                    <img src={`https://www.themealdb.com/images/ingredients/${params.name}.png`} alt={params.name}/>
                </Link>
            </div>
            <MealsList meals={meals}/>

        </div>
    );
};

export default MainIngredient;