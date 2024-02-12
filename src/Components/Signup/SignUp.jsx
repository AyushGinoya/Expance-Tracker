import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div align="center" className="Welcometext" style={{ fontSize: "24px" }}>
        Start saving smarter with Expense Tracker,{" "}
        <strong style={{ color: "blue" }}>{name}</strong> take control of your
        finances today!
      </div>

      <div className="form-container">
        <form action="">
          <table align="center">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="username" style={{ fontSize: "24px" }}>
                    Username
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="username"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email" style={{ fontSize: "24px" }}>
                    Email
                  </label>
                </td>
                <td>
                  <input type="email" id="email" name="email" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password" style={{ fontSize: "24px" }}>
                    Password
                  </label>
                </td>
                <td>
                  <input type="password" id="password" name="password" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="cpassword" style={{ fontSize: "24px" }}>
                    Password
                  </label>
                </td>
                <td>
                  <input type="password" id="cpassword" name="cpassword" />
                </td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{ textAlign: "center", fontSize: "24px" }}
                >
                  <input type="submit" value="Sign Up" className="signUpbutton" />
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
