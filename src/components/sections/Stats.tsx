export default function Stats() {
  const stats = [
    { n: '32k', label: 'Alumnos formados' },
    { n: '12', label: 'Cursos especializados' },
    { n: '98%', label: 'Satisfaccion general' },
    { n: '4+', label: 'Anos de trayectoria' },
  ];
  return (
    <div style={{ background: '#2C1A0E', borderBottom: '1px solid rgba(250,247,244,0.08)', padding: '0 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: '1px solid rgba(250,247,244,0.08)' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ padding: '48px 40px', borderRight: '1px solid rgba(250,247,244,0.08)' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 52, fontWeight: 400, lineHeight: 1, color: '#FAF7F4', marginBottom: 6, letterSpacing: '-0.02em' }}>
              {s.n}
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(250,247,244,0.35)' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}