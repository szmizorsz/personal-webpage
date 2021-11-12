import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Posts from './components/Posts'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div class="bg-gray-700 text-white font-serif">
      <Header />
      <About />
      <div class="grid grid-cols-6">
        <div class="col-span-1"></div>
        <div class="col-span-4">
          <Projects />
          <Posts />
          <Contact />
          <Footer />
        </div>
        <div class="col-span-1"></div>
      </div>
    </div>
  )
}

export default App
