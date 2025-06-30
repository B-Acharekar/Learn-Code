import React from 'react';

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
    console.log('Component mounted!');
  }

  componentDidUpdate() {
    console.log('Component updated!');
  }

  componentWillUnmount() {
    console.log('Component will unmount.');
  }

  render() {
    return (
      <div className="p-6 max-w-md mx-auto rounded-xl bg-white dark:bg-zinc-800 shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Class Component: State & Lifecycle
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-200">
          Count: {this.state.count}
        </p>
        <button
          onClick={this.increment}
          className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default ClassComponentDemo;
