import './App.css'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './sections/Header/Header';
import Landing from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup';
import Categories from './sections/Categories/Categories';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Landing />
              <Categories />
              <About/>
              <Contact/>
              <Footer/>
              </>

          } />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
