import React, {useState} from "react";
import "./LS.css";
import {useNavigate} from "react-router-dom";
import UserService from "../Service/UserService";

const SignUpPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: "",
        emailId: "",
        password: "",
        confPass: "",
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const saveData = async (e) => {
        e.preventDefault();

        try {
            if (formData.password !== formData.confPass) {
                alert("Passwords do not match");
                return;
            }
            const response = await UserService.saveUser(formData);
            console.log("Response data:", response.data);
            const userId = response.data;
            console.log("User ID:", userId);

            localStorage.setItem('userId', userId);
            navigate('/home');
        } catch (error) {
            console.log("Error occurred:", error.toJSON());
            if (error.response) {
                console.error("Data:", error.response.data);
                console.error("Status:", error.response.status);
                console.error("Headers:", error.response.headers);
                alert("Error: " + (error.response.data.message || "Something went wrong"));
            } else if (error.request) {
                console.error("Request:", error.request);
            } else {
                console.error("Error Message:", error.message);
            }
            console.error("Config:", error.config);
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
                            id="userName"
                            placeholder="Username"
                            required
                            value={formData.userName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="emailId"
                            placeholder="Email"
                            required
                            value={formData.emailId}
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
                            id="confPass"
                            placeholder="Confirm Password"
                            required
                            value={formData.confPass}
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
