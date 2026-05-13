export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#FAF7F4', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -80, top: '50%', transform: 'translateY(-50%)', width: 520, height: 520, borderRadius: '50%', background: '#F2E0D8', opacity: 0.6 }} />
      <div style={{ position: 'relative', zIndex: 1, padding: '0 80px', maxWidth: 860 }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4846A', marginBottom: 24 }}>
          Formacion profesional
        </p>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(42px, 5vw, 74px)', fontWeight: 700, lineHeight: 1.0, color: '#2C1A0E', marginBottom: 22 }}>
          Menos prueba y error.
        </h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(44,26,14,0.58)', lineHeight: 1.8, maxWidth: 400, marginBottom: 40 }}>
          Formacion en chocolateria y pasteleria basada en ciencia aplicada.
        </p>
        <div style={{ display: 'flex', gap: 14 }}>
          <a href='#cursos' style={{ fontSize: 12, fontWeight: 700, color: '#FAF7F4', background: '#2C1A0E', padding: '14px 30px', borderRadius: 100, textDecoration: 'none' }}>Explorar cursos</a>
          <a href='#asesoria' style={{ fontSize: 12, fontWeight: 600, color: '#2C1A0E', border: '1.5px solid rgba(44,26,14,0.17)', padding: '14px 30px', borderRadius: 100, textDecoration: 'none' }}>Asesoria 1 a 1</a>
        </div>
      </div>
    </section>
  )
}