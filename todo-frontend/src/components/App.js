import React from 'react';
import { Router, Route } from 'react-router-dom'

import Header from './header/Header'
import Dashboard from './Dashboard';
import history from '../history'
import BucketCreate from './buckets/bucketCreate'
import BucketDelete from './buckets/bucketDelete'
import BucketEdit from './buckets/bucketEdit'
import BucketDetail from './buckets/bucketDetails'
import TodoList from './todos/TodoList'
import TodoCreate from './todos/todoCreate'
import TodoDelete from './todos/todoDelete'
import TodoEdit from './todos/todoEdit'
class App extends React.Component {
    state = {}
    render() {
        return (
            <div className="container">
                <Router history={history}>
                    <Header />
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/bucket/create" exact component={BucketCreate} />
                    <Route path="/bucket/edit/:id" exact component={BucketEdit} />
                    <Route path="/bucket/details/:id" exact component={BucketDetail} />
                    <Route path="/bucket/delete/:id" exact component={BucketDelete} />
                    <Route path="/todolist/:bucket_id" exact component={TodoList} />
                    <Route path="/todolist/create" exact component={TodoCreate} />
                    <Route path="/todolist/delete/:id" exact component={TodoDelete} />
                    <Route path="/todolist/edit/:id" exact component={TodoEdit} />
                </Router>
            </div>
        );
    }
}

export default App;