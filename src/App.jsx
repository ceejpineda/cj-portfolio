import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import About from './About'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-w-full">
      <Navbar />
      <Hero />
      <div className='min-h-screen flex flex-col p-5'>
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default App