import React from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import Projects from './components/Projects'
import Posts from './components/Posts'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div class="bg-gray-700 text-white font-serif">
      <Header />
      <Summary />
      <div class="md:grid md:grid-cols-6">
        <div class="col-span-1"></div>
        <div class="col-span-4">
          <Projects />
          <Posts />
          <About />
          <Contact />
        </div>
        <div class="col-span-1"></div>
      </div>
      <Footer />
    </div>
  )
}

export default App
