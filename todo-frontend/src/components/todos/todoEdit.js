import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { editTodo, getTodo } from '../../actions/todos';
import TodoForm from './todoForms'
import Modal from '../../Modal'
import history from '../../history'

class TodoEdit extends React.Component {

    componentDidMount() {
        this.props.getTodo(this.props.match.params.id);
    }

    onSubmit = (formvalues, is_marked) => {
        this.props.editTodo(this.props.match.params.id, formvalues, is_marked);
    };
    renderActions() {

        return (
            <TodoForm
                title='#Edit Todo'
                action='Edit'
                initialValues={_.pick(this.props.todo, 'todos_name', 'is_completed')}
                enableReinitialize
                onSubmit={this.onSubmit} />
        );
    }
    render() {
        return (
            <Modal
                title='Update Task'
                content={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStatetoProps = (state, ownProps) => ({
    todo: state.todos[ownProps.match.params.id]
});

export default connect(
    mapStatetoProps,
    { editTodo, getTodo }
)(TodoEdit)