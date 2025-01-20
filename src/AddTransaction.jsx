
import React, { useState } from "react";

export default function AddTransaction({ onAddTransaction }) {
    const [formData, setFormData] = useState({
       id:"",
        date: "",
        description: "",
        category: "",
        amount: "",
    });

    // Update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the new transaction object
        const newTransaction = {
            id: Date.now(), // Unique ID for each transaction
            date: formData.date,
            description: formData.description,
            category: formData.category,
            amount: formData.amount,
        };

        // Call the parent handler to update the transactions state
        onAddTransaction(newTransaction);

        // Reset form fields
        setFormData({
            date: "",
            description: "",
            category: "",
            amount: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Date"
                required
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                required
            />
            <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
                required
            />
            <button type="submit">Add Transaction</button>
        </form>
    );
}
