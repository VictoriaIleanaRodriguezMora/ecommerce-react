import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola mundo</h1>
        <p>Instalacion de React</p>

      </header>
      <Counter text={"contador"} /> 
    </div>
  );
}

export default App;
