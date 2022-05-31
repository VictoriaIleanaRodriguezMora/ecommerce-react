import './App.css';
import Counter from './components/Counter/Counter';
import NavBar  from './components/NavBar/NavBar'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Counter numInicial={10}/>
    </div>
  );
}

export default App;
