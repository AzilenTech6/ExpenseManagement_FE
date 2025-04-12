import './App.css';
import ExpensesPage from './components/ExpensesPage';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <nav className="App-nav">
          <div className="App-profile">
            <img
              src="https://via.placeholder.com/60"
              alt="User Avatar"
              className="App-avatar"
            />
            <span>Janice Chandler</span>
          </div>
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#expenses" className="active">Expenses</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#budget">Budget</a></li>
            <li><a href="#income-sources">Income Sources</a></li>
          </ul>
        </nav>
        <main className="App-main">
          <header>
            <div className="App-header">Expense Manager</div>
          </header>
          <ExpensesPage />
          <footer>
            © 2023 Expense Manager. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
