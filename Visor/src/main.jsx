import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/layouts/NavBar.jsx'
import App from './App.jsx'
import Footer from './components/layouts/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar/>
    <App />
    <Footer/>
  </BrowserRouter>
)