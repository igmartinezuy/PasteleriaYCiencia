export default function YouTube() {
  return (
    <section id='youtube' style={{ background: '#F7F6F4', padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1B7BA0', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1.5, background: '#1B7BA0', display: 'inline-block' }} />
            Canal de YouTube
          </p>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#1D1D1B', marginBottom: 16 }}>
            Contenido gratuito<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#1B7BA0' }}>de alto nivel.</em>
          </h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(29,29,27,0.55)', lineHeight: 1.8, marginBottom: 32 }}>
            Tecnicas, fundamentos cientificos y recetas profesionales. Todo gratis, directo desde la cocina.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(29,29,27,0.09)', border: '1px solid rgba(29,29,27,0.09)', borderRadius: 12, overflow: 'hidden', marginBottom: 32 }}>
            {[{n:'+180',l:'Videos'},{n:'+45k',l:'Suscriptores'},{n:'+2.5M',l:'Vistas totales'},{n:'Gratis',l:'Siempre'}].map((s) => (
              <div key={s.l} style={{ background: 'white', padding: '20px 24px' }}>
                <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: '#1D1D1B', marginBottom: 4 }}>{s.n}</div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(29,29,27,0.35)' }}>{s.l}</div>
              </div>
            ))}
          </div>
          <a href='https://www.youtube.com/@matiasdragun83' target='_blank' style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F7F6F4', background: '#1B7BA0', padding: '14px 28px', borderRadius: 100, textDecoration: 'none' }}>
            Ver canal →
          </a>
        </div>
        <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 16, overflow: 'hidden', background: '#E3EFF5', position: 'relative', cursor: 'pointer' }} onClick={() => window.open('https://www.youtube.com/@matiasdragun83', '_blank')}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#1B7BA0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(27,123,160,0.35)' }}>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='white'><path d='M8 5v14l11-7z'/></svg>
            </div>
            <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(29,29,27,0.55)' }}>Ver en YouTube</span>
          </div>
        </div>
      </div>
    </section>
  );
}