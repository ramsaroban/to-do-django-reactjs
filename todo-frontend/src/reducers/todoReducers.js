import _ from 'lodash'

import {
    ADD_TODO,
    GET_TODOS,
    GET_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../actions/types';

const todoReducers = (state = {}, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            };
        case GET_TODO:
        case ADD_TODO:
        case EDIT_TODO:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case DELETE_TODO:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};

export default todoReducers;