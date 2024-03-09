import Header from './Common/Header'
import Home from './HomePage/Home'
import './App.css'
import { useState,useEffect } from 'react';
function App() {

  const [showCart, setShowCart] = useState(false);

  return (
    <div className="App">
      <Header id ='header'showCart={showCart} setShowCart={setShowCart}/>
      <Home  showCart={showCart} setShowCart={setShowCart}/>
    </div>
  );
}

export default App;
