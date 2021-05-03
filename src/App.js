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
      <Dictionary defaultKeyword = "wine" />
      </main>
      <footer>
        Coded by Katherine. Stored on <a href = "https://github.com/Warkat708/dictionary"> Github</a> and hosted on <a href = "https://reverent-bhabha-580400.netlify.app/">Netlify</a>. 
      </footer>
    </div>
    </div>
  );
}

export default App;
