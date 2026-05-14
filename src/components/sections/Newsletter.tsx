import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!email) return;
    setLoading(true);
    setError('');
    try {
      const { error: err } = await supabase.from('subscribers').insert({ email });
      if (err) throw err;
      setSent(true);
    } catch (err) {
      setError('Hubo un error. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ background: '#1D1D1B', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,123,160,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 560, margin: '0 auto', padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 40px)', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1B7BA0', marginBottom: 12 }}>Newsletter</p>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#F7F6F4', marginBottom: 16, textTransform: 'uppercase' }}>
          Recibí contenido<br />de alto nivel
        </h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(247,246,244,0.55)', lineHeight: 1.7, marginBottom: 40 }}>
          Tecnicas, formulas y ciencia aplicada directo a tu email. Sin spam.
        </p>
        {!sent ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              type='email'
              placeholder='tu@email.com'
              style={{ width: '100%', maxWidth: 420, background: 'white', border: 'none', borderRadius: 8, padding: '16px 22px', fontSize: 15, fontFamily: 'Montserrat, sans-serif', color: '#1D1D1B', outline: 'none', boxSizing: 'border-box' }}
            />
            {error && <p style={{ fontSize: 12, color: '#e05252' }}>{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading || !email}
              style={{ width: '100%', maxWidth: 420, background: '#1B7BA0', color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', border: 'none', borderRadius: 100, padding: '16px 44px', cursor: email && !loading ? 'pointer' : 'not-allowed', opacity: email && !loading ? 1 : 0.5, transition: 'all 0.2s' }}
            >
              {loading ? 'Enviando...' : 'Suscribirme'}
            </button>
            <p style={{ fontSize: 11, letterSpacing: '0.06em', color: 'rgba(247,246,244,0.35)', marginTop: 4 }}>Sin spam. Solo contenido que vale la pena.</p>
          </div>
        ) : (
          <div>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(27,123,160,0.15)', border: '1.5px solid rgba(27,123,160,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24, color: '#1B7BA0' }}>✓</div>
            <p style={{ fontSize: 15, fontWeight: 500, color: '#6BA3BC', marginBottom: 8 }}>Ya sos parte de la comunidad.</p>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(247,246,244,0.45)' }}>Revisa tu casilla para confirmar.</p>
          </div>
        )}
      </div>
    </section>
  );
}