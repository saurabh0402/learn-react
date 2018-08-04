import C from './constants';

export const addCity = (id, placeDetails, weatherDetails) => ({
    type: C.ADD_CITY,
    id,
    placeDetails,
    weatherDetails,
    lastUpdated: Date.now()
});

export const deleteCity = id => ({
    type: C.REMOVE_CITY,
    id
});

export const updateCity = (id, weatherDetails) => ({
    type: C.UPDATE_CITY,
    id,
    weatherDetails
});

export const toggleShowForm = () => ({
    type: C.TOGGLE_SHOW_FORM
});

export const toggleError = () => ({
    type: C.TOGGLE_ERROR
})