import React from 'react';
import { connect } from 'react-redux'


class Counters extends React.Component {

    // componentDidMount() {
    //     console.log('Counter', this.props.buckets)
    // }

    // componentDidUpdate() {

    //     console.log('Counter updated', this.props.buckets)
    // }


    renderPlaceholder() {
        return (
            <>
                <div className="column">
                    <div className="ui raised segment">
                        <div className="ui placeholder">
                            <div className="header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                            <div className="paragraph">
                                <div className="medium line"></div>
                                <div className="short line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment">
                        <div className="ui placeholder">
                            <div className="header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                            <div className="paragraph">
                                <div className="medium line"></div>
                                <div className="short line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment">
                        <div className="ui placeholder">
                            <div className="header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                            <div className="paragraph">
                                <div className="medium line"></div>
                                <div className="short line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui raised segment">
                        <div className="ui placeholder">
                            <div className="header">
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                            <div className="paragraph">
                                <div className="medium line"></div>
                                <div className="short line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    renderCountCardItem(title, Count, color = '#FFFFF') {
        return (
            <div className="column">
                <div className="ui card" style={{ width: '500px' }} >
                    <div className="content" style={{ backgroundColor: '#0000A0', textAlign: 'center' }}>
                        <div className="header" style={{ color: '#FFFFFF' }}>{title}</div>
                    </div>
                    <div className="content" style={{ backgroundColor: `${color}`, textAlign: 'center' }}>
                        <h2>{Count}</h2>
                    </div>
                </div>
            </div>
        );
    }

    renderComponent(buckets, todos) {
        const completed_todo = todos.filter(todo => todo.is_completed === 'Yes');
        return (
            <>
                {this.renderCountCardItem("Total Bucket", buckets.length, '#ADD8E6')}
                {this.renderCountCardItem("Total Todos", todos.length, '#ADD8E6')}
                {this.renderCountCardItem('Completed Todos', completed_todo.length, '#00AF00')}
                {this.renderCountCardItem('Remaining Todos', todos.length - completed_todo.length, '#AF0000')}
            </>
        );
    }
    render() {
        const { buckets } = this.props;
        const { todos } = this.props;

        return (
            <div className="ui four column stackable grid">
                {!buckets.length ? this.renderPlaceholder() : this.renderComponent(buckets, todos)}
            </div>

        );
    }
}

const mapStatetoProps = state => ({
    buckets: Object.values(state.buckets),
    todos: Object.values(state.todos)
});

export default connect(
    mapStatetoProps,
    {}
)(Counters);
