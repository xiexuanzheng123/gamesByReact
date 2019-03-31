import React from 'react';

const styles = {
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        dispaly: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 1}
    }
    render() {
        return (
            <div style={styles.modal}>
                {this.props.children}
            </div>
        )
    }
}
class MyTestableClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sprop: ''}
    }
    componentDidMount() {
        var left = this.left;
        var state = this.state;
        this.setState({sprop: left})
    }
    render() {
        return(
            <div>
                <div ref={input => {this.left = input}}>我是左边</div>
                <div sprop={this.state.sprop}>我是you边</div>
            </div>
        )
    }
}
export default MyTestableClass;