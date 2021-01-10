import axios from 'axios'
import { reset } from 'redux-form'
import history from '../history'
import {
    ADD_BUCKET,
    GET_BUCKETS,
    GET_BUCKET,
    EDIT_BUCKET,
    DELETE_BUCKET,
    SELECTED_BUCKET
} from '../actions/types';

export const getBuckets = () => async dispatch => {
    const response = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/my-bucket/',
        headers: {
            'Content-type': 'application/json'
        }
    }).catch(function (response) {
        alert('Something went wrong!!');
    });
    dispatch({ type: GET_BUCKETS, payload: response.data });
    history.push('/');
};


export const getBucket = id => async dispatch => {
    const response = await axios({
        method: 'get',
        url: `http://127.0.0.1:8000/api/my-bucket/${id}`,
        headers: {
            'Content-type': 'application/json'
        }
    }).catch(function (response) {
        alert('Something went wrong!!');
    });

    dispatch({
        type: GET_BUCKET,
        payload: response.data
    });

};


export const addBucket = formValues => async dispatch => {
    const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/my-bucket/',
        data: {
            "bucket_name": formValues.bucket_name,
            "description": formValues.description,
            "is_completed": "No"
        },
        headers: {
            'Content-type': 'application/json'
        }
    }).catch(function (response) {
        alert('Something went wrong!!');
    });
    dispatch({
        type: ADD_BUCKET,
        payload: response.data
    });
    dispatch(reset('bucketForm'));
    history.push('/')
};

export const editBucket = (id, formValues, is_marked = 'No') => async dispatch => {
    console.log(formValues)
    const response = await axios({
        method: 'patch',
        url: `http://127.0.0.1:8000/api/my-bucket/${id}/`,
        data: {
            "bucket_name": formValues.bucket_name,
            "description": formValues.description,
            "is_completed": is_marked
        },
        headers: {
            'Content-type': 'application/json'
        }
    }).catch(function (response) {
        alert('Something went wrong!!')
    });

    dispatch({
        type: EDIT_BUCKET,
        payload: response.data
    });

    history.push('/');
};


export const deleteBucket = id => async dispatch => {
    await axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/api/my-bucket/${id}`,
        headers: {
            'Content-type': 'applicaiton/json'
        }
    }).catch(function (response) {
        alert('Something went wrong!!')
    });

    dispatch({
        type: DELETE_BUCKET,
        payload: id
    });
    history.push('/');
};

export const selectedBucket = bucket => async dispatch => {
    dispatch({
        type: SELECTED_BUCKET,
        payload: bucket
    })

    history.push('/')
}