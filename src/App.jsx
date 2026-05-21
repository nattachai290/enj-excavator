import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ENJPage from './pages/ENJPage.jsx'
import P5XPage from './pages/P5XPage.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enj" element={<ENJPage />} />
        <Route path="/p5x" element={<P5XPage />} />
      </Routes>
    </>
  )
}
