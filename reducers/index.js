import inputtextReducer from './inputtext';
import handleresultsReducer from './handleresults';
import handlecategoryReducer from './handlecategory';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    s: inputtextReducer,
    results: handleresultsReducer,
    category: handlecategoryReducer
});

export default allReducers;