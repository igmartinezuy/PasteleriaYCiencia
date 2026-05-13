import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 56px', background: scrolled ? 'rgba(11,11,11,0.9)' : 'transparent', transition: 'all 0.3s' }}>
      <a href='#' style={{ fontFamily: 'serif', fontSize: 19, color: '#F4EDE4', textDecoration: 'none' }}>
        Pasteleria and Ciencia
      </a>
      <div style={{ display: 'flex', gap: 36 }}>
        {links.map((link) => (
          <a key={link.href} href={link.href} style={{ fontSize: 12, color: '#D9C2A7', textDecoration: 'none' }}>
            {link.label}
          </a>
        ))}
      </div>
      <a href='#asesoria' style={{ fontSize: 12, background: '#F4EDE4', color: '#0B0B0B', padding: '10px 24px', borderRadius: 100, fontWeight: 600, textDecoration: 'none' }}>
        Agendar
      </a>
    </nav>
  )
}