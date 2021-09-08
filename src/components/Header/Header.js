import React from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import Search from "../Search/Search";



const Header = () => {
    const history = useHistory();

    function handleClick() {
        history.goBack('/home')
    }

    return (
        <nav className='header nav-header'>
            <nav className='nav '>
                <a href="/" className='logo margin'>You logo
                    <img src='/' alt=""/>
                </a>
                <Link to="/" className='margin'>Home</Link>
                <Link exact to="/meals" className='home-link margin'>Meals</Link>
                <button type='button' onClick={handleClick} className='nav-link margin btn'>Go back</button>
            </nav>
            <Search />

        </nav>
    );
};

export default Header;