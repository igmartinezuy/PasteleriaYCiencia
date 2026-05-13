import { useState } from 'react';

export default function Asesoria() {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState('');
  const [precio, setPrecio] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [proyecto, setProyecto] = useState('');

  const tipos = [
    { id: 'desarrollo', name: 'Desarrollo de producto', desc: 'Formulacion de productos para pasteleria y chocolateria.', precio: 'USD 500 - 1.000' },
    { id: 'recetas', name: 'Asesoria de recetas para locales', desc: 'Diseno y reformulacion del menu de pasteleria para cafes y restaurantes.', precio: 'USD 2.000 - 5.000' },
    { id: 'integral', name: 'Asesoria integral', desc: 'Recetas + layout de cocina + capacitacion del equipo.', precio: 'USD 5.000 - 10.000' },
  ];

  const handleSubmit = () => {
    if (!nombre || !email || !proyecto) return;
    setStep(3);
  };

  return (
    <section id='asesoria' style={{ background: '#F3EDE6', padding: '120px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'start', marginBottom: 64 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4846A', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1.5, background: '#C4846A', display: 'inline-block' }} />
            Asesorias 1:1
          </p>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(34px, 4vw, 62px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#2C1A0E' }}>
            Trabajo contigo,<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#C4846A' }}>en tu negocio.</em>
          </h2>
        </div>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(44,26,14,0.58)', lineHeight: 1.8, marginTop: 40 }}>
          Asesorias personalizadas para emprendedores y locales que necesitan expertise tecnico de alto nivel. Antes de agendar, completa el formulario de calificacion.
        </p>
      </div>

      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ display: 'flex', marginBottom: 48, border: '1px solid rgba(44,26,14,0.12)', borderRadius: 100, overflow: 'hidden' }}>
          {['1 · Tipo', '2 · Datos', '3 · Confirmado'].map((s, i) => (
            <div key={i} style={{ flex: 1, padding: '12px 16px', textAlign: 'center', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: step === i + 1 ? '#2C1A0E' : 'transparent', color: step === i + 1 ? '#FAF7F4' : step > i + 1 ? '#C4846A' : 'rgba(44,26,14,0.35)', borderRight: i < 2 ? '1px solid rgba(44,26,14,0.12)' : 'none', transition: 'all 0.3s' }}>
              {s}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            {tipos.map((t) => (
              <div key={t.id} onClick={() => { setTipo(t.id); setPrecio(t.precio); }} style={{ border: tipo === t.id ? '2px solid #C4846A' : '1px solid rgba(44,26,14,0.12)', borderRadius: 12, padding: '24px 28px', marginBottom: 14, cursor: 'pointer', background: tipo === t.id ? 'rgba(196,132,106,0.06)' : 'white', transition: 'all 0.2s', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', border: tipo === t.id ? 'none' : '1.5px solid rgba(44,26,14,0.2)', background: tipo === t.id ? '#C4846A' : 'transparent', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, fontWeight: 700, color: '#2C1A0E', marginBottom: 6 }}>{t.name}</div>
                  <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(44,26,14,0.58)', lineHeight: 1.65, marginBottom: 8 }}>{t.desc}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#C4846A' }}>{t.precio}</div>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
              <button onClick={() => tipo && setStep(2)} style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FAF7F4', background: tipo ? '#2C1A0E' : 'rgba(44,26,14,0.2)', padding: '14px 32px', borderRadius: 100, border: 'none', cursor: tipo ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
                Continuar →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div style={{ background: 'white', border: '1px solid rgba(44,26,14,0.09)', borderRadius: 12, padding: '20px 24px', marginBottom: 24 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.35)', marginBottom: 12 }}>Asesoria seleccionada</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, paddingBottom: 10, borderBottom: '1px solid rgba(44,26,14,0.09)' }}>
                <span style={{ color: 'rgba(44,26,14,0.58)' }}>Tipo</span>
                <span style={{ fontWeight: 600, color: '#2C1A0E' }}>{tipos.find(t => t.id === tipo)?.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, paddingTop: 10 }}>
                <span style={{ color: 'rgba(44,26,14,0.58)' }}>Inversion estimada</span>
                <span style={{ fontWeight: 700, color: '#C4846A' }}>{precio}</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.58)', display: 'block', marginBottom: 7 }}>Nombre completo *</label>
                <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Tu nombre' style={{ width: '100%', background: 'white', border: '1px solid rgba(44,26,14,0.12)', borderRadius: 8, padding: '12px 16px', fontSize: 14, color: '#2C1A0E', outline: 'none', fontFamily: 'Montserrat, sans-serif' }} />
              </div>
              <div>
                <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.58)', display: 'block', marginBottom: 7 }}>Email *</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='tu@email.com' style={{ width: '100%', background: 'white', border: '1px solid rgba(44,26,14,0.12)', borderRadius: 8, padding: '12px 16px', fontSize: 14, color: '#2C1A0E', outline: 'none', fontFamily: 'Montserrat, sans-serif' }} />
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.58)', display: 'block', marginBottom: 7 }}>Describe tu proyecto *</label>
              <textarea value={proyecto} onChange={e => setProyecto(e.target.value)} placeholder='Contanos brevemente que haces y que queres lograr...' rows={4} style={{ width: '100%', background: 'white', border: '1px solid rgba(44,26,14,0.12)', borderRadius: 8, padding: '12px 16px', fontSize: 14, color: '#2C1A0E', outline: 'none', fontFamily: 'Montserrat, sans-serif', resize: 'vertical' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => setStep(1)} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.58)', background: 'none', border: 'none', cursor: 'pointer' }}>← Volver</button>
              <button onClick={handleSubmit} style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FAF7F4', background: '#2C1A0E', padding: '14px 32px', borderRadius: 100, border: 'none', cursor: 'pointer' }}>Confirmar →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(196,132,106,0.12)', border: '1px solid rgba(196,132,106,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 28 }}>✓</div>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 36, fontWeight: 700, color: '#2C1A0E', marginBottom: 10 }}>Solicitud enviada</h3>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(44,26,14,0.58)', lineHeight: 1.75, maxWidth: 380, margin: '0 auto 28px' }}>Nos pondremos en contacto en menos de 24hs para coordinar la reunion inicial.</p>
            <a href='https://wa.me/5491173666172' target='_blank' style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FAF7F4', background: '#2C1A0E', padding: '14px 32px', borderRadius: 100, textDecoration: 'none', display: 'inline-block' }}>Escribir por WhatsApp</a>
          </div>
        )}
      </div>
    </section>
  );
}