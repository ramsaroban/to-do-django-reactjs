import React from 'react';
import { Field, reduxForm } from 'redux-form';

class BucketForm extends React.Component {
    state = { is_marked: 'No' }

    renderFields = ({ input, label, meta: { touched, error } }) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                { touched && error && (
                    <span className='ui pointing red basic label'>{error}</span>
                )}
            </div>
        );
    };

    onSubmit = formvalues => {
        this.props.onSubmit(formvalues, this.state.is_marked);
    };


    onChecked = e => {
        if (e.target.value) {
            this.setState({ is_marked: 'Yes' })
        }
        else {
            this.setState({ is_marked: 'No' })
        }
    }


    renderDropDown() {
        return (
            <>
                <div className="ui checkbox">
                    <input type="checkbox" name="is_completed" onClick={(e) => { this.onChecked(e) }} />
                    <label>Mark as Completed.</label>
                </div>
                <br />
                <br />
            </>
        );
    }


    render() {
        const btnText = `${this.props.initialValues ? 'Update' : 'Add'}`;
        // const isMarked = `${this.props.initialValues.is_completed === 'Yes' ? true : false}`;
        return (
            <div className='ui card' style={{ marginLeft: '300px', marginTop: '7rem', width: '1000px' }}>
                <div className="content">
                    <div className="header">{this.props.title}</div>
                </div>
                <div className="content">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}
                        className='ui form segment'>
                        <Field name='bucket_name' component={this.renderFields} label='#Bucket Name' />
                        <Field name='description' component={this.renderFields} label='#Description' />
                        {this.props.action === 'Edit' ? this.renderDropDown() : ''}
                        <button className='ui primary button'>{btnText}</button>
                    </form>
                </div>
            </div>
        );
    };
}

const validate = formvalues => {
    const errors = {};
    // const { bucket_name } = formvalues;
    if (!formvalues.bucket_name) {
        errors.bucket_name = 'Please Enter at least 1 characteBucket name can not be more that 20 character.';
    }

    return errors;
};

export default reduxForm({
    form: 'bucketForm',
    touchOnBlur: false,
    validate
})(BucketForm)