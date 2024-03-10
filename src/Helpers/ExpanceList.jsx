import React, {useEffect, useState} from 'react';
import ExpenceServices from '../Service/ExpenceService';
import "../Pages/Home.css";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const [editingExpense, setEditingExpense] = useState(null);
    const [editedExpenseDetails, setEditedExpenseDetails] = useState({});

    useEffect(() => {
        const fetchExpenses = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error("User ID not found in localStorage.");
                return;
            }

            try {
                const response = await ExpenceServices.getExpences(userId);
                setExpenses(response.data);
            } catch (error) {
                console.error("Failed to fetch expenses:", error);
            }
        };

        fetchExpenses();
    }, []);

    const handleEditClick = (expense) => {
        setEditingExpense(expense);
        setEditedExpenseDetails({...expense});
    };

    const handleEditChange = (event) => {
        const {name, value} = event.target;
        setEditedExpenseDetails(prev => ({...prev, [name]: value}));
    };

    const handleEditSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await ExpenceServices.editExpense(editingExpense.id, editedExpenseDetails);
            const updatedExpenses = expenses.map(expense => expense.id === editingExpense.id ? response.data : expense);
            setExpenses(updatedExpenses);
            setEditingExpense(null);
            setEditedExpenseDetails({});
        } catch (error) {
            console.error("Failed to update expense:", error);
        }
    };

    const editFieldStyle = {
        width: "100%",
        padding: "8px",
        margin: "4px 0",
    };

    return (
        <div>
            <h2>Expenses</h2>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        {editingExpense && editingExpense.id === expense.id ? (
                            <td colSpan="5">
                                <form onSubmit={handleEditSubmit}>
                                    <input type="date" name="date" value={editedExpenseDetails.date}
                                           onChange={handleEditChange} style={editFieldStyle}/>
                                    <select name="type" value={editedExpenseDetails.type} onChange={handleEditChange}
                                            style={editFieldStyle}>
                                        <option value="Expense">Expense</option>
                                        <option value="Income">Income</option>
                                    </select>
                                    <input type="text" name="category" value={editedExpenseDetails.category}
                                           onChange={handleEditChange} style={editFieldStyle}/>
                                    <input type="number" name="amount" value={editedExpenseDetails.amount}
                                           onChange={handleEditChange} style={editFieldStyle}/>
                                    <button type="submit" className="btn">Save</button>
                                    <button className="btn" onClick={() => setEditingExpense(null)}>Cancel</button>
                                </form>
                            </td>
                        ) : (
                            <>
                                <td>{expense.date}</td>
                                <td>{expense.type}</td>
                                <td>{expense.category}</td>
                                <td>${expense.amount}</td>
                                <td>
                                    <button className="btn" onClick={() => handleEditClick(expense)}>Edit</button>
                                    <button className="btn">Delete</button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
