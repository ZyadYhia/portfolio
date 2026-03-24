export interface Project {
    type: string
    name: string
    desc: string
    stack: string[]
    link?: string
    repo?: string
}

export const projects: Project[] = [
    {
        type: 'SaaS · HR',
        name: 'JisrHR — HR Module',
        desc: 'Full HR module for a multi-tenant SaaS — employees, attendance, leave flows, and payroll. Built React-first with a focus on UX and real-time data from a Laravel API.',
        stack: ['React', 'TypeScript', 'React Query', 'ShadCN', 'Laravel'],
    },
    {
        type: 'SaaS · Frontend',
        name: 'Coretech-x Web App',
        desc: 'Customer-facing SaaS web application built with Quasar/Vue.js. Requirement-driven UI, integration testing, and multi-environment deployment workflows.',
        stack: ['Vue.js', 'Quasar', 'JavaScript'],
    },
    {
        type: 'IoT · Web Platform',
        name: 'MilkDiamond Platform',
        desc: 'Web platform for dairy supply chain IoT — real-time device data ingestion over MQTT, animal analytics, and a full farm management system built on Laravel.',
        stack: ['Laravel', 'PHP', 'MQTT', 'MySQL'],
    },
    {
        type: 'IoT · Fleet Web',
        name: 'VTS — Vehicle Tracking',
        desc: 'Web-based fleet management system with real-time GPS telemetry APIs, live monitoring dashboards, and algorithms for analyzing continuous device data streams.',
        stack: ['Laravel', 'PHP', 'MQTT', 'MySQL'],
    },
    {
        type: 'ERP · Web',
        name: 'Pintrue ERP',
        desc: 'Custom web ERP covering accounting and inventory management. Full-cycle feature delivery, codebase refactoring, and Fawry payment gateway integration.',
        stack: ['PHP', 'Laravel', 'Symfony', 'MySQL'],
    },
    {
        type: 'Portfolio · Web',
        name: 'This Portfolio',
        desc: "You're looking at it. A full-stack portfolio site built with Laravel + Inertia.js + React — because a web engineer's portfolio should be built by hand, not from a template.",
        stack: ['Laravel', 'Inertia.js', 'React', 'TypeScript'],
        repo: 'https://github.com/ZyadYhia/portfolio',
    },
]
