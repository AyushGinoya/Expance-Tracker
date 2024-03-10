import React, {useEffect, useState} from "react";
import ExpenceService from "../Service/ExpenceService";

const ExpenseList = ({trigger}) => {
    // Correctly placed at the top level
    const [expenseList, setExpenseList] = useState([]);

    // Fetch the user ID from local storage
    const userId = localStorage.getItem('userId');

    // Correctly placed at the top level
    useEffect(() => {
        if (!userId) {
            alert("User ID not found. Please log in again.");
            // Return early if user ID is not found, but this is not a recommended practice
            // Instead, consider handling this case differently, such as redirecting the user or showing a message
            return;
        }

        const fetchExpenses = async () => {
            try {
                const response = await ExpenceService.getExpences(userId);
                setExpenseList(response.data);
            } catch (error) {
                console.error("Failed to fetch expenses:", error);
            }
        };

        fetchExpenses();
    }, [userId, trigger]); // Correctly placed at the top level

    // Return statement is here, after all hooks have been called
    if (!userId) {
        return null; // Return null to render nothing if user ID is not found
    }

    return (
        <div className="flex shadow border-b">
            <table className="w-full">
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
                {expenseList.map((item) => (
                    <tr key={item.id}>
                        <td>{item.date}</td>
                        <td>{item.type}</td>
                        <td>{item.category}</td>
                        <td>${item.amount}</td>
                        <td>
                            <button className="btn">Edit</button>
                            <button className="btn">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
