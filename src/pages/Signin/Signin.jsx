import React, { Component } from 'react';
import Login from './components/Login';

export default class Signin extends Component {
  static displayName = 'Signin';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="signin-page">
        <Login />
      </div>
    );
  }
}
