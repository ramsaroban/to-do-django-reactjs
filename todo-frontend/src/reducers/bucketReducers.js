import _ from 'lodash'

import {
    ADD_BUCKET,
    GET_BUCKETS,
    GET_BUCKET,
    EDIT_BUCKET,
    DELETE_BUCKET,
} from '../actions/types';

const bucketReducers = (state = {}, action) => {
    switch (action.type) {
        case GET_BUCKETS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            };
        case GET_BUCKET:
        case ADD_BUCKET:
        case EDIT_BUCKET:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case DELETE_BUCKET:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};

export default bucketReducers;