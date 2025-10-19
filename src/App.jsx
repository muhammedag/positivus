import { useState } from 'react'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/NavbarComponent';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
