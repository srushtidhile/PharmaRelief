import React, { useState } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

import "bootstrap/dist/css/bootstrap.min.css"

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


  <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
    
  return(
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
      <h3 className="Auth-form-title">Sign In</h3>

      <div className="form-group mt-3">
            <label>Email address</label>
            <input type="text" className="form-control mt-1" onChange={e => setUserName(e.target.value)}/>
          </div>
          
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" className="form-control mt-1" onChange={e => setPassword(e.target.value)}/>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}