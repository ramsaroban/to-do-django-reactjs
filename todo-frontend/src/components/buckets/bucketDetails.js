import React from 'react';
import { connect } from 'react-redux'
import { getBucket } from '../../actions/buckets'


class BucketDetail extends React.Component {
    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">#Bucket List</div>
                </div>
                <div className="content">
                    {console.log('thus', this.props.children)}
                    {this.props.children}
                </div>
            </div>
        );
    }
}


const mapStatetoProps = (state, ownProps) => ({
    bucket: state.buckets,
});

export default connect(
    mapStatetoProps,
    { getBucket }
)(BucketDetail);