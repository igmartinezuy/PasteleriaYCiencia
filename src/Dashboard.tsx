import { useState, useEffect } from 'react';

type Lead = {
  id: string;
  created_at: string;
  nombre: string;
  email: string;
  pais: string;
  tipo_asesoria: string;
  proyecto: string;
  facturacion: string;
  estado: string;
};

type EstadoKey = 'nuevo' | 'calificado' | 'propuesta' | 'cerrado' | 'perdido';
import { supabase } from './lib/supabase';

const PASSWORD = 'pyc2024admin';

export default function Dashboard() {
  const [auth, setAuth] = useState(false);
  const [input, setInput] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [filtro, setFiltro] = useState('todos');

  const login = () => {
    if (input === PASSWORD) setAuth(true);
  };

  useEffect(() => {
    if (!auth) return;
    setLoading(true);
    supabase.from('leads').select('*').order('created_at', { ascending: false }).then(({ data }) => {
      setLeads(data || []);
      setLoading(false);
    });
  }, [auth]);

  const estados = ['todos', 'nuevo', 'calificado', 'propuesta', 'cerrado', 'perdido'];
  const colores: Record<EstadoKey, string> = { nuevo: '#1B7BA0', calificado: '#27ae60', propuesta: '#f39c12', cerrado: '#1D1D1B', perdido: '#e74c3c' };

  const leadsFiltrados = filtro === 'todos' ? leads : leads.filter(l => l.estado === filtro);

  const updateEstado = async (id: string, estado: string) => {
    await supabase.from('leads').update({ estado }).eq('id', id);
    setLeads(leads.map(l => l.id === id ? { ...l, estado } : l));
  };

  if (!auth) return (
    <div style={{ minHeight: '100vh', background: '#F7F6F4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', borderRadius: 16, padding: 48, width: 360, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <img src='https://storage.wisboo.com/academy_data/kyKo2ZoVAn/public/gkI3Mqaz-marcas-usos-p-and-c-05-2.png' alt='P&C' style={{ height: 36, marginBottom: 32 }} />
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1D1D1B', marginBottom: 8 }}>Panel de administración</h2>
        <p style={{ fontSize: 13, color: 'rgba(29,29,27,0.55)', marginBottom: 24 }}>Ingresá la contraseña para continuar.</p>
        <input
          type='password'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && login()}
          placeholder='Contraseña'
          style={{ width: '100%', border: '1.5px solid rgba(29,29,27,0.15)', borderRadius: 8, padding: '12px 16px', fontSize: 14, fontFamily: 'Montserrat, sans-serif', outline: 'none', marginBottom: 16, boxSizing: 'border-box' }}
        />
        <button onClick={login} style={{ width: '100%', background: '#1B7BA0', color: 'white', border: 'none', borderRadius: 100, padding: '13px 0', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
          Entrar
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#F7F6F4', fontFamily: 'Montserrat, sans-serif' }}>
      <div style={{ background: 'white', borderBottom: '1px solid rgba(29,29,27,0.09)', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <img src='https://storage.wisboo.com/academy_data/kyKo2ZoVAn/public/gkI3Mqaz-marcas-usos-p-and-c-05-2.png' alt='P&C' style={{ height: 32 }} />
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: 'rgba(29,29,27,0.55)' }}>{leads.length} leads totales</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#1B7BA0' }}>{leads.filter(l => l.estado === 'nuevo').length} nuevos</span>
          <button onClick={() => setAuth(false)} style={{ fontSize: 11, color: 'rgba(29,29,27,0.4)', background: 'none', border: 'none', cursor: 'pointer' }}>Salir</button>
        </div>
      </div>

      <div style={{ padding: '32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Total leads', value: leads.length, color: '#1D1D1B' },
            { label: 'Nuevos', value: leads.filter(l => l.estado === 'nuevo').length, color: '#1B7BA0' },
            { label: 'Calificados', value: leads.filter(l => l.estado === 'calificado').length, color: '#27ae60' },
            { label: 'Propuesta', value: leads.filter(l => l.estado === 'propuesta').length, color: '#f39c12' },
            { label: 'Cerrados', value: leads.filter(l => l.estado === 'cerrado').length, color: '#1D1D1B' },
          ].map(s => (
            <div key={s.label} style={{ background: 'white', borderRadius: 12, padding: '20px 24px', border: '1px solid rgba(29,29,27,0.09)' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(29,29,27,0.4)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {estados.map(e => (
            <button key={e} onClick={() => setFiltro(e)} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '8px 16px', borderRadius: 100, border: '1.5px solid', borderColor: filtro === e ? '#1B7BA0' : 'rgba(29,29,27,0.15)', background: filtro === e ? '#1B7BA0' : 'white', color: filtro === e ? 'white' : 'rgba(29,29,27,0.55)', cursor: 'pointer' }}>
              {e}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 48, color: 'rgba(29,29,27,0.4)' }}>Cargando...</div>
        ) : (
          <div style={{ background: 'white', borderRadius: 16, border: '1px solid rgba(29,29,27,0.09)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(29,29,27,0.09)' }}>
                  {['Nombre', 'Email', 'Pais', 'Tipo', 'Proyecto', 'Fecha', 'Estado'].map(h => (
                    <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(29,29,27,0.4)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leadsFiltrados.map((lead, i) => (
                  <tr key={lead.id} style={{ borderBottom: i < leadsFiltrados.length - 1 ? '1px solid rgba(29,29,27,0.06)' : 'none', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 20px', fontSize: 13, fontWeight: 600, color: '#1D1D1B' }}>{lead.nombre}</td>
                    <td style={{ padding: '14px 20px', fontSize: 13, color: '#1B7BA0' }}>{lead.email}</td>
                    <td style={{ padding: '14px 20px', fontSize: 13, color: 'rgba(29,29,27,0.55)' }}>{lead.pais}</td>
                    <td style={{ padding: '14px 20px', fontSize: 12 }}>
                      <span style={{ background: '#E3EFF5', color: '#1B7BA0', padding: '4px 10px', borderRadius: 100, fontWeight: 600, fontSize: 11 }}>{lead.tipo_asesoria}</span>
                    </td>
                    <td style={{ padding: '14px 20px', fontSize: 13, color: 'rgba(29,29,27,0.55)', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{lead.proyecto}</td>
                    <td style={{ padding: '14px 20px', fontSize: 12, color: 'rgba(29,29,27,0.4)' }}>{new Date(lead.created_at).toLocaleDateString('es-AR')}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <select value={lead.estado || 'nuevo'} onChange={e => updateEstado(lead.id, e.target.value)} style={{ fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 100, border: '1.5px solid', borderColor: colores[lead.estado as EstadoKey] || '#1B7BA0', color: colores[lead.estado as EstadoKey] || '#1B7BA0', background: 'white', cursor: 'pointer', outline: 'none', fontFamily: 'Montserrat, sans-serif' }}>
                        {['nuevo', 'calificado', 'propuesta', 'cerrado', 'perdido'].map(e => <option key={e} value={e}>{e}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
                {leadsFiltrados.length === 0 && (
                  <tr><td colSpan={7} style={{ padding: 48, textAlign: 'center', color: 'rgba(29,29,27,0.35)', fontSize: 13 }}>No hay leads en esta categoria.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}