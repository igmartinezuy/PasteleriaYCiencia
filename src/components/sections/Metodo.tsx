export default function Metodo() {
  const pillars = [
    { n: '01', name: 'Ciencia aplicada', desc: 'Quimica y fisica detras de cada preparacion' },
    { n: '02', name: 'Tecnica precisa', desc: 'Procesos replicables, resultados consistentes' },
    { n: '03', name: 'Seguimiento real', desc: 'Acompanamiento personalizado durante el proceso' },
    { n: '04', name: 'Comunidad activa', desc: 'Red de profesionales en constante crecimiento' },
  ];
  return (
    <section id='metodo' style={{ background: '#2C1A0E', padding: '120px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D9A08A', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1.5, background: '#D9A08A', display: 'inline-block' }} />
            Nuestro metodo
          </p>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(34px, 4vw, 62px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#FAF7F4', marginBottom: 20 }}>
            La tecnica sin<br />
            el <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#D9A08A' }}>porque</em><br />
            no es suficiente.
          </h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(250,247,244,0.58)', lineHeight: 1.8, marginBottom: 48 }}>
            Cada curso combina fundamento cientifico con aplicacion practica inmediata. Resultados reproducibles, sin depender del clima ni de la suerte.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(250,247,244,0.08)', border: '1px solid rgba(250,247,244,0.08)', borderRadius: 12, overflow: 'hidden' }}>
            {pillars.map((p) => (
              <div key={p.n} style={{ background: '#3A2212', padding: '28px 24px' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 36, fontStyle: 'italic', color: '#D9A08A', lineHeight: 1, marginBottom: 10 }}>{p.n}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#FAF7F4', marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'rgba(250,247,244,0.35)', lineHeight: 1.55 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 4, overflow: 'hidden', background: '#3A2212' }}>
            <img
              src='https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80'
              alt='Elaboracion de chocolate'
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.8) brightness(0.8)' }}
            />
          </div>
          <div style={{ position: 'absolute', bottom: 32, left: -32, background: '#C4846A', color: 'white', padding: '24px 28px', borderRadius: 14, maxWidth: 240 }}>
            <p style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 300, lineHeight: 1.5, marginBottom: 10 }}>
              No ensenamos recetas. Ensenamos a entender el chocolate.
            </p>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.75 }}>
              Pasteleria & Ciencia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}