import './index.css'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: '#F4EDE4', fontFamily: 'serif', fontSize: 48 }}>
          Pasteleria & Ciencia
        </h1>
      </main>
    </div>
  )
}

export default App