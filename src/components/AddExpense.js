import React, { useState } from 'react';

function AddExpense({ onAddExpense }) {
  const [expense, setExpense] = useState({
    amount: '',
    date: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(expense); // Pass the expense to the parent component
    setExpense({
      amount: '',
      date: '',
      category: '',
      description: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#333333', // Dark background
        color: '#ffffff', // Light text
        padding: '15px', // Reduced padding
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '90%', // Adjust width for responsiveness
        maxWidth: '400px', // Maximum width
        margin: '5px auto', // Reduced margin for better alignment
        border: '1px solid #444',
      }}
    >
      <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#ffffff' }}>Amount:</label>
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          required
          style={{
            width: '80%', // Decreased width
            padding: '8px', // Reduced padding
            borderRadius: '5px',
            border: '1px solid #555',
            backgroundColor: '#444444', // Dark input background
            color: '#ffffff', // Light text
          }}
        />
      </div>
      <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#ffffff' }}>Date:</label>
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          required
          style={{
            width: '80%', // Decreased width
            padding: '8px', // Reduced padding
            borderRadius: '5px',
            border: '1px solid #555',
            backgroundColor: '#444444', // Dark input background
            color: '#ffffff', // Light text
          }}
        />
      </div>
      <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#ffffff' }}>Category:</label>
        <input
          type="text"
          name="category"
          value={expense.category}
          onChange={handleChange}
          required
          style={{
            width: '80%', // Decreased width
            padding: '8px', // Reduced padding
            borderRadius: '5px',
            border: '1px solid #555',
            backgroundColor: '#444444', // Dark input background
            color: '#ffffff', // Light text
          }}
        />
      </div>
      <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#ffffff' }}>Description:</label>
        <textarea
          name="description"
          value={expense.description}
          onChange={handleChange}
          required
          style={{
            width: '80%', // Decreased width
            padding: '8px', // Reduced padding
            borderRadius: '5px',
            border: '1px solid #555',
            backgroundColor: '#444444', // Dark input background
            color: '#ffffff', // Light text
            resize: 'none',
            height: '70px', // Reduced height
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px', // Reduced padding
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#0056b3', // Blue button background
          color: '#ffffff', // White text
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '14px', // Reduced font size
        }}
      >
        Add Expense
      </button>
    </form>
  );
}

export default AddExpense;
