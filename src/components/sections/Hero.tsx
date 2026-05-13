export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', background: '#FAF7F4', overflow: 'hidden', paddingTop: 72 }}>
      <div style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%', zIndex: 0 }}>
        <img src='https://storage.wisboo.com/academy_data/kyKo2ZoVAn/public/dE6As0tq-whatsapp-image-2024-04-21-at-15-50-54.jpeg' alt='Pasteleria y Ciencia' style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #FAF7F4 0%, transparent 18%), linear-gradient(to bottom, rgba(250,247,244,0.6) 0%, transparent 15%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, padding: '80px 80px 80px 80px' }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4846A', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 28, height: 2, background: '#C4846A', display: 'inline-block' }} />
          Formacion profesional
        </p>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(42px, 5vw, 74px)', fontWeight: 800, lineHeight: 1.0, color: '#2C1A0E', marginBottom: 22 }}>
          Menos prueba<br />
          y error. <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#C4846A' }}>Mas tecnica</em><br />
          y resultados.
        </h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(44,26,14,0.58)', lineHeight: 1.8, maxWidth: 400, marginBottom: 40 }}>
          Formacion en chocolateria y pasteleria basada en ciencia aplicada. No recetas. Comprension profunda y resultados reproducibles.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href='#cursos' style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FAF7F4', background: '#2C1A0E', padding: '15px 32px', borderRadius: 100, textDecoration: 'none' }}>Explorar cursos →</a>
          <a href='#asesoria' style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1A0E', border: '1.5px solid rgba(44,26,14,0.17)', padding: '15px 32px', borderRadius: 100, textDecoration: 'none' }}>Asesoria 1:1</a>
        </div>
        <div style={{ display: 'flex', gap: 36, marginTop: 52, paddingTop: 36, borderTop: '1px solid rgba(44,26,14,0.09)' }}>
          {[{n:'32k',l:'Alumnos formados'},{n:'12',l:'Cursos online'},{n:'98%',l:'Satisfaccion'}].map((s) => (
            <div key={s.l}>
              <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em', color: '#2C1A0E', lineHeight: 1, marginBottom: 4 }}>{s.n}</div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.35)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 1, height: '100vh' }} />
    </section>
  )
}