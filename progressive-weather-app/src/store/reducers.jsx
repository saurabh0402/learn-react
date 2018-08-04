import C from './constants';

export const city = (state={}, action) => {
    switch(action.type){
        case C.ADD_CITY:
            return ({
                id: action.id,
                weatherDetails: action.weatherDetails,
                placeDetails: action.placeDetails,
                lastUpdated: action.lastUpdated
            })
        case C.UPDATE_CITY:
            return (state.id !== action.id) ?
                state:
                {
                    ...state,
                    weatherDetails: action.weatherDetails,
                    lastUpdated: Date.now()
                }
        default:
                return state
    }
};

export const curWeather = (state=[], action) => {
    switch(action.type){
        case C.ADD_CITY:
            return [
                ...state,
                city({}, action)
            ]
        case C.REMOVE_CITY:
            return state.filter((w) => w.id !== action.id)
        case C.UPDATE_CITY:
            return state.map((w) => city(w, action))
        default:
            return state
    }
};

export const showForm = (state=false, action) => {
    switch(action.type){
        case C.TOGGLE_SHOW_FORM:
            return !state
        default:
            return state
    }
};

export const error = (state=false, action) => {
    switch(action.type){
        case C.TOGGLE_ERROR:
            return !state
        default:
            return state
    }
};