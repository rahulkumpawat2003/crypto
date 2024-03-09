import React from 'react';
import {Routes,Route} from "react-router-dom";
import Exchanges from './components/Exchanges.jsx';
import Coins from './components/Coins.jsx';
import CoinDetails from './components/CoinDetails.jsx';

function App() {
  return (
    <Routes>
      
      <Route path='/' element ={<Exchanges/>} />
      <Route path='/coins' element ={<Coins/>} />
      <Route path='/coins/:id' element ={<CoinDetails/>} />
    </Routes>
    
  );
}

export default App
