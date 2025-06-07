import logo from './logo.svg';
import './App.css';
import Counter from './Counter'; // Add this line

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'red' }}>Hello, Sharon!</h1>
      <p>My first React app is up and running.</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         {/*  Your new component */}
      <Counter />
    </div>
  );
}

export default App;
