import './App.css';
import { useState, createContext } from 'react';
import NavBar from './components/NavBar/NavBar.js';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import InitialPage from './components/InitialPage/InitialPage';
import Contact from './components/Contact/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export const CartContext = createContext()

  function App() {
    const [cart, setCart] = useState([])
    console.log(cart)
  return (
<>
    <CartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <NavBar cart={cart}/>
          <Routes>
            <Route path='/' element={<InitialPage />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
      </BrowserRouter>
    </CartContext.Provider>
</>
);
}

export default App;
