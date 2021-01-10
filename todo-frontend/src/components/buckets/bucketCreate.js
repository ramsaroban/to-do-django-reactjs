import React from 'react';
import { connect } from 'react-redux';
import { addBucket } from '../../actions/buckets';
import BucketForm from './bucketForm';


class BucketCreate extends React.Component {
    onSubmit = formvalues => {
        this.props.addBucket(formvalues);
    };


    renderContent() {
        <div style={{ marginTop: '2rem' }}>
            <BucketForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
        </div>
    }

    render() {
        return (
            <BucketForm bucket_list={this.props.bucket_list} title='#Create Bucket' action='Create' destroyOnUnmount={false} onSubmit={this.onSubmit} />
        );
    }
}


const mapStatetoProps = state => ({
    bucket_list: Object.values(state.buckets)
});

export default connect(
    mapStatetoProps,
    { addBucket }
)(BucketCreate);