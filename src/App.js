import React from 'react';
import './App.css';
import HeaderPromo from './HeaderPromo/HeaderPromo';
import Header from './Header/Header';
import MarketSnapshot from './MarketSnapshot/MarketSnapshot';
import Table from './Table/Table';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
     <HeaderPromo/>
     <Header/>
     <MarketSnapshot/>
     <Table/>
     <Footer/>
    </div>
  );
}

export default App;
