import React from 'react'
import './app.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import About from './Components/About/About';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Main />
    <Footer />
    {/* <About/> */}
    </>
  )
}

export default App