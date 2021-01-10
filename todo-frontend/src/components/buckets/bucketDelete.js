import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../../Modal'
import history from '../../history'

import { getBucket, deleteBucket } from '../../actions/buckets'


class BucketDelete extends React.Component {

    componentDidMount() {
        this.props.getBucket(this.props.match.params.id);
    }

    renderContent() {
        if (!this.props.bucket) {
            return 'Are you sure, you want to delete this task?';
        }
        return `Are you sure you want to delete the #Bucket: ${this.props.bucket.bucket_name}`;
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <>
                <button
                    onClick={() => this.props.deleteBucket(id)}
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
                title='Delet Bucket'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}
const mapStatetoProps = (state, ownProps) => ({
    bucket: state.buckets[ownProps.match.params.id]
});

export default connect(
    mapStatetoProps,
    { getBucket, deleteBucket }
)(BucketDelete);