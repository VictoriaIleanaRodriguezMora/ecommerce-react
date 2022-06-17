import './App.css';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';
import { useState, createContext } from "react"

export const MiContext = createContext()

function App() {

  const [cart, setCart] = useState([])
  console.log(cart);

  return (
    <div className="App">
      <MiContext.Provider value={"hola"}> 
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer cart={cart} setCart={setCart} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
      </MiContext.Provider>
    </div>
  );
}

export default App;
