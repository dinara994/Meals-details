import React from 'react';
import {NavLink} from "react-router-dom";
import { useHistory } from "react-router-dom";


const Header = () => {
    const history = useHistory();
    function handleClick(){
        history.goBack('/home')
    }
    return (
        <nav className='nav-header'>
            <a href="/" className='logo'>You logo</a>
            <nav className='nav'>
                <NavLink to="/" className='nav-link'>Home</NavLink>
                <NavLink exact to="/meal" className='nav-link'>Meals</NavLink>
                <button type='button' onClick={handleClick} className='search__btn nav-link'>Go back</button>
            </nav>

        </nav>
    );
};

export default Header;