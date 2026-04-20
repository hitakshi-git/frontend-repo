import './App.css';

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <header className="navbar">
        <h1>My Web App</h1>
      </header>

      {/* Main Content */}
      <main className="container">
        <div className="card">
          <h2>Welcome 👋</h2>
          <p>Your React app is successfully deployed on Azure.</p>

          <button onClick={() => alert("App is working!")}>
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        © 2026 My Web App
      </footer>

    </div>
  );
}

export default App;
