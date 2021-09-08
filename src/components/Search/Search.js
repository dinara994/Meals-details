import React, {useState} from "react";
import {useHistory} from "react-router-dom";


const Search = () => {
    const history = useHistory()
    const [inputValue, setInputValue] = useState("")
    const handleClick = () => {
        if (inputValue.trim()) {
            history.push(`/browse/${inputValue}`)
            setTimeout(() => setInputValue(""), 1000)
        }
    }
    const input = (e) => {
        setInputValue(e.target.value.toLowerCase().trim()) // прежде чем класть в state - превращаем нижний регистр, убирает пробелы в начале и конце
    }
    const enterPress = (e) => {
        if (e.target.key === "Enter"){
            handleClick()
        }
    }

    // const handle = (e) =>{
    //     if(e.keyCode === 13){
    //         validate();
    //     }
    return (
        <div>
            <input onKeyDown={enterPress} type="text" onChange={input} className='search' placeholder='Search...'/>  {/*берет onChange{}  и записываетв state то что печатаем*/}
           <button onClick={handleClick} className='search-btn btn'>Search</button>
        </div>
    )
}
export default Search