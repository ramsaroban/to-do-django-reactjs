import _ from 'lodash'
import {
    SELECTED_BUCKET
} from '../actions/types';

const selectBucketReducers = (state = {}, action) => {
    switch (action.type) {
        case SELECTED_BUCKET:
            return {
                ..._.assign({}, state, [action.payload])
            }
        default:
            return state;
    }
};

export default selectBucketReducers;