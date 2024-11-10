import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'

function App() {


  return (
    <CartProvider>
      <Header />
      <Outlet /> 
    </CartProvider>
  )
}

export default App
