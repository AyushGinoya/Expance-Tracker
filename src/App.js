import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";
import WelcomePage from "./Pages/WelCome";
import HomePage from "./Pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
