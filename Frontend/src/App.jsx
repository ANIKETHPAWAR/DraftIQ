import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Features from './pages/Features'
import Hiw from './pages/Hiw'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/how-it-works" element={<Hiw />} />
    </Routes>
  )
}

export default App
