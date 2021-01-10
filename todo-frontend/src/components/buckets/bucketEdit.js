import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getBucket, editBucket } from '../../actions/buckets';
import BucketForm from './bucketForm';


class BucketEdit extends React.Component {

    componentDidMount() {
        this.props.getBucket(this.props.match.params.id);
    }

    onSubmit = (formvalues, is_marked) => {
        this.props.editBucket(this.props.match.params.id, formvalues, is_marked);
    };

    render() {
        return (
            <BucketForm
                title='#Edit Bucket'
                action='Edit'
                initialValues={_.pick(this.props.bucket, 'bucket_name', 'description', 'is_completed')}
                enableReinitialize={true}
                onSubmit={this.onSubmit} />
        );
    }
}

const mapStatetoProps = (state, ownProps) => ({
    bucket: state.buckets[ownProps.match.params.id]
});

export default connect(
    mapStatetoProps,
    { getBucket, editBucket }
)(BucketEdit);