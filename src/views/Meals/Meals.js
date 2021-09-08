import React, {useEffect, useState,} from "react";
import axios from "axios";
import '../../index.css'
import MealsList from "../../components/MealsList/MealsList";

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios('https://themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, [])

    return (
        <div>
            <MealsList meals={meals}/>
        </div>
    )
}

export default Meals