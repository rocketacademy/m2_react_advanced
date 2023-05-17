import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      clicked: 0,
    };
  }

  incrementCount = () => {
    let newCount = this.state.count + 1;
    let newClicked = this.state.count + 1;
    this.setState({ count: newCount, clicked: newClicked });
  };

  decrementCount = () => {
    let newCount = this.state.count - 1;
    let newClicked = this.state.count + 1;
    this.setState({ count: newCount, clicked: newClicked });
  };

  render() {
    return (
      <div>
        <h1>{this.props.name ? this.props.name : "Stranger"}'s Counter</h1>
        <h2>Current Count: {this.state.count}</h2>
        <h3>Current Clicked: {this.state.clicked}</h3>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}
