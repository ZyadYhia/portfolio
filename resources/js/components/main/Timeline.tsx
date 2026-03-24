import { experience } from '@/data/experience'

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

export default function Timeline() {
    return (
        <section
            id="experience"
            style={{
                borderBottom: '1px solid var(--border)',
                padding: '4rem 2rem',
            }}
        >
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                <SectionHeader num="03" title="Experience" />

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {experience.map((item, i) => {
                        const isLast = i === experience.length - 1

                        return (
                            <div
                                key={i}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '130px 1px 1fr',
                                    columnGap: '1.4rem',
                                    paddingBottom: isLast ? 0 : '1.8rem',
                                }}
                            >
                                {/* Date */}
                                <div
                                    style={{
                                        fontSize: '0.68rem',
                                        color: 'var(--muted)',
                                        textAlign: 'right',
                                        paddingTop: '3px',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {item.date.replace(' – ', '\n')}
                                </div>

                                {/* Spine */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            flexShrink: 0,
                                            background: item.current
                                                ? 'var(--accent)'
                                                : 'var(--muted)',
                                            marginTop: '3px',
                                        }}
                                    />
                                    {!isLast && (
                                        <div
                                            style={{
                                                flex: 1,
                                                width: '1px',
                                                background: 'var(--border)',
                                                marginTop: '4px',
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Body */}
                                <div>
                                    <div
                                        style={{
                                            fontFamily: 'Syne, sans-serif',
                                            fontSize: '0.9rem',
                                            fontWeight: 700,
                                            marginBottom: '2px',
                                        }}
                                    >
                                        {item.role}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '0.72rem',
                                            color: 'var(--accent2)',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        {item.company}
                                        {item.stack && (
                                            <span
                                                style={{
                                                    color: 'var(--muted)',
                                                }}
                                            >
                                                {' '}
                                                · {item.stack}
                                            </span>
                                        )}
                                    </div>
                                    <p
                                        style={{
                                            fontSize: '0.72rem',
                                            color: 'var(--muted)',
                                            lineHeight: 1.75,
                                        }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
