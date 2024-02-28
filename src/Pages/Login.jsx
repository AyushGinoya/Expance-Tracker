// src/LoginPage.js
import React from 'react';
import './LS.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <header className="header">
        <button className="btn">Login</button>
        <button className="btn">Signup</button>
      </header>
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="btn login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
