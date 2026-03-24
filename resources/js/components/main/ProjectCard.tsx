import { useState } from 'react'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--card)',
                border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: '2px',
                padding: '1.3rem',
                transition: 'border-color 0.2s ease',
                cursor: 'default',
            }}
        >
            {/* Type */}
            <div
                style={{
                    fontSize: '0.6rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.13em',
                    color: 'var(--accent)',
                    marginBottom: '0.5rem',
                }}
            >
                {project.type}
            </div>

            {/* Name */}
            <h3
                style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: hovered ? 'var(--accent)' : 'var(--text)',
                    transition: 'color 0.2s ease',
                }}
            >
                {project.name}
            </h3>

            {/* Description */}
            <p
                style={{
                    fontSize: '0.71rem',
                    color: 'var(--muted)',
                    lineHeight: 1.75,
                    flex: 1,
                    marginBottom: '1rem',
                }}
            >
                {project.desc}
            </p>

            {/* Stack */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5px',
                    marginTop: 'auto',
                }}
            >
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        style={{
                            fontSize: '0.6rem',
                            padding: '2px 7px',
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: '2px',
                            color: 'var(--muted)',
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            {(project.link || project.repo) && (
                <div
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        marginTop: '0.75rem',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid var(--border)',
                    }}
                >
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '0.65rem',
                                color: 'var(--muted)',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            <span style={{ color: 'var(--accent)' }}>→</span>{' '}
                            GitHub
                        </a>
                    )}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '0.65rem',
                                color: 'var(--muted)',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            <span style={{ color: 'var(--accent)' }}>→</span>{' '}
                            Live
                        </a>
                    )}
                </div>
            )}
        </div>
    )
}
