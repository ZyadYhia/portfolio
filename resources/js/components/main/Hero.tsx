import { meta } from '@/data/skills'

const S = {
    section: {
        position: 'relative' as const,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        padding: '6rem 2rem 4rem',
    },
    glow: {
        pointerEvents: 'none' as const,
        position: 'absolute' as const,
        right: '-80px',
        top: '-80px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background:
            'radial-gradient(circle, rgba(232,160,32,0.06) 0%, transparent 70%)',
    },
    grid: {
        pointerEvents: 'none' as const,
        position: 'absolute' as const,
        inset: 0,
        opacity: 0.025,
        backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
    },
    inner: {
        position: 'relative' as const,
        width: '100%',
        maxWidth: '72rem',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
    },
}

export default function Hero() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section id="home" style={S.section}>
            <div style={S.glow} />
            <div style={S.grid} />

            <div style={S.inner}>
                {/* Left */}
                <div style={{ flex: 1 }}>
                    {/* Live tag */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '0.68rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.14em',
                            color: 'var(--accent)',
                            marginBottom: '1rem',
                        }}
                    >
                        <span
                            style={{
                                display: 'inline-block',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: 'var(--accent2)',
                                animation: 'pulseDot 2s ease-in-out infinite',
                            }}
                        />
                        {meta.available
                            ? 'Open to opportunities'
                            : 'Currently unavailable'}
                    </div>

                    {/* Name */}
                    <h1
                        style={{
                            fontFamily: 'Syne, sans-serif',
                            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                            fontWeight: 700,
                            lineHeight: 1.05,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Zyad Yhia
                        <br />
                        <span style={{ color: 'var(--muted)' }}>Zakaria</span>
                    </h1>

                    {/* Tagline */}
                    <p
                        style={{
                            marginTop: '1.25rem',
                            fontSize: '0.83rem',
                            lineHeight: 1.9,
                            color: 'var(--muted)',
                            maxWidth: '500px',
                        }}
                    >
                        I turn ideas into{' '}
                        <strong
                            style={{ color: 'var(--text)', fontWeight: 500 }}
                        >
                            full-stack web products
                        </strong>{' '}
                        —<br />
                        from the first wireframe to the deployed URL.
                    </p>
                    <p
                        style={{
                            marginTop: '0.5rem',
                            fontSize: '0.73rem',
                            color: 'var(--muted)',
                            opacity: 0.65,
                        }}
                    >
                        {meta.sub}
                    </p>

                    {/* CTAs */}
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap' as const,
                            gap: '0.75rem',
                            marginTop: '2rem',
                        }}
                    >
                        <button
                            onClick={() => scrollTo('projects')}
                            style={{
                                padding: '0.65rem 1.3rem',
                                fontSize: '0.72rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.07em',
                                fontWeight: 500,
                                borderRadius: '2px',
                                border: 'none',
                                background: 'var(--accent)',
                                color: '#0a0a0a',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                            }}
                        >
                            View Projects
                        </button>
                        <button
                            onClick={() => scrollTo('contact')}
                            style={{
                                padding: '0.65rem 1.3rem',
                                fontSize: '0.72rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.07em',
                                borderRadius: '2px',
                                border: '1px solid var(--border)',
                                background: 'transparent',
                                color: 'var(--text)',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                            }}
                        >
                            Get in Touch
                        </button>
                        <a
                            href={meta.cvUrl}
                            download
                            style={{
                                padding: '0.65rem 1.3rem',
                                fontSize: '0.72rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.07em',
                                borderRadius: '2px',
                                border: '1px solid var(--border)',
                                background: 'transparent',
                                color: 'var(--muted)',
                                textDecoration: 'none',
                                fontFamily: 'inherit',
                            }}
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Right — stats */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'flex-end',
                        flexShrink: 0,
                    }}
                >
                    {meta.stats.map((stat) => (
                        <div
                            key={stat.label}
                            style={{
                                textAlign: 'right',
                                borderRight: '2px solid var(--accent)',
                                paddingRight: '1rem',
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: 'Syne, sans-serif',
                                    fontSize: '2rem',
                                    fontWeight: 700,
                                    lineHeight: 1,
                                }}
                            >
                                {stat.num}
                            </div>
                            <div
                                style={{
                                    marginTop: '4px',
                                    fontSize: '0.62rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--muted)',
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
