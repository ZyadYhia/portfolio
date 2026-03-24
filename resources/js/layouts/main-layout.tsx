import type { ReactNode } from 'react'
import Nav from '@/components/main/Nav'
import { contact, meta } from '@/data/skills'

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'var(--bg)',
                color: 'var(--text)',
                fontFamily: 'IBM Plex Mono, monospace',
            }}
        >
            <Nav />
            <main>{children}</main>
            <footer
                style={{
                    padding: '1.25rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border)',
                }}
            >
                <span style={{ fontSize: '0.67rem', color: 'var(--muted)' }}>
                    © {new Date().getFullYear()} {meta.name}
                </span>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                    }}
                >
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.67rem',
                            color: 'var(--muted)',
                            textDecoration: 'none',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = 'var(--accent)')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = 'var(--muted)')
                        }
                    >
                        GitHub
                    </a>
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.67rem',
                            color: 'var(--muted)',
                            textDecoration: 'none',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = 'var(--accent)')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = 'var(--muted)')
                        }
                    >
                        LinkedIn
                    </a>
                    <span
                        style={{ fontSize: '0.67rem', color: 'var(--muted)' }}
                    >
                        Built with{' '}
                        <span style={{ color: 'var(--accent)' }}>
                            Laravel + Inertia.js
                        </span>
                    </span>
                </div>
            </footer>
        </div>
    )
}
