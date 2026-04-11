import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import FitnessTips from './pages/FitnessTips'
import DietNutrition from './pages/DietNutrition'
import BMICalculator from './pages/BMICalculator'
import CalorieCalculator from './pages/CalorieCalculator'
import HealthTest from './pages/HealthTest'
import Equipment from './pages/Equipment'
import Trainers from './pages/Trainers'
import Membership from './pages/Membership'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/fitness-tips" element={<FitnessTips />} />
          <Route path="/diet-nutrition" element={<DietNutrition />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/calorie-calculator" element={<CalorieCalculator />} />
          <Route path="/health-test" element={<HealthTest />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
