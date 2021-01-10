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
    await axios({
        method: 'get',
        url: 'https://ramsaroban.pythonanywhere.com/api/to-dos/',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((response) => dispatch({
        type: GET_TODOS,
        payload: response.data
    })).catch(error => {
        alert('Something went wrong!!');
    })

    history.push('/');
};


export const getTodo = id => async dispatch => {
    await axios({
        method: 'get',
        url: `https://ramsaroban.pythonanywhere.com/api/to-dos/${id}`,
        headers: {
            'Content-type': 'application/json'
        }
    }).then((response) => dispatch({
        type: GET_TODO,
        payload: response.data
    })).catch(function (response) {
        alert('Something went wrong!!');
    });

};


export const addTodo = (bucket_id, formValues) => async dispatch => {
    await axios({
        method: 'post',
        url: 'https://ramsaroban.pythonanywhere.com/api/to-dos/',
        data: {
            'bucket': bucket_id,
            "todos_name": formValues.todos_name,
            "is_completed": "No"
        },
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => dispatch({
        type: ADD_TODO,
        payload: response.data
    })).catch(error => {
        alert('Something went wrong!!');
    });

    dispatch(reset('todoForm'));
    history.push('/')
};

export const editTodo = (id, formValues, is_completed = 'No') => async dispatch => {
    await axios({
        method: 'patch',
        url: `https://ramsaroban.pythonanywhere.com/api/to-dos/${id}/`,
        data: {
            "todos_name": formValues.todos_name,
            "is_completed": is_completed
        },
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => dispatch({
        type: EDIT_TODO,
        payload: response.data
    })).catch(error => {
        alert('Something went wrong!!')
    });
    dispatch(reset('todoForm'));
    history.push('/');
};


export const deleteTodo = id => async dispatch => {
    await axios({
        method: 'delete',
        url: `https://ramsaroban.pythonanywhere.com/api/to-dos/${id}`,
        headers: {
            'Content-type': 'applicaiton/json'
        }
    }).then(dispatch({
        type: DELETE_TODO,
        payload: id
    })).catch(error => {
        alert('Something went wrong!!')
    });
    history.push('/');
};