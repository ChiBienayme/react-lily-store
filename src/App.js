import React from 'react';

// pages
import Body from './pages/Body';

// components
// import Header from './components/Header';
import Footer from './components/Footer';
import Header from './components/Header';



// CSS
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"


export default function App ()  {
  
    return (
      <> 
        <Header />
        <Body />
        <Footer />

      </>
    )
  
}
