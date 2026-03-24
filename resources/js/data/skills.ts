export interface SkillTag {
    label: string
    highlight?: 'primary' | 'secondary'
}

export interface SkillGroup {
    title: string
    tags: SkillTag[]
}

export const skills: SkillGroup[] = [
    {
        title: 'Frontend',
        tags: [
            { label: 'React / Next.js', highlight: 'primary' },
            { label: 'TypeScript', highlight: 'primary' },
            { label: 'Vue.js / Quasar' },
            { label: 'Angular' },
            { label: 'Inertia.js' },
            { label: 'Redux / Zustand' },
            { label: 'React Query' },
            { label: 'Tailwind' },
            { label: 'ShadCN' },
            { label: 'Bootstrap' },
            { label: 'SCSS' },
            { label: 'jQuery' },
        ],
    },
    {
        title: 'Backend',
        tags: [
            { label: 'PHP / Laravel', highlight: 'primary' },
            { label: 'ASP.NET Core' },
            { label: 'C# / EF Core' },
            { label: 'WordPress' },
            { label: 'Go / Gorm' },
            { label: 'REST APIs' },
            { label: 'Inertia.js' },
        ],
    },
    {
        title: 'Database',
        tags: [
            { label: 'MySQL / MariaDB', highlight: 'primary' },
            { label: 'PostgreSQL' },
            { label: 'SQL Server' },
            { label: 'SQLite' },
        ],
    },
    {
        title: 'Infra & Tooling',
        tags: [
            { label: 'Docker', highlight: 'secondary' },
            { label: 'CI/CD' },
            { label: 'Laravel Cloud' },
            { label: 'Git / GitHub' },
            { label: 'Self-hosted / On-prem' },
            { label: 'Jira / Mantis' },
            { label: 'npm / Composer' },
        ],
    },
    {
        title: 'IoT & Systems',
        tags: [
            { label: 'MQTT', highlight: 'secondary' },
            { label: 'IoT Platforms' },
            { label: 'Real-time Telemetry' },
            { label: 'Embedded C' },
            { label: 'MCP Protocol' },
        ],
    },
    {
        title: 'Soft Skills',
        tags: [
            { label: 'Tech Leadership' },
            { label: 'System Design' },
            { label: 'Problem Solving' },
            { label: 'Team Collaboration' },
            { label: 'Stakeholder Comms' },
            { label: 'Self-learner' },
        ],
    },
]

export const contact = {
    email: 'zeyad.yhia95@gmail.com',
    phone: '+20 100 240 1163',
    github: 'https://github.com/ZyadYhia/',
    linkedin: 'https://www.linkedin.com/in/zyad-yhia/',
}

export const meta = {
    name: 'Zyad Yhia Zakaria',
    title: 'Senior Software Engineer',
    location: 'Cairo, Egypt',
    focus: 'Full-Stack Web · SaaS · IoT Platforms · ERP',
    tagline:
        'I turn ideas into full-stack web products — from the first wireframe to the deployed URL.',
    sub: 'Senior Software Engineer · Cairo, Egypt · Open to remote',
    available: true,
    stats: [
        { num: '6+', label: 'Years exp' },
        { num: '4', label: 'Domains' },
        { num: '10+', label: 'Technologies' },
    ],
    about: [
        "I'm a full-stack web engineer based in Cairo, Egypt, specializing in building SaaS platforms, ERPs, and IoT-connected web systems that go from idea to production. I'm backend-leaning by nature — I think in systems, APIs, and data flows — but I'm equally comfortable owning the frontend end-to-end.",
        "Currently at JisrHR, building the HR module in React on top of a Laravel backend. Before that I've shipped IoT platforms, ERP systems, fleet management tools, and SaaS applications across a range of industries — always as someone who owns the full picture, not just a slice of it.",
        'I thrive in tech-lead roles where I can shape architecture decisions, collaborate with juniors, and translate complex requirements into clean, maintainable code. I care deeply about the why behind every technical decision.',
    ],
    differentiator:
        "A background in Embedded C & automotive systems means I think about reliability, performance, and edge cases in ways most web engineers don't. That discipline follows me into every web project I touch.",
    education: {
        degree: 'B.Sc. Electrical & Communications Engineering',
        institution:
            'Higher Institute of Engineering & Technology, New Damietta',
        years: '2014 – 2019',
    },
    languages: 'Arabic (native) · English (proficient)',
    cvUrl: '/cv/Zyad_Yhia_CV.pdf',
}
