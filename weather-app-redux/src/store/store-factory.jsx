import { createStore, applyMiddleware, combineReducers } from 'redux';
import { curWeather, showForm, error } from './reducers';

let state = {
    curWeather: [],
    showForm: false,
    error: false
};

const saver = store => next => action => {
    let result = next(action);
    localStorage['store'] = JSON.stringify(store.getState());
    return result;
}

const storeFactory = (initialState = state) => applyMiddleware(saver)(createStore)
                     (combineReducers({ curWeather, showForm, error }), 
                    localStorage['store'] ? JSON.parse(localStorage['store']) : state);

export default storeFactory;