import React, {useState} from "react";
import "./Home.css";
import ExpenseList from "../Helpers/ExpanceList";

const HomePage = () => {
    const [expenseData, setExpenseData] = useState({
        date: new Date().toLocaleDateString(),
        type: "Expense",
        category: "",
        amount: "",
    });

    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogout, setShowLogout] = useState(false);

    const userName = localStorage.getItem('userName');
    const emailId = localStorage.getItem('emailId');

    const handleExpenseChange = (e) => {
        const {id, value} = e.target;
        setExpenseData((prevExpenseData) => ({
            ...prevExpenseData,
            [id]: value,
        }));
    };

    const handleExpenseSubmit = (e) => {
        e.preventDefault();
        if (expenseData.type === "Expense") {
            setTotalExpense((prevTotal) => prevTotal + parseFloat(expenseData.amount));
        } else {
            setTotalIncome((prevTotal) => prevTotal + parseFloat(expenseData.amount));
        }
        console.log(expenseData);
        setExpenseData({
            type: "Expense",
            date: new Date().toLocaleDateString(),
            category: "",
            amount: "",
        });
    };

    const handleAvatarClick = () => {
        setShowLogout(!showLogout);
    };

    return (
        <div className="home-page">
            <header className="header">
                <h1>Home</h1>
                <img
                    src="https://www.w3schools.com/images/lamp.jpg"
                    alt="Profile"
                    className="profile-logo"
                    onClick={handleAvatarClick}
                />
                {showLogout && (
                    <div className="logout-option">
                        <button onClick={() => console.log("Logout clicked")}>
                            Logout
                        </button>
                    </div>
                )}
            </header>

            <div className="content">
                <div className="balance-income-expense-container">
                    <div className="balance-container">
                        <h2>Current Balance</h2>
                        <p>${totalIncome - totalExpense}</p>
                    </div>
                    <div className="income-container">
                        <h2>Total Income</h2>
                        <p className="income-value">${totalIncome}</p>
                    </div>
                    <div className="expense-container">
                        <h2>Total Expense</h2>
                        <p className="expense-value">${totalExpense}</p>
                    </div>
                </div>
                <div className="expense-form-container">
                    <h2>Add {expenseData.type}</h2>
                    <form onSubmit={handleExpenseSubmit}>
                        <div className="input-group">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" value={expenseData.date} onChange={handleExpenseChange}/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="type">Type</label>
                            <select id="type" value={expenseData.type} onChange={handleExpenseChange}
                                    className="input-group">
                                <option value="Expense">Expense</option>
                                <option value="Income">Income</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="category">Category</label>
                            <input
                                type="text"
                                id="category"
                                required
                                value={expenseData.category}
                                onChange={handleExpenseChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                id="amount"
                                required
                                value={expenseData.amount}
                                onChange={handleExpenseChange}
                            />
                        </div>
                        <button type="submit" className="btn expense-btn">
                            Add {expenseData.type}
                        </button>
                    </form>
                </div>
            </div>
            <ExpenseList/>
        </div>
    );
};
export default HomePage;
