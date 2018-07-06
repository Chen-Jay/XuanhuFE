import React, { Component } from 'react';
import Register from './components/Register';

export default class Reg extends Component {
  static displayName = 'Reg';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="reg-page">
        <Register />
      </div>
    );
  }
}
