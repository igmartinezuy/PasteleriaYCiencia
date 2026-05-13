import { useState } from 'react';

export default function Asesoria() {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pais, setPais] = useState('');
  const [negocio, setNegocio] = useState('');
  const [situacion, setSituacion] = useState('');

  const tipos = [
    { id: 'producto', icon: '✦', name: 'Quiero desarrollar un producto nuevo', desc: 'Formulacion, recetas y tecnica aplicada a un producto especifico.' },
    { id: 'local', icon: '✦', name: 'Tengo un local y necesito mejorar mi carta', desc: 'Diseno y reformulacion del menu de pasteleria para tu negocio.' },
    { id: 'equipo', icon: '✦', name: 'Quiero capacitar a mi equipo', desc: 'Formacion presencial o remota para el equipo de tu local.' },
  ];

  const handleSubmit = () => {
    if (!nombre || !email || !situacion) return;
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
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(34px, 4vw, 62px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#2C1A0E', marginBottom: 20 }}>
            Tenes un proyecto<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#C4846A' }}>gastronómico?</em>
          </h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(44,26,14,0.58)', lineHeight: 1.8 }}>
            Contanos en que estas trabajando y vemos como podemos ayudarte. Revisamos cada consulta personalmente.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 8 }}>
          <div style={{ background: 'white', border: '1px solid rgba(44,26,14,0.09)', borderRadius: 12, padding: '20px 24px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#2C1A0E', marginBottom: 4 }}>Respuesta en 48hs</div>
            <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(44,26,14,0.58)' }}>Te escribimos personalmente.</div>
          </div>
          <div style={{ background: 'white', border: '1px solid rgba(44,26,14,0.09)', borderRadius: 12, padding: '20px 24px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#2C1A0E', marginBottom: 4 }}>Sin compromiso</div>
            <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(44,26,14,0.58)' }}>Primera consulta para entender tu situacion.</div>
          </div>
          <div style={{ background: 'white', border: '1px solid rgba(44,26,14,0.09)', borderRadius: 12, padding: '20px 24px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#2C1A0E', marginBottom: 4 }}>Experiencia comprobada</div>
            <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(44,26,14,0.58)' }}>Campeones de America con mas de 10 anos asesorando.</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ display: 'flex', marginBottom: 48, border: '1px solid rgba(44,26,14,0.12)', borderRadius: 100, overflow: 'hidden' }}>
          {['1 · Tu proyecto', '2 · Tus datos', '3 · Listo'].map((s, i) => (
            <div key={i} style={{ flex: 1, padding: '12px 16px', textAlign: 'center', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: step === i + 1 ? '#2C1A0E' : 'transparent', color: step === i + 1 ? '#FAF7F4' : step > i + 1 ? '#C4846A' : 'rgba(44,26,14,0.35)', borderRight: i < 2 ? '1px solid rgba(44,26,14,0.12)' : 'none', transition: 'all 0.3s' }}>
              {s}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(44,26,14,0.58)', marginBottom: 24, lineHeight: 1.7 }}>
              Contanos brevemente en que area necesitas ayuda. No hay respuestas incorrectas.
            </p>
            {tipos.map((t) => (
              <div key={t.id} onClick={() => setTipo(t.id)} style={{ border: tipo === t.id ? '2px solid #C4846A' : '1.5px solid rgba(44,26,14,0.12)', borderRadius: 14, padding: '22px 26px', marginBottom: 12, cursor: 'pointer', background: tipo === t.id ? 'rgba(196,132,106,0.06)' : 'white', transition: 'all 0.2s', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', border: tipo === t.id ? 'none' : '1.5px solid rgba(44,26,14,0.2)', background: tipo === t.id ? '#C4846A' : 'transparent', flexShrink: 0, marginTop: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.22s' }}>
                  {tipo === t.id && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'white', display: 'block' }} />}
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#2C1A0E', marginBottom: 5 }}>{t.name}</div>
                  <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(44,26,14,0.58)', lineHeight: 1.6 }}>{t.desc}</div>
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
            <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(44,26,14,0.58)', marginBottom: 28, lineHeight: 1.7 }}>
              Ahora contanos un poco sobre vos y tu proyecto. Con esta informacion podemos preparar una respuesta util.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.58)', display: 'block', marginBottom: 7 }}>Nombre completo *</label>
                <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Tu nombre' style={{ width: '100%', background: 'white', border: '1.5px solid rgba(44,26,14,0.12)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: '#2C1A0E', outline: 'none', fontFamily: 'Montserrat, sans-serif' }} />
              </div>
              <div>
                <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.58)', display: 'block', marginBottom: 7 }}>Email *</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='tu@email.com' style={{ width: '100%', background: 'white', border: '1.5px solid rgba(44,26,14,0.12)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: '#2C1A0E', outline: 'none', fontFamily: 'Montserrat, sans-serif' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.58)', display: 'block', marginBottom: 7 }}>Pais</label>
                <input value={pais} onChange={e => setPais(e.target.value)} placeholder='Argentina' style={{ width: '100%', background: 'white', border: '1.5px solid rgba(44,26,14,0.12)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: '#2C1A0E', outline: 'none', fontFamily: 'Montserrat, sans-serif' }} />
              </div>
              <div>
                <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.58)', display: 'block', marginBottom: 7 }}>Tipo de negocio</label>
                <select value={negocio} onChange={e => setNegocio(e.target.value)} style={{ width: '100%', background: 'white', border: '1.5px solid rgba(44,26,14,0.12)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: negocio ? '#2C1A0E' : 'rgba(44,26,14,0.38)', outline: 'none', fontFamily: 'Montserrat, sans-serif', appearance: 'none', cursor: 'pointer' }}>
                  <option value=''>Seleccionar...</option>
                  <option value='emprendimiento'>Emprendimiento</option>
                  <option value='local'>Local / Cafeteria</option>
                  <option value='cadena'>Cadena / Franquicia</option>
                  <option value='otro'>Otro</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.58)', display: 'block', marginBottom: 7 }}>Contanos tu situacion *</label>
              <textarea value={situacion} onChange={e => setSituacion(e.target.value)} placeholder='En que estas trabajando? Que queres lograr? Cuanto mas nos contras, mejor podemos ayudarte.' rows={4} style={{ width: '100%', background: 'white', border: '1.5px solid rgba(44,26,14,0.12)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: '#2C1A0E', outline: 'none', fontFamily: 'Montserrat, sans-serif', resize: 'vertical' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button onClick={() => setStep(1)} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(44,26,14,0.45)', background: 'none', border: 'none', cursor: 'pointer' }}>← Volver</button>
              <button onClick={handleSubmit} style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FAF7F4', background: nombre && email && situacion ? '#2C1A0E' : 'rgba(44,26,14,0.2)', padding: '14px 32px', borderRadius: 100, border: 'none', cursor: nombre && email && situacion ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
                Enviar consulta →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '56px 32px' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(196,132,106,0.12)', border: '1.5px solid rgba(196,132,106,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 24, color: '#C4846A' }}>✓</div>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 32, fontWeight: 700, color: '#2C1A0E', marginBottom: 12 }}>Recibimos tu consulta</h3>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(44,26,14,0.58)', lineHeight: 1.8, maxWidth: 400, margin: '0 auto' }}>
              Nuestro equipo te van a escribir personalmente en las proximas 48hs. Revisa tu casilla de email.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}