import { contact } from '@/data/skills'

function SectionHeader({ num, title }: { num: string; title: string }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2.5rem',
            }}
        >
            <span
                style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    color: 'var(--accent)',
                }}
            >
                {num}
            </span>
            <h2
                style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                }}
            >
                {title}
            </h2>
            <div
                style={{ flex: 1, height: '1px', background: 'var(--border)' }}
            />
        </div>
    )
}

function ContactLink({
    href,
    label,
    external,
}: {
    href: string
    label: string
    external?: boolean
}) {
    return (
        <a
            href={href}
            {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.73rem',
                color: 'var(--muted)',
                textDecoration: 'none',
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--accent)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
            <span style={{ color: 'var(--accent)' }}>→</span>
            {label}
        </a>
    )
}

export default function Contact() {
    return (
        <section
            id="contact"
            style={{
                borderBottom: '1px solid var(--border)',
                padding: '4rem 2rem',
            }}
        >
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                <SectionHeader num="05" title="Contact" />

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2.5rem',
                        alignItems: 'start',
                    }}
                >
                    {/* Left */}
                    <div>
                        <h3
                            style={{
                                fontFamily: 'Syne, sans-serif',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                lineHeight: 1.1,
                                marginBottom: '1rem',
                            }}
                        >
                            Got an idea?
                            <br />
                            Let's build it.
                        </h3>
                        <p
                            style={{
                                fontSize: '0.77rem',
                                color: 'var(--muted)',
                                lineHeight: 1.85,
                                marginBottom: '1.5rem',
                                maxWidth: '380px',
                            }}
                        >
                            Open to senior web engineering roles, tech lead
                            positions, and interesting freelance projects. Based
                            in Cairo — fully open to remote.
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.6rem',
                            }}
                        >
                            <ContactLink
                                href={`mailto:${contact.email}`}
                                label={contact.email}
                            />
                            <ContactLink
                                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                                label={contact.phone}
                            />
                            <ContactLink
                                href={contact.github}
                                label="github.com/ZyadYhia"
                                external
                            />
                            <ContactLink
                                href={contact.linkedin}
                                label="linkedin.com/in/zyad-yhia"
                                external
                            />
                        </div>
                    </div>

                    {/* Right — form placeholder */}
                    <div
                        style={{
                            background: 'var(--card)',
                            border: '1px solid var(--border)',
                            borderRadius: '2px',
                            padding: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '200px',
                        }}
                    >
                        <p
                            style={{
                                fontSize: '0.72rem',
                                color: 'var(--muted)',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Contact form — coming soon
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
