import {BrowserRouter as Router, Route} from "react-router-dom"
import Meals from "./views/Meals/Meals";
import MealsDetails from "./views/MealsDetails/MealsDetails";
import Ingredient from "./views/Ingredients/Ingredient";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
// //exact - точное совподение
// //path -адресная строка
const App = () => {
    return (
        <div className='container'>

            <Router>
                <Header />
                <Route exact path='/'><Home /></Route>
                <Route exact path='/meal'><Meals /></Route>
                <Route path='/meal/:id'><MealsDetails /></Route> {/*:id' - название параметра*/}
                <Route path='/ingredient/:ingredient'><Ingredient /></Route>
            </Router>
        </div>
    );
};

export default App;
