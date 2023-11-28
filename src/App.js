import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MarketSnapshot from './components/MarketSnapshot/MarketSnapshot';
import Table from './Table/Table';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
     <MarketSnapshot/>
     <Table/>
     <Footer/>
    </div>
  );
}

export default App;
