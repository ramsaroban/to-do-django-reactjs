import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../../Modal'
import history from '../../history'

import { getTodo, deleteTodo } from '../../actions/todos'


class TodoDelete extends React.Component {

    componentDidMount() {
        this.props.getTodo(this.props.match.params.id);
        console.log(this.props.todo)
    }

    renderContent() {
        if (!this.props.todo) {
            return 'Are you sure, you want to delete this task?';
        }
        return `Are you sure you want to delete the #Task: ${this.props.todo.todos_name}`;
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <>
                <button
                    onClick={() => this.props.deleteTodo(id)}
                    className='ui negative button'
                >
                    Delete
                </button>
                <Link to='/' className='ui button'>
                    Cancel
                </Link>
            </>
        );
    }

    render() {
        return (
            <Modal
                title='Delet Todo'
                content={this.renderContent()}
                actions={this.renderActions()}
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
    { getTodo, deleteTodo }
)(TodoDelete);