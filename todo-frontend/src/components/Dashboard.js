
import React, { Component } from 'react';
import Counters from './Counter'
import BucketList from './buckets/BucketList'
import TodoList from './todos/TodoList'
// import BucketDetail from './buckets/bucketDetails'
import { selectedBucket } from '../actions/buckets'
import { connect } from 'react-redux'
// import PageContent from './PageContent'
// import TodoCreate from './todos/todoCreate'

class Dashboard extends Component {

    onSelectedBucket = bucket => {
        this.props.selectedBucket(bucket);
    }

    render() {
        return (
            <div className='container' style={{ marginLeft: '20px', marginTop: '100px', marginRight: '20px' }}>
                <Counters />
                <div className="ui grid" style={{ marginLeft: '100px' }}>
                    <div className="row">
                        <div className="four wide column">
                            <BucketList onSelectedBucket={this.onSelectedBucket} />
                        </div>
                        <div className="ten wide column" >
                            <TodoList />
                        </div>
                        {/* <div className="three wide column">
                            <BucketDetail>
                            </BucketDetail>
                        </div> */}
                    </div>
                </div >
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    selected_bucket: state.selected
});

export default connect(
    mapStatetoProps,
    { selectedBucket }
)(Dashboard);