import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>
        <Search />
      </header>
      <footer>
        This project was coded by {""}
        <a
          href="https://www.linkedin.com/in/dilarainal/"
          target="_blank"
          rel="noreferrer"
        >
          Dilara Inal
        </a>
        {""} and is open-sourced on {""}
        <a
          href="https://github.com/dilarainal/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
