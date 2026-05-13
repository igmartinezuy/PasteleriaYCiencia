import './index.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import Stats from './components/sections/Stats'
import About from './components/sections/About'
import Metodo from './components/sections/Metodo'
import Cursos from './components/sections/Cursos'
import Testimonios from './components/sections/Testimonios'
import Asesoria from './components/sections/Asesoria'
import Sponsors from './components/sections/Sponsors'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Metodo />
      <Cursos />
      <Testimonios />
      <Asesoria />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App