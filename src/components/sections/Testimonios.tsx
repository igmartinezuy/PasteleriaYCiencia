export default function Testimonios() {
  const testimonios = [
    { q: 'El curso de chocolateria cambio completamente mi perspectiva. Por primera vez entendi que pasa en el temperado a nivel molecular. Resultados reproducibles desde el primer dia.', name: 'Maria Gonzalez', rol: 'Pastelera · Buenos Aires', stars: 5 },
    { q: 'Despues del curso de macarons, mis resultados son 100% reproducibles. El abordaje cientifico hace toda la diferencia.', name: 'Lucia Ramos', rol: 'Emprendedora · Rosario', stars: 5 },
    { q: 'La calidad supera cualquier curso presencial que tome. Relacion precio-valor incomparable.', name: 'Fernanda Torres', rol: 'Chef · Montevideo', stars: 5 },
    { q: 'Formacion real para profesionales que quieren resultados concretos. Cada curso supero mis expectativas.', name: 'Carolina Gomez', rol: 'Chocolatera · Cordoba', stars: 5 },
  ];
  return (
    <section style={{ background: '#F7F6F4', padding: '120px 80px' }}>
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1B7BA0', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 28, height: 1.5, background: '#1B7BA0', display: 'inline-block' }} />
        Testimonios
      </p>
      <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(34px, 4vw, 62px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#1D1D1B', marginBottom: 56 }}>
        Lo que dicen<br />
        nuestros <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#1B7BA0' }}>alumnos.</em>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        {testimonios.map((t, i) => (
          <div key={i} style={{ background: i === 0 ? '#1D1D1B' : 'white', border: '1px solid rgba(29,29,27,0.09)', borderRadius: 8, padding: '36px 40px' }}>
            <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
              {[...Array(t.stars)].map((_, j) => (
                <span key={j} style={{ color: '#1B7BA0', fontSize: 14 }}>★</span>
              ))}
            </div>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: 17, fontStyle: 'italic', fontWeight: 400, color: i === 0 ? '#F7F6F4' : '#1D1D1B', lineHeight: 1.65, marginBottom: 24 }}>
              "{t.q}"
            </p>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: i === 0 ? '#F7F6F4' : '#1D1D1B', marginBottom: 2 }}>{t.name}</div>
              <div style={{ fontSize: 11, color: i === 0 ? 'rgba(250,247,244,0.5)' : 'rgba(29,29,27,0.38)', letterSpacing: '0.06em' }}>{t.rol}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}