import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Asesoria() {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pais, setPais] = useState('');
  const [negocio, setNegocio] = useState('');
  const [situacion, setSituacion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const tipos = [
    { id: 'producto', name: 'Quiero desarrollar un producto nuevo', desc: 'Formulacion, recetas y tecnica aplicada a un producto especifico.' },
    { id: 'local', name: 'Tengo un local y necesito mejorar mi carta', desc: 'Diseno y reformulacion del menu de pasteleria para tu negocio.' },
    { id: 'equipo', name: 'Quiero capacitar a mi equipo', desc: 'Formacion presencial o remota para el equipo de tu local.' },
  ];

  const handleSubmit = async () => {
    if (!nombre || !email || !situacion) return;
    setLoading(true);
    setError('');
    try {
      const { error: err } = await supabase.from('leads').insert({
        nombre,
        email,
        pais,
        tipo_asesoria: tipo,
        proyecto: situacion,
        facturacion: negocio,
        estado: 'nuevo',
      });
      if (err) throw err;
      setStep(3);
    } catch (err) {
      setError('Hubo un error al enviar. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contacto' style={{ background: '#F0EDE8', padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'start', marginBottom: 64 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1B7BA0', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1.5, background: '#1B7BA0', display: 'inline-block' }} />
            Contacto
          </p>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#1D1D1B', marginBottom: 16 }}>
            Tenes un proyecto<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#1B7BA0' }}>gastronómico?</em>
          </h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(29,29,27,0.55)', lineHeight: 1.8 }}>
            Contanos en que estas trabajando y vemos como podemos ayudarte. Revisamos cada consulta personalmente.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { title: 'Respuesta en 48hs', desc: 'Te escribimos personalmente.' },
            { title: 'Sin compromiso', desc: 'Primera consulta para entender tu situacion.' },
            { title: 'Experiencia comprobada', desc: 'Nuestro equipo es Campeon de America con mas de 10 anos de trayectoria.' },
          ].map((item) => (
            <div key={item.title} style={{ background: 'white', border: '1px solid rgba(29,29,27,0.09)', borderRadius: 12, padding: '18px 22px' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1D1D1B', marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(29,29,27,0.55)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ display: 'flex', marginBottom: 48, border: '1px solid rgba(29,29,27,0.12)', borderRadius: 100, overflow: 'hidden' }}>
          {['1 · Tu proyecto', '2 · Tus datos', '3 · Listo'].map((s, i) => (
            <div key={i} style={{ flex: 1, padding: '12px 8px', textAlign: 'center', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: step === i + 1 ? '#1D1D1B' : 'transparent', color: step === i + 1 ? '#F7F6F4' : step > i + 1 ? '#1B7BA0' : 'rgba(29,29,27,0.35)', borderRight: i < 2 ? '1px solid rgba(29,29,27,0.12)' : 'none', transition: 'all 0.3s' }}>
              {s}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(29,29,27,0.55)', marginBottom: 24, lineHeight: 1.7 }}>
              Contanos brevemente en que area necesitas ayuda.
            </p>
            {tipos.map((t) => (
              <div key={t.id} onClick={() => setTipo(t.id)} style={{ border: tipo === t.id ? '2px solid #1B7BA0' : '1.5px solid rgba(29,29,27,0.12)', borderRadius: 14, padding: '20px 24px', marginBottom: 12, cursor: 'pointer', background: tipo === t.id ? 'rgba(27,123,160,0.06)' : 'white', transition: 'all 0.2s', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', border: tipo === t.id ? 'none' : '1.5px solid rgba(29,29,27,0.2)', background: tipo === t.id ? '#1B7BA0' : 'transparent', flexShrink: 0, marginTop: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.22s' }}>
                  {tipo === t.id && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'white', display: 'block' }} />}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1D1D1B', marginBottom: 5 }}>{t.name}</div>
                  <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(29,29,27,0.55)', lineHeight: 1.6 }}>{t.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
              <button onClick={() => tipo && setStep(2)} style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F7F6F4', background: tipo ? '#1D1D1B' : 'rgba(29,29,27,0.2)', padding: '14px 32px', borderRadius: 100, border: 'none', cursor: tipo ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
                Continuar →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(29,29,27,0.55)', marginBottom: 28, lineHeight: 1.7 }}>
              Contanos un poco sobre vos y tu proyecto.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(29,29,27,0.55)', display: 'block', marginBottom: 7 }}>Nombre completo *</label>
                <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Tu nombre' style={{ width: '100%', background: 'white', border: '1.5px solid rgba(29,29,27,0.12)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: '#1D1D1B', outline: 'none', fontFamily: 'Montserrat, sans-serif', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(29,29,27,0.55)', display: 'block', marginBottom: 7 }}>Email *</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='tu@email.com' style={{ width: '100%', background: 'white', border: '1.5px solid rgba(29,29,27,0.12)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: '#1D1D1B', outline: 'none', fontFamily: 'Montserrat, sans-serif', boxSizing: 'border-box' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(29,29,27,0.55)', display: 'block', marginBottom: 7 }}>Pais</label>
                <input value={pais} onChange={e => setPais(e.target.value)} placeholder='Argentina' style={{ width: '100%', background: 'white', border: '1.5px solid rgba(29,29,27,0.12)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: '#1D1D1B', outline: 'none', fontFamily: 'Montserrat, sans-serif', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(29,29,27,0.55)', display: 'block', marginBottom: 7 }}>Tipo de negocio</label>
                <select value={negocio} onChange={e => setNegocio(e.target.value)} style={{ width: '100%', background: 'white', border: '1.5px solid rgba(29,29,27,0.12)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: negocio ? '#1D1D1B' : 'rgba(29,29,27,0.38)', outline: 'none', fontFamily: 'Montserrat, sans-serif', appearance: 'none', cursor: 'pointer', boxSizing: 'border-box' }}>
                  <option value=''>Seleccionar...</option>
                  <option value='emprendimiento'>Emprendimiento</option>
                  <option value='local'>Local / Cafeteria</option>
                  <option value='cadena'>Cadena / Franquicia</option>
                  <option value='otro'>Otro</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(29,29,27,0.55)', display: 'block', marginBottom: 7 }}>Contanos tu situacion *</label>
              <textarea value={situacion} onChange={e => setSituacion(e.target.value)} placeholder='En que estas trabajando? Que queres lograr?' rows={4} style={{ width: '100%', background: 'white', border: '1.5px solid rgba(29,29,27,0.12)', borderRadius: 10, padding: '12px 16px', fontSize: 14, color: '#1D1D1B', outline: 'none', fontFamily: 'Montserrat, sans-serif', resize: 'vertical', boxSizing: 'border-box' }} />
            </div>
            {error && <p style={{ color: '#e05252', fontSize: 13, marginBottom: 16 }}>{error}</p>}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button onClick={() => setStep(1)} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(29,29,27,0.45)', background: 'none', border: 'none', cursor: 'pointer' }}>← Volver</button>
              <button onClick={handleSubmit} disabled={loading || !nombre || !email || !situacion} style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F7F6F4', background: nombre && email && situacion && !loading ? '#1D1D1B' : 'rgba(29,29,27,0.2)', padding: '14px 32px', borderRadius: 100, border: 'none', cursor: nombre && email && situacion ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
                {loading ? 'Enviando...' : 'Enviar consulta →'}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '56px 32px' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(27,123,160,0.12)', border: '1.5px solid rgba(27,123,160,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 24, color: '#1B7BA0' }}>✓</div>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 32, fontWeight: 700, color: '#1D1D1B', marginBottom: 12 }}>Recibimos tu consulta</h3>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(29,29,27,0.55)', lineHeight: 1.8, maxWidth: 400, margin: '0 auto' }}>
              Te vamos a escribir personalmente en las proximas 48hs. Revisa tu casilla de email.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}