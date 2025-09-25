import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'

function App() {

  return (
   <>
   <Navbar />

<Routes>
  <Route path='/' element={<h1>Welcome th the jwt page</h1>} />
  <Route path='/register' element={<Register />} />
  <Route path='/login' element={<Login />} />
  <Route path='/profile' element={<Profile />} />
</Routes>
   </>
  )
}

export default App
