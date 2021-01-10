import axios from 'axios'
import { reset } from 'redux-form'
import history from '../history'
import {
    ADD_TODO,
    GET_TODOS,
    GET_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../actions/types';

export const getTodos = () => async dispatch => {
    const response = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/to-dos/',
        headers: {
            'Content-type': 'application/json'
        }
    }).catch(function (response) {
        alert('Something went wrong!!');
    });
    dispatch({ type: GET_TODOS, payload: response.data });
    history.push('/');
};


export const getTodo = id => async dispatch => {
    const response = await axios({
        method: 'get',
        url: `http://127.0.0.1:8000/api/to-dos/${id}`,
        headers: {
            'Content-type': 'application/json'
        }
    }).catch(function (response) {
        alert('Something went wrong!!');
    });

    dispatch({
        type: GET_TODO,
        payload: response.data
    });

};


export const addTodo = (bucket_id, formValues) => async dispatch => {
    const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/to-dos/',
        data: {
            'bucket': bucket_id,
            "todos_name": formValues.todos_name,
            "is_completed": "No"
        },
        headers: {
            'Content-type': 'application/json'
        }
    }).catch(function (response) {
        alert('Something went wrong!!');
    });
    dispatch({
        type: ADD_TODO,
        payload: response.data
    });
    dispatch(reset('todoForm'));
    history.push('/')
};

export const editTodo = (id, formValues, is_completed = 'No') => async dispatch => {
    const response = await axios({
        method: 'patch',
        url: `http://127.0.0.1:8000/api/to-dos/${id}/`,
        data: {
            "todos_name": formValues.todos_name,
            "is_completed": is_completed
        },
        headers: {
            'Content-type': 'application/json'
        }
    }).catch(function (response) {
        alert('Something went wrong!!')
    });

    dispatch({
        type: EDIT_TODO,
        payload: response.data
    });

    history.push('/');
};


export const deleteTodo = id => async dispatch => {
    await axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/api/to-dos/${id}`,
        headers: {
            'Content-type': 'applicaiton/json'
        }
    }).catch(function (response) {
        alert('Something went wrong!!')
    });

    dispatch({
        type: DELETE_TODO,
        payload: id
    });
    history.push('/');
};