import React from 'react'

class ClassComponentDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    componentDidMount() {
        console.log("Component mounted!")
    }

    componentDidUpdate() {
        console.log("Component updated!");
    }

    componentWillUnmount() {
        console.log("Component will unmount.");
    }
    render() {
        return (
            <div>
                <h2>Class Component: State & Lifecycle</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div >
        )
    }
}

export default ClassComponentDemo;