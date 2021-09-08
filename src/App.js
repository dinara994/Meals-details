import {BrowserRouter as Router, Route} from "react-router-dom"
import Meals from "./views/Meals/Meals";
import MealsDetails from "./views/MealsDetails/MealsDetails";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import MainIngredient from "./views/MainIngredient/MainIngredient";
import Browse from "./views/Browse/Browse";
import Search from "./components/Search/Search";
// //exact - точное совподение
// //path -адресная строка
//const [ingredient, setIngredient] = useState([])
//- [хранит данные от useState, => функция которую мы можем вызвать вызывающаяся(в которую можно положить ) ] = передает
//- react СОХРАНИ у себя в таблице ^ пустой МАССИВ, [1.-верни обратно, и верни функцию с помошью которого я могу менять на другую []
// чтоб ты потом мог отреагировать на изменение и ПЕРЕРИСОВАТЬСЯ]
//- useParams - В нашем приложении React иногда мы хотим получить доступ к параметрам текущего маршрута, в
// этом случае срабатывает хук useParams. В пакете response-router-dom есть хуки useParams, которые позволяют вам получить доступ к параметрам текущего маршрута.

const App = () => {
    return (
    <section className='home-section'>
        <div className='container'>
            <Router>
                <Header />
                <Route exact path='/'><Home /></Route>
                <Route path='/meals'><Meals /></Route>
                <Route path='/meal/:id'><MealsDetails /></Route> {/*:id' - название параметра(придумываем сами и params.id)*/}
                <Route path='/ingredient/:name'><MainIngredient /></Route>    {/* params.ingredient*/}
                <Route path='/browse/:name'><Browse /></Route>    {/* params.ingredient*/}
                <Route path='/search/:name'><Search /></Route>    {/* params.ingredient*/}
            </Router>
        </div>
    </section>
    );
};

export default App;
