import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrease() {
        this.setState({
            count: this.state.count - 1
        })
    }
    increaseDouble() {
        this.setState({
            count: this.state.count + 2
        })
    }
    decreaseDouble() {
        this.setState({
            count: this.state.count - 2
        })
    }
    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <button onClick={()=> this.decreaseDouble()}> - 2 </button>
                <button onClick={() => this.increase()}>Artir</button>
                <button onClick={() => this.decrease()}>Azalt</button>
                <button onClick={()=> this.increaseDouble()}> + 2</button>
            </>
        );
    }
}

export default Counter;
