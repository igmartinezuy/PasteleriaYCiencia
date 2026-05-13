export default function Footer() {
  const links = {
    cursos: [
      { label: 'ABC de la Chocolateria', url: 'https://pasteleriayciencia.com/product/abc-de-la-chocolateria' },
      { label: 'Ciencia del Macaron', url: 'https://pasteleriayciencia.com/product/macarons' },
      { label: 'Alfajores 2.0', url: 'https://pasteleriayciencia.com/product/alfajores-artesanales-2-0' },
      { label: 'Galletas y Cookies', url: 'https://pasteleriayciencia.com/product/galletas-cookies-y-mas' },
      { label: 'Ver catalogo completo', url: 'https://pasteleriayciencia.wisboo.com/catalog' },
    ],
    asesorias: [
      { label: 'Desarrollo de producto', url: '#asesoria' },
      { label: 'Recetas para locales', url: '#asesoria' },
      { label: 'Asesoria integral', url: '#asesoria' },
    ],
  };
  return (
    <footer style={{ background: '#2C1A0E', borderTop: '1px solid rgba(250,247,244,0.08)' }}>
      <div style={{ padding: '64px 80px 44px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 56, paddingBottom: 52, borderBottom: '1px solid rgba(250,247,244,0.08)' }}>
          <div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#FAF7F4', marginBottom: 10 }}>
              Pasteleria <span style={{ color: '#C4846A', fontStyle: 'italic' }}>&</span> Ciencia
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(250,247,244,0.35)', lineHeight: 1.7, maxWidth: 200, marginBottom: 24 }}>
              Formacion profesional en chocolateria y pasteleria. Ciencia aplicada al arte culinario.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { label: 'IG', url: 'https://instagram.com/pasteleria.ciencia' },
                { label: 'WA', url: 'https://wa.me/5491173666172' },
                { label: 'YT', url: 'https://youtube.com/@pasteleriayciencia' },
              ].map((s) => (
                <a key={s.label} href={s.url} target='_blank' style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(250,247,244,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(250,247,244,0.35)', fontSize: 10, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.05em' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(250,247,244,0.35)', marginBottom: 18 }}>Cursos online</h4>
            <ul style={{ listStyle: 'none' }}>
              {links.cursos.map((l) => (
                <li key={l.label} style={{ marginBottom: 10 }}>
                  <a href={l.url} target='_blank' style={{ fontSize: 13, fontWeight: 300, color: 'rgba(250,247,244,0.58)', textDecoration: 'none' }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(250,247,244,0.35)', marginBottom: 18 }}>Asesorias</h4>
            <ul style={{ listStyle: 'none' }}>
              {links.asesorias.map((l) => (
                <li key={l.label} style={{ marginBottom: 10 }}>
                  <a href={l.url} style={{ fontSize: 13, fontWeight: 300, color: 'rgba(250,247,244,0.58)', textDecoration: 'none' }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(250,247,244,0.35)', marginBottom: 18 }}>Legal</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: 10 }}><a href='#' style={{ fontSize: 13, fontWeight: 300, color: 'rgba(250,247,244,0.58)', textDecoration: 'none' }}>Privacidad</a></li>
              <li><a href='#' style={{ fontSize: 13, fontWeight: 300, color: 'rgba(250,247,244,0.58)', textDecoration: 'none' }}>Terminos</a></li>
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 36 }}>
          <span style={{ fontSize: 11, color: 'rgba(250,247,244,0.25)' }}>© 2025 Pasteleria & Ciencia. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}