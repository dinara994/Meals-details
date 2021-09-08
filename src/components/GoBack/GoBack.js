import React from "react";
import {useHistory} from "react-router-dom";


const GoBack = () => {
    const history = useHistory();

    function handleClick() {
        history.goBack('/home')
    }
    return (
        <>
            <button type='button' onClick={handleClick} className='search__btn nav-link'>Go back</button>
        </>
    )
}
export default GoBack