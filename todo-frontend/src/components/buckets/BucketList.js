import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBuckets, deleteBucket } from '../../actions/buckets'

class BucketList extends React.Component {

    componentDidMount() {
        this.props.getBuckets();
    }

    dateConverter(date) {
        const mydata = new Date(date)
        return mydata.toDateString()
    };


    renderBucketList() {
        return this.props.buckets.map(bucket => {
            return (
                <div key={bucket.id} className="item">
                    <div className="right floated content" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                        <Link to={`bucket/edit/${bucket.id}`}  >
                            <i className="edit outline icon"></i>
                        </Link>
                        <Link to={`bucket/delete/${bucket.id}`} style={{ marginLeft: '5px' }} >
                            <i className="trash alternate icon"></i>
                        </Link>
                    </div>
                    <i className="large tasks middle aligned icon"></i>
                    <div className="content">
                        {/* <Link to={`todolist/${bucket.id}`} className="header"> */}
                        <div onClick={() => { this.props.onSelectedBucket(bucket) }} className='header'
                            style={{ textDecoration: `${bucket.is_completed === 'Yes' ? 'line-through black' : ''}` }}>
                            {bucket.bucket_name}
                        </div>

                        {/* </Link> */}
                        <div className="description" style={{ marginLeft: '20px', textJustify: 'center', textAlign: 'left' }}>
                            <small>Created at: {this.dateConverter(bucket.created_at)} </small>
                        </div>
                    </div>
                </div>
            );
        });
    }



    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">#Bucket List</div>
                </div>
                <div className="content">
                    <div className="ui relaxed divided list">
                        {this.renderBucketList()}
                    </div>
                </div>
                <div className="extra content">
                    <Link to='bucket/create' className='ui button'>
                        #Add Bucket
                    </Link>
                    {/* <button className="ui button">#Add Bucket</button> */}
                </div>
            </div>

        );
    }
}


const mapStatetoProps = state => ({
    buckets: Object.values(state.buckets)
});

export default connect(
    mapStatetoProps,
    { getBuckets, deleteBucket }
)(BucketList);
