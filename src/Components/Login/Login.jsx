import React from "react";
import "./Login.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div>
          <h2 colSpan="2" style={{ fontSize: "26px" }}>
            Login to Track Your Expenses
          </h2>{" "}
        </div>
        <table align="center">
          <tbody>
            <tr>
              <td>
                <label htmlFor="lemail" style={{ fontSize: "24px" }}>
                  Email :
                </label>
              </td>
              <td>
                <input type="email" id="lemail" name="lemail"></input>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="lpassword" style={{ fontSize: "24px" }}>
                  Password :
                </label>{" "}
              </td>
              <td>
                <input type="password" id="lpassword" name="lpassword"></input>{" "}
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center", fontSize: "24px" }}>
                <input type="submit" value="Login" className="loginButton" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Login;
