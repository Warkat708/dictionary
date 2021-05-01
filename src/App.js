import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className = "container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
      <Dictionary />
      </main>
      <footer>
        Coded by Katherine. Stored on Github and hosted on Netlify. 
      </footer>
    </div>
    </div>
  );
}

export default App;
