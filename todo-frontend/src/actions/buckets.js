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
    await axios({
        method: 'get',
        url: 'http://ramsaroban.pythonanywhere.com/api/my-bucket/',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => dispatch({
        type: GET_BUCKETS,
        payload: response.data
    })).catch(error => {
        alert('Something went wrong!!');
    });

    history.push('/');
};


export const getBucket = id => async dispatch => {
    await axios({
        method: 'get',
        url: `http://ramsaroban.pythonanywhere.com/api/my-bucket/${id}`,
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => dispatch({
        type: GET_BUCKET,
        payload: response.data
    })).catch(error => {
        alert('Something went wrong!!');
    })
};


export const addBucket = formValues => async dispatch => {
    await axios({
        method: 'post',
        url: 'http://ramsaroban.pythonanywhere.com/api/my-bucket/',
        data: {
            "bucket_name": formValues.bucket_name,
            "description": formValues.description,
            "is_completed": "No"
        },
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => dispatch({
        type: ADD_BUCKET,
        payload: response.data
    })).catch(error => {
        alert('Something went wrong!!');
    });

    dispatch(reset('bucketForm'));
    history.push('/')
};

export const editBucket = (id, formValues, is_marked = 'No') => async dispatch => {
    await axios({
        method: 'patch',
        url: `http://ramsaroban.pythonanywhere.com/api/my-bucket/${id}/`,
        data: {
            "bucket_name": formValues.bucket_name,
            "description": formValues.description,
            "is_completed": is_marked
        },
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => dispatch({
        type: EDIT_BUCKET,
        payload: response.data
    })).catch(error => {
        alert('Something went wrong!!')
    });
    history.push('/');
};


export const deleteBucket = id => async dispatch => {
    await axios({
        method: 'delete',
        url: `http://ramsaroban.pythonanywhere.com/api/my-bucket/${id}`,
        headers: {
            'Content-type': 'applicaiton/json'
        }
    }).then(() => dispatch({
        type: DELETE_BUCKET,
        payload: id
    })).catch(function (response) {
        alert('Something went wrong!!')
    });
    ;
    history.push('/');
};

export const selectedBucket = bucket => async dispatch => {
    dispatch({
        type: SELECTED_BUCKET,
        payload: bucket
    })

    history.push('/')
}