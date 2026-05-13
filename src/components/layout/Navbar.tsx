import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#cursos', label: 'Cursos' },
    { href: '#asesoria', label: 'Asesorias' },
    { href: '#youtube', label: 'YouTube' },
  ]

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 56px', background: scrolled ? 'rgba(250,247,244,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid rgba(44,26,14,0.08)' : '1px solid transparent', transition: 'all 0.3s' }}>
      <a href='#'>
        <img
          src='https://storage.wisboo.com/academy_data/kyKo2ZoVAn/public/gkI3Mqaz-marcas-usos-p-and-c-05-2.png'
          alt='Pasteleria y Ciencia'
          style={{ height: 40, width: 'auto' }}
          onError={(e) => { e.currentTarget.style.display='none'; }}
        />
      </a>
      <div style={{ display: 'flex', gap: 36 }}>
        {links.map((link) => (
          <a key={link.href} href={link.href} style={{ fontSize: 12, color: 'rgba(44,26,14,0.65)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500 }}>
            {link.label}
          </a>
        ))}
      </div>
      <a href='#asesoria' style={{ fontSize: 11, background: '#2C1A0E', color: '#FAF7F4', padding: '11px 26px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Agendar asesoria
      </a>
    </nav>
  )
}