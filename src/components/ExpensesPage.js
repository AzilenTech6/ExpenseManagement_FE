import React, { useState } from 'react';
import AddExpense from './AddExpense';

function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...expense, id: Date.now() }]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const handleUpdateExpense = (id, updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => (expense.id === id ? { ...expense, ...updatedExpense } : expense))
    );
  };

  return (
    <div style={{ display: 'flex', gap: '20px'}}>
      <div style={{ flex: 1 }}>
        <AddExpense onAddExpense={handleAddExpense} />
      </div>
      <div style={{ flex: 2, backgroundColor: '#444', padding: '20px', borderRadius: '5px', color: '#fff' }}>
        <h2>Expenses</h2>
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {expenses.map((expense) => (
              <li key={expense.id} style={{ marginBottom: '10px', borderBottom: '1px solid #555', paddingBottom: '10px' }}>
                <div>
                  <strong>Amount:</strong> {expense.amount}
                </div>
                <div>
                  <strong>Date:</strong> {expense.date}
                </div>
                <div>
                  <strong>Category:</strong> {expense.category}
                </div>
                <div>
                  <strong>Description:</strong> {expense.description}
                </div>
                <div style={{ marginTop: '10px' }}>
                  <button
                    onClick={() => handleDeleteExpense(expense.id)}
                    style={{ marginRight: '10px', padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: '#d9534f', color: '#fff', cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdateExpense(expense.id, { ...expense, description: 'Updated Description' })}
                    style={{ padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: '#5bc0de', color: '#fff', cursor: 'pointer' }}
                  >
                    Update
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ExpensesPage;
