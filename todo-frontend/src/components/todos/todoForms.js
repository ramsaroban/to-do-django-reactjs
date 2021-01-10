import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends React.Component {
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
        return (
            <div className='ui labeled left icon inout'>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className='ui form segment'>
                    <Field name='todos_name' component={this.renderFields} label='#Todo Name' />
                    {btnText === 'Update' ? this.renderDropDown() : ''}
                    <button className='ui primary button'>{btnText}</button>
                </form>
            </div>
        );
    };
}

const validate = formvalues => {
    const errors = {};
    if (!formvalues.todos_name) {
        errors.todos_name = 'Please Enter at least 1 characteBucket name can not be more that 20 character.';
    }

    return errors;
};

export default reduxForm({
    form: 'todoForm',
    touchOnBlur: false,
    enableReinitialize: true,
    noOverwrite: false,
    validate
})(TodoForm)