export interface Experience {
    date: string
    role: string
    company: string
    stack: string
    desc: string
    current?: boolean
}

export const experience: Experience[] = [
    {
        date: 'Jan 2025 – Present',
        role: 'Software Engineer',
        company: 'JisrHR',
        stack: 'React',
        desc: 'Building the HR module frontend for a multi-tenant SaaS platform. React, TypeScript, real-time API integration, and UI/UX-first feature delivery based on customer requirements.',
        current: true,
    },
    {
        date: 'Jul 2024 – Jan 2025',
        role: 'Full-Stack Developer',
        company: 'Coretech-x',
        stack: 'Vue.js / Quasar',
        desc: 'Developed SaaS web applications with Quasar/Vue.js. Handled full product lifecycle — requirements gathering, UI build, SW integration testing, and customer environment management.',
    },
    {
        date: 'Jul 2023 – Jul 2024',
        role: 'Software Engineer',
        company: 'Methode Electronics',
        stack: 'Embedded C',
        desc: 'Application & ECU layer module development for automotive systems. Rigorous unit and integration testing with Tessy. This role sharpened a systems-level discipline that carries into every web project.',
    },
    {
        date: 'Feb 2022 – Jul 2023',
        role: 'Software Engineer',
        company: 'MilkDiamond',
        stack: 'PHP / Laravel',
        desc: 'Built an IoT web platform from scratch — connected device ingestion over MQTT, raw animal data analytics, and a full Farm Management System for dairy production.',
    },
    {
        date: 'Jan 2021 – Feb 2022',
        role: 'Full-Stack Developer',
        company: 'Pintrue',
        stack: 'PHP / Laravel',
        desc: 'ERP web system development covering accounting and inventory. Feature delivery, codebase refactoring, and Fawry payment gateway integration in a gaming app.',
    },
    {
        date: 'Aug 2019 – Jan 2021',
        role: 'Software Engineer',
        company: 'VTS',
        stack: 'PHP / C',
        desc: 'Backend web development for an IoT fleet tracking platform. Real-time telemetry APIs, live monitoring dashboards, and algorithms for analyzing continuous device data streams.',
    },
]
