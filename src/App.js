import ada from './ada-logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ada} className="App-logo" alt="logo" />
        <p>
          <code>y a ti</code> te gusta programar?.
        </p>
        <a
          className="App-link"
          href="https://ada-school.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          clickea aquí
        </a>
      </header>
    </div>
  );
}

export default App;
