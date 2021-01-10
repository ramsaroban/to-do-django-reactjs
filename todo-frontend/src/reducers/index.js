import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import bucketReducers from './bucketReducers'
import todoReducers from './todoReducers'
import selectBucketReducers from './selectedReducers'


export default combineReducers({
    form: formReducer,
    buckets: bucketReducers,
    todos: todoReducers,
    selected: selectBucketReducers
});