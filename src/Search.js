import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState('') //input - для поиска includes('')

    const history = useHistory()
    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase()) // прежде чем класть в state - превращаем нижний регистр
    }
     const filterMeals = search.filter(el => el.name.toLowerCase().includes(search))
    const handleClick = () => {
        if (search.trim()) {
            history.push(`/brows/${search}`)
        }
    }

    return (
        <div>
            <input type="text" onChange={handleSearch} className='search' placeholder='Search...'/>  {/*берет onChange{}  и записываетв state то что печатаем*/}
           <button onClick={handleClick}></button>
            <div className='row'>
                {
                    filterMeals.map(el => //переменная filteredPokemons
                        <div className='col-3' key={el.idMeal}>
                            <img src={el.strMealThumb} alt=""/>
                            <h3>{el.strMeal}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default Search