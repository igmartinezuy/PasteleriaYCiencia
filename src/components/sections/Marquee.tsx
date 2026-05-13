export default function Marquee() {
  const items = [
    'Chocolateria de origen',
    'Cristalizacion del cacao',
    'Ciencia del macaron',
    'Reaccion de Maillard',
    'Alfajores artesanales',
    'Temperado profesional',
    'Balance de azucares',
    'Emulsion y textura',
  ];
  const doubled = [...items, ...items];
  return (
    <div style={{ background: '#1D1D1B', padding: '16px 0', overflow: 'hidden', borderTop: '1px solid rgba(44,26,14,0.1)', borderBottom: '1px solid rgba(44,26,14,0.1)' }}>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 64px;
          animation: marquee 24s linear infinite;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className='marquee-track'>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,246,244,0.45)', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#1B7BA0', display: 'inline-block', flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}