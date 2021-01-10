import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTodos, deleteTodo, editTodo, addTodo } from '../../actions/todos'
import { getBucket } from '../../actions/buckets'
import TodoForm from './todoForms'
// import TodoDelete from './todoDelete'
import history from '../../history'

class TodoList extends React.Component {

    componentDidMount() {
        this.props.getTodos();
    }

    // componentDidUpdate() {
    //     console.log('component updated', this.props.selected_bucket)
    // }

    onSubmit = formvalues => {
        const selected = this.props.selected_bucket;
        if (!selected.length) {
            alert('Please select BUcket!');
            history.push('/');
            return ''
        }

        const bucket_id = selected[0].id;
        this.props.addTodo(bucket_id, formvalues);
    };

    dateConverter(date) {
        const mydata = new Date(date)
        return mydata.toDateString()
    };

    renderTaskList(bucket_id) {
        const todos = this.props.todos.filter(todo => todo.bucket === bucket_id)
        return todos.map(todo => {
            return (
                <div key={todo.id} className="item">
                    <div className="right floated content" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                        <Link to={`todolist/edit/${todo.id}`}  >
                            <i className="edit outline icon"></i>
                        </Link>
                        <Link to={`todolist/delete/${todo.id}`} style={{ marginLeft: '5px' }} >
                            <i className="trash alternate icon"></i>
                        </Link>
                    </div>
                    <i className="large calendar outline middle aligned icon"></i>
                    <div className="content">
                        <Link to={`todolist/edit/${todo.id}`} className="header" style={{ textDecoration: `${todo.is_completed === 'Yes' ? 'line-through black' : ''}` }}>
                            {todo.todos_name}

                        </Link>
                        <div className="description" style={{ marginLeft: '20px', textJustify: 'center', textAlign: 'left' }}>
                            <small>Created at: {this.dateConverter(todo.created_at)} </small>
                        </div>
                    </div>
                </div>
            );
        });
    }


    renderEmpty() {
        return (
            <h4>No BUcket Selected!!</h4>
        );
    }

    renderExtra(selected) {

        return (
            <div className='ui card'>
                <div className="content">
                    <div className="header">Add Todo to #Bucket:{selected[0].bucket_name}</div>
                </div>
                <div className="content">
                    <TodoForm title='#Create Todo' action='Create' destroyOnUnmount={false} onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }

    // renderTodoEdit(todo){
    //     return(
    //         <div className='ui card'>
    //             <div className="content">
    //                 <div className="header">Add Todo to #Bucket:{selected[0].bucket_name}</div>
    //             </div>
    //             <div className="content">
    //                 <TodoForm title='#Create Todo' action='Create' destroyOnUnmount={false} onSubmit={this.onSubmit} />
    //             </div>
    //         </div>
    //     );
    // }

    renderTodoHeader(selected) {
        return (
            <>
                <div className="header">Todo List of Bucket: #{selected[0].bucket_name}
                </div>
            </>
        )
    }

    render() {

        const selected = this.props.selected_bucket;

        return (
            <>
                <div className="ui grid" style={{ display: 'flex', paddingRight: '10px', width: '1200px' }}>
                    <div className="row">
                        <div className="eight wide column">
                            <div className="ui card" style={{ width: '10000px' }}>
                                <div className="content">
                                    <div className="header">
                                        {selected.length ? this.renderTodoHeader(selected) : '#Todo List'}
                                    </div>
                                </div>
                                <div className='content'>
                                    <div className="ui relaxed divided list">
                                        {selected.length ? this.renderTaskList(selected[0].id) : this.renderEmpty()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="five wide column">
                            <div className='content'>
                                {selected.length ? this.renderExtra(selected) : ''}
                            </div>
                        </div>
                    </div>
                </div >
            </>
        );
    }
}


const mapStatetoProps = (state, ownProps) => ({
    selected_bucket: Object.values(state.selected),
    todos: Object.values(state.todos)
});



export default connect(
    mapStatetoProps,
    { getBucket, getTodos, addTodo, deleteTodo, editTodo }
)(TodoList);