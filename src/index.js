import React, { Component } from "react";
import ReactDOM from "react-dom";
import CounterStore from "./store";
import { observer } from 'mobx-react';

@observer class App extends Component {
  render() {
    return (
      <div>
        <div>Count:{this.props.store.counter}</div>
        <div>
          <button onClick={this.props.store.incCount}> Count +</button>
          <button onClick={this.props.store.decCount}> Count -</button>
          <button onClick={this.props.store.resetCount}> Reset</button>
          </div>
      </div>
    );
  }
};

const store = new CounterStore();
ReactDOM.render(<App store={store} />, document.querySelector("#root"));