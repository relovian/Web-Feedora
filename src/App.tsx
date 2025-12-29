import { useState } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import './App.css'
import NotFound from './pages/NotFound'
import SideBar from './components/sideBar'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< HomePage />}></Route>
        <Route path="sideBar" element={<SideBar />}></Route>
        <Route path="*" element={< NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
