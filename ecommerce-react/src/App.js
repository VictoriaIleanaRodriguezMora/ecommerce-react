import './App.css';
import { useState, useEffect } from 'react'

// import Counter from './components/Counter/Counter';
// import NavBar from './components/NavBar/NavBar';
// import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  // const [show, setShow] = useState(true)
  return (
    <div className="App">
      {/* <header className="App-header">
      <NavBar />
      </header>
      <Button accion={() => setShow(!show)} btnClass="btn" label="-">show/hide</Button>
      {show && <Counter numInicial={10} />}     */}
      <ItemListContainer />
    </div>
  );
}

export default App;
