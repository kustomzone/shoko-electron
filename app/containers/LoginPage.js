// @flow
import React, { Component } from 'react';
import Login from '../components/Login';

export default class LoginPage extends Component {
  componentDidMount() {
    document.body.className = 'page-login-v2 layout-full page-dark';
  }

  render() {
    return (
      <Login />
    );
  }
}
