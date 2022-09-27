import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";
import studentReducer from "./student.reducer";
import {combineReducers} from 'redux'
import countriesReducer from "./countries.reducer";
import scoreReducer from "./score.reducer";
var reducer = combineReducers({
    counter:counterReducer,
    todos:todoReducer,
    students:studentReducer,
    countries:countriesReducer,
    score:scoreReducer
})
export default reducer;