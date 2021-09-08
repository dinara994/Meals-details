import React, {useEffect, useState} from 'react';
import MealsList from "../../components/MealsList/MealsList";
import {useParams} from "react-router-dom";
import axios from "axios";

const Browse = () => {
    const params = useParams()
    const [meals, setMeals] = useState([])
    const [notFound, setNotFound] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setNotFound('')
            const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            !data.meals ? setNotFound('Not Found') : setMeals(data.meals)
        }
        fetchData()
    },[params.name])

    return (
        <div className='container'>
            {
                notFound ? <p className='text-browse'>{notFound}</p> : <MealsList meals={meals} />

            }
        </div>
    );
};

export default Browse;