import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StoreFront from './components/Store-Front/StoreFront';


function App() {
  return (
    <>
      <Header className = 'navbar'/>
      <StoreFront/>
      <Footer/>
    </>
  );
}

export default App;
