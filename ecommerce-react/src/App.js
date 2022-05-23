import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador </h1>
      <Counter numInicial={8} /> 
      </header>
    </div>
  );
}

export default App;
