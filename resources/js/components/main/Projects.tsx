import ProjectCard from '@/components/main/ProjectCard'
import { projects } from '@/data/projects'

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

export default function Projects() {
    return (
        <section
            id="projects"
            style={{
                borderBottom: '1px solid var(--border)',
                padding: '4rem 2rem',
            }}
        >
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
                <SectionHeader num="04" title="Projects" />

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '0.9rem',
                    }}
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
