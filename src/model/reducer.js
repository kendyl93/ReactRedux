import { combineReducers } from 'redux';
import { productsReducer } from '../Products/reducer';

const rootReducer = combineReducers({ productsReducer });

export default rootReducer;
