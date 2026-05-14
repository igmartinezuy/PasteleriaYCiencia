import Dashboard from './Dashboard'
import './index.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import Stats from './components/sections/Stats'
import About from './components/sections/About'
import Metodo from './components/sections/Metodo'
import Cursos from './components/sections/Cursos'
import Testimonios from './components/sections/Testimonios'
import CTAContacto from './components/sections/CTAContacto'
import YouTube from './components/sections/YouTube'
import Newsletter from './components/sections/Newsletter'
import Asesoria from './components/sections/Asesoria'
import Sponsors from './components/sections/Sponsors'
import Footer from './components/layout/Footer'

function MainSite() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Metodo />
      <Cursos />
      <Testimonios />
      <CTAContacto />
      <YouTube />
      <Newsletter />
      <Asesoria />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default function App() {
  const isDashboard = window.location.pathname === '/admin';
  if (isDashboard) return <Dashboard />;
  return <MainSite />;
}