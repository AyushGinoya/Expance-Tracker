import React, { useState } from "react";
import "./LS.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace(/-/g, '');
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const saveData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/signup', formData);
      alert(response.data);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="login-page">
      <header className="header">
        <button className="btn">Login</button>
        <button className="btn">Signup</button>
      </header>
      <div className="form-container">
        <h2>SignUp</h2>
        <form onSubmit={saveData}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
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
