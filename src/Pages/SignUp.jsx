import React from "react";
import "./LS.css";

const SignUpPage = () => {
  return (
    <div className="login-page">
      <header className="header">
        <button className="btn">Login</button>
        <button className="btn">Signup</button>
      </header>
      <div className="form-container">
        <h2>SignUp</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="btn login-btn">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
