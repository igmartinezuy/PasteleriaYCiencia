export default function CTAContacto() {
  return (
    <section style={{ background: '#1D1D1B', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)', textAlign: 'center' }}>
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1B7BA0', marginBottom: 16 }}>
        Trabajemos juntos
      </p>
      <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: '#F7F6F4', marginBottom: 16, letterSpacing: '-0.02em' }}>
        Tenes un proyecto<br />
        <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#6BA3BC' }}>gastronómico?</em>
      </h2>
      <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(247,246,244,0.55)', lineHeight: 1.8, maxWidth: 440, margin: '0 auto 36px' }}>
        Contanos en que estas trabajando y vemos como podemos ayudarte.
      </p>
      <a href='#contacto' style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F7F6F4', background: '#1B7BA0', padding: '16px 36px', borderRadius: 100, textDecoration: 'none' }}>
        Hablemos →
      </a>
    </section>
  );
}