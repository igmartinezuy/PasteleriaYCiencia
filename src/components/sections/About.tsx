export default function About() {
  return (
    <section id='nosotros' style={{ background: '#FAF7F4', padding: '120px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>
        <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 4, overflow: 'hidden', background: '#E8DDD4' }}>
          <img
            src='https://storage.wisboo.com/academy_data/kyKo2ZoVAn/public/LYCHMRrq-banner-1.jpg'
            alt='El equipo de Pasteleria y Ciencia'
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4846A', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1.5, background: '#C4846A', display: 'inline-block' }} />
            Quienes somos
          </p>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(34px, 4vw, 62px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#2C1A0E', marginBottom: 20 }}>
            La ciencia al<br />
            servicio del <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#C4846A' }}>sabor.</em>
          </h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(44,26,14,0.58)', lineHeight: 1.8, marginBottom: 14 }}>
            Somos una academia profesional fundada con una conviccion: la pasteleria de alto nivel requiere entender la ciencia detras de cada proceso.
          </p>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(44,26,14,0.58)', lineHeight: 1.8, marginBottom: 32 }}>
            Lucia y Matias son Campeones de America en pasteleria y participaron en el Mundial de Pasteleria en 2 ocasiones. Mas de una decada formando profesionales de toda Latinoamerica.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Chocolateria fina', 'Ciencia aplicada', 'Alta pasteleria', 'Latinoamerica', 'Asesorias premium'].map((chip) => (
              <span key={chip} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4846A', background: '#F2E0D8', border: '1px solid rgba(196,132,106,0.22)', padding: '6px 14px', borderRadius: 100 }}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}