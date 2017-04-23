// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.global.css';

export default class Home extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="page-login-main animation-slide-right animation-duration-1">
          <div className="app-info">
            <div className="font-size-24">SHOKO DESKTOP</div>
            Version 4.0.0.1
          </div>
          <h3 className="font-size-24">Welcome back</h3>
          <p>Please enter your login details below.</p>
          <form method="post" action="">
            <div className="form-group">
              <label className="sr-only" htmlFor="inputEmail">Username</label>
              <input type="email" className="form-control" id="inputEmail" name="email" placeholder="Username" />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="inputPassword">Password</label>
              <input
                type="password" className="form-control" id="inputPassword" name="password"
                placeholder="Password"
              />
            </div>
            <Link to="/home"><button className="btn btn-primary btn-block">Sign in</button></Link>
          </form>
          <footer className="page-copyright">
            <div className="panel panel-bordered panel-dark">
              <div className="panel-heading">
                <h3 className="panel-title">AUTO-LOGIN</h3>
              </div>
              <div className="panel-body">You can change the default login behavior by navigating to Settings &gt; User.</div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
