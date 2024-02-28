import React from 'react';
import { Link } from 'react-router-dom';
import './WelCome.css';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Simplify finances: track, budget, save. Start your journey to freedom.</h1>
      <div className="navigation-buttons">
        <Link to="/login"><button className="btn">Login</button></Link>
        <Link to="/signup"><button className="btn">Signup</button></Link>
      </div>
    </div>
  );
};

export default WelcomePage;
