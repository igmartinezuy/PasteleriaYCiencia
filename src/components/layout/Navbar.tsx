import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#cursos', label: 'Cursos' },
    { href: '#contacto', label: 'Contacto' },
    { href: '#youtube', label: 'YouTube' },
  ]

  return (
    <div>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(20px, 4vw, 56px)', background: scrolled ? 'rgba(247,246,244,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid rgba(29,29,27,0.09)' : '1px solid transparent', transition: 'all 0.3s' }}>
        <a href='#'>
          <img src='https://storage.wisboo.com/academy_data/kyKo2ZoVAn/public/gkI3Mqaz-marcas-usos-p-and-c-05-2.png' alt='Pasteleria y Ciencia' style={{ height: 36, width: 'auto' }} />
        </a>

        {!isMobile && (
          <div style={{ display: 'flex', gap: 32 }}>
            {links.map((link) => (
              <a key={link.href} href={link.href} style={{ fontSize: 12, color: 'rgba(29,29,27,0.6)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500 }}>
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {!isMobile && (
            <a href='#asesoria' style={{ fontSize: 11, background: '#1D1D1B', color: '#F7F6F4', padding: '11px 22px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Agendar
            </a>
          )}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 6, background: 'none', border: 'none', cursor: 'pointer' }} aria-label='Menu'>
              <span style={{ width: 22, height: 1.5, background: '#1D1D1B', display: 'block', transition: 'all 0.25s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ width: 22, height: 1.5, background: '#1D1D1B', display: 'block', transition: 'all 0.25s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ width: 22, height: 1.5, background: '#1D1D1B', display: 'block', transition: 'all 0.25s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          )}
        </div>
      </nav>

      {menuOpen && isMobile && (
        <div style={{ position: 'fixed', top: 72, left: 0, right: 0, zIndex: 49, background: '#F7F6F4', borderBottom: '1px solid rgba(29,29,27,0.09)', padding: '16px 24px 24px', display: 'flex', flexDirection: 'column' }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(29,29,27,0.6)', padding: '14px 0', borderBottom: '1px solid rgba(29,29,27,0.09)', textDecoration: 'none' }}>
              {link.label}
            </a>
          ))}
          <a href='#contacto' onClick={() => setMenuOpen(false)} style={{ marginTop: 16, background: '#1D1D1B', color: '#F7F6F4', padding: '14px 24px', borderRadius: 100, textAlign: 'center', fontSize: 12, fontWeight: 700, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Agendar asesoria
          </a>
        </div>
      )}
    </div>
  )
}