import React, { PureComponent } from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-div">
      <div>
        <h2>Current Balance</h2>
        <h3 className="currentBalance">$00.00</h3>
        <br />
      </div>

      <div>
        <h2>Expanse</h2>
        <h3 className="expanse" style={{ color: "red" }}>
          $00.00
        </h3>
        <br />
      </div>

      <div>
        <h2>Income</h2>
        <h3 className="income" style={{ color: "green" }}>
          $00.00
        </h3>
        <br />
      </div>

      <div>
        <h2 style={{ color: "blue" }}>Add new transition</h2>
        <br />
      </div>
      <div className="newTrax">
        <div>
          <h2>
            Expanse Name <span style={{ color: "red" }}>*</span>
          </h2>
          <input type="text" name="exName" />
          <br />
        </div>
        <div>
          <h2>
            Select Amount type<span style={{ color: "red" }}>*</span>
          </h2>
          <select
            name="amountType"
            className="amountType"
            style={{ fontSize: "24px", marginTop: "20px" }}
          >
            <option value="creditAmount">Credit Amount</option>
            <option value="debitAmount">Debit Amount</option>
          </select>

          <br />
        </div>
        <div>
          <input type="number" name="exName" />
          <br />
        </div>
        <div>
          <input
            type="submit"
            value="Add Expanse"
            className="addExpanse"
            style={{ fontSize: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
