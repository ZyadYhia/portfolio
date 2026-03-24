import { skills } from '@/data/skills'
import type { SkillTag } from '@/data/skills'

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

function Tag({ tag }: { tag: SkillTag }) {
    const color =
        tag.highlight === 'primary'
            ? 'var(--accent)'
            : tag.highlight === 'secondary'
              ? 'var(--accent2)'
              : 'var(--muted)'

    const borderColor =
        tag.highlight === 'primary'
            ? 'var(--accent)'
            : tag.highlight === 'secondary'
              ? 'var(--accent2)'
              : 'var(--border)'

    return (
        <span
            style={{
                fontSize: '0.65rem',
                padding: '3px 8px',
                borderRadius: '2px',
                border: `1px solid ${borderColor}`,
                background: 'var(--surface)',
                color,
            }}
        >
            {tag.label}
        </span>
    )
}

export default function Skills() {
    return (
        <section
            id="skills"
            style={{
                borderBottom: '1px solid var(--border)',
                padding: '4rem 2rem',
            }}
        >
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                <SectionHeader num="02" title="Skills" />

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '0.9rem',
                    }}
                >
                    {skills.map((group) => (
                        <div
                            key={group.title}
                            style={{
                                background: 'var(--card)',
                                border: '1px solid var(--border)',
                                borderRadius: '2px',
                                padding: '1.1rem',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '0.6rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.13em',
                                    color: 'var(--accent)',
                                    marginBottom: '0.85rem',
                                }}
                            >
                                {group.title}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '5px',
                                }}
                            >
                                {group.tags.map((tag) => (
                                    <Tag key={tag.label} tag={tag} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
