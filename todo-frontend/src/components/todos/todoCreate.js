import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';
import TodoForm from './todoForms';

class TodoCreate extends React.Component {


    onSubmit = formvalues => {
        if (this.props.bucket === 'undefined') {
            alert('Please select any bucket!')
        }
        this.props.addTodo(formvalues);
    };


    renderContent() {
        <div style={{ marginTop: '2rem' }}>
            <TodoForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
        </div>
    }

    render() {
        const { bucket } = this.props;
        if (bucket)
            console.log('ramm', bucket[0])
        return (
            <TodoForm title='#Create Todo' action='Create' destroyOnUnmount={false} onSubmit={this.onSubmit} />
        );
    }
}


const mapStatetoProps = state => ({
    bucket: Object.values(state.selected)
});

export default connect(
    mapStatetoProps,
    { addTodo }
)(TodoCreate);