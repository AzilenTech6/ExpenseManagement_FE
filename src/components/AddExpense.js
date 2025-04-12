import React, { useState,useEffect } from 'react';

function AddExpense({ onAddExpense }) {
  const [expense, setExpense] = useState({
    amount: '',
    date: '',
    category: '',
    description: '',
  });

  const [categories, setCategories] = useState([]); // State to store categories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/categories`);        
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data); // Assuming the API returns an array of categories
      } catch (error) {
        console.error('Error fetching categories:', error);
        alert('Failed to load categories. Please try again.');
      }
    };

    fetchCategories();
  }, []);


  const [isSubmitting, setIsSubmitting] = useState(false); // To handle submission state


  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!expense.amount) {
      alert('Amount is required');
      return false;
    }
    if (!expense.date) {
      alert('Date is required');
      return false;
    }
    if (!expense.category) {
      alert('Category is required');
      return false;
    }
    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/expenses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expense),
      });

      if (!response.ok) {
        throw new Error('Failed to add expense');
      }

      const data = await response.json();
      onAddExpense(data); // Pass the response data to the parent component
      setExpense({
        amount: '',
        date: '',
        category: '',
        description: '',
      });
      alert('Expense added successfully!'); // Optional success message
    } catch (error) {
      console.error('Error adding expense:', error);
      alert('Failed to add expense. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        border: '1px solid #444',
        height: 'auto'
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
            width: '90%', // Decreased width
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
            width: '90%', // Decreased width
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
        <select
          name="category"
          value={expense.category}
          onChange={handleChange}
          required
          style={{
            width: '90%',
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #555',
            backgroundColor: '#444444',
            color: '#ffffff',
          }}
        >
          <option value="" disabled>Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#ffffff' }}>Description:</label>
        <textarea
          name="description"
          value={expense.description}
          onChange={handleChange}
          required
          style={{
            width: '90%', // Decreased width
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
        {isSubmitting ? 'Submitting...' : 'Add Expense'}
      </button>
    </form>
  );
}

export default AddExpense;
