import React from "react";

const ExpenseList = () => {
    // Example data
    const expenseList = [
        {id: 1, date: '2023-04-01', type: 'Expense', category: 'Food', amount: 50},
        {id: 2, date: '2023-04-02', type: 'Income', category: 'Salary', amount: 2000},
        // Add more entries as needed
    ];

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