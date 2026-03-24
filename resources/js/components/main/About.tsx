import { meta, contact } from '@/data/skills'

function SectionHeader({ num, title }: { num: string; title: string }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', color: 'var(--accent)' }}>{num}</span>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 700 }}>{title}</h2>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>
    )
}

function InfoCard({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: '2px', padding: '0.9rem 1rem', marginBottom: '0.6rem',
        }}>
            <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '4px' }}>
                {label}
            </div>
            <div style={{ fontSize: '0.79rem', color: 'var(--text)' }}>{children}</div>
        </div>
    )
}

export default function About() {
    return (
        <section id="about" style={{ borderBottom: '1px solid var(--border)', padding: '4rem 2rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                <SectionHeader num="01" title="About" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
                    {/* Left — bio */}
                    <div>
                        {meta.about.map((para, i) => (
                            <p key={i} style={{
                                fontSize: '0.8rem', color: 'var(--muted)',
                                lineHeight: 1.9, marginBottom: '1rem',
                            }}>
                                {para}
                            </p>
                        ))}

                        {/* Differentiator */}
                        <div style={{
                            marginTop: '1.5rem',
                            borderLeft: '2px solid var(--accent)',
                            paddingLeft: '1rem', paddingTop: '0.25rem', paddingBottom: '0.25rem',
                            background: 'var(--card)', borderRadius: '0 2px 2px 0',
                        }}>
                            <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '4px' }}>
                                What makes me different
                            </div>
                            <p style={{ fontSize: '0.77rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                                {meta.differentiator}
                            </p>
                        </div>
                    </div>

                    {/* Right — info cards */}
                    <div>
                        <InfoCard label="Location">
                            Cairo, Egypt · <span style={{ color: 'var(--accent2)' }}>Open to remote</span>
                        </InfoCard>
                        <InfoCard label="Focus">
                            <span style={{ color: 'var(--muted)' }}>{meta.focus}</span>
                        </InfoCard>
                        <InfoCard label="Education">
                            <span style={{ display: 'block' }}>{meta.education.degree}</span>
                            <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                                {meta.education.institution} · {meta.education.years}
                            </span>
                        </InfoCard>
                        <InfoCard label="Email">
                            <a href={`mailto:${contact.email}`} style={{ color: 'var(--accent2)', textDecoration: 'none' }}>
                                {contact.email}
                            </a>
                        </InfoCard>
                        <InfoCard label="Languages">
                            <span style={{ color: 'var(--muted)' }}>{meta.languages}</span>
                        </InfoCard>
                    </div>
                </div>
            </div>
        </section>
    )
}
