import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
]

export default function Nav() {
    const [active, setActive] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
            const ids = navLinks.map((l) => l.id)

            for (const id of [...ids].reverse()) {
                const el = document.getElementById(id)

                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(id)
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 2rem',
                borderBottom: scrolled
                    ? '1px solid var(--border)'
                    : '1px solid transparent',
                background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <button
                onClick={() => scrollTo('home')}
                style={{
                    fontFamily: 'var(--font-family-display, Syne, sans-serif)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text)',
                    cursor: 'pointer',
                }}
            >
                ZY<span style={{ color: 'var(--accent)' }}>.</span>AD
            </button>

            <div style={{ display: 'flex', gap: '6px' }}>
                {navLinks.map((link) => {
                    const isActive = active === link.id

                    return (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            style={{
                                padding: '0.4rem 0.9rem',
                                fontSize: '0.68rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.07em',
                                background: 'transparent',
                                border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                                color: isActive
                                    ? 'var(--accent)'
                                    : 'var(--muted)',
                                cursor: 'pointer',
                                borderRadius: '2px',
                                transition: 'all 0.15s ease',
                                fontFamily: 'inherit',
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) {
                                    ;(
                                        e.target as HTMLElement
                                    ).style.borderColor = 'var(--accent)'
                                    ;(e.target as HTMLElement).style.color =
                                        'var(--accent)'
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) {
                                    ;(
                                        e.target as HTMLElement
                                    ).style.borderColor = 'var(--border)'
                                    ;(e.target as HTMLElement).style.color =
                                        'var(--muted)'
                                }
                            }}
                        >
                            {link.label}
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
