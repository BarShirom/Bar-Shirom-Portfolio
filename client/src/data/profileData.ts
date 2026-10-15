export const profile = {
    name: 'Bar Shirom',
    email: 'shirombar@gmail.com',
    location: 'Bat Yam, Israel',
    github: 'https://github.com/BarShirom',
    linkedin: 'https://www.linkedin.com/in/bar-shirom/',
    headline: 'Full Stack Developer building AI powered products.',
    about: [
        'Full Stack Developer building AI powered products. I build end-to-end web applications using React, TypeScript and Node.js, from frontend and backend development to APIs, SQL and NoSQL databases, Docker, AWS and cloud deployment.',
        'Starting in October 2026, I’ll be studying AI Engineering at the Hebrew University of Jerusalem, with a focus on machine learning, deep learning, LLMs, RAG, AI agents and production AI systems.',
        'I enjoy turning real-world problems and ideas into working products, from initial concept through development and deployment.',
    ],
};
export interface TimelineEntry {
    title: string;
    organization: string;
    period: string;
    detail?: string;
}
export const education: TimelineEntry[] = [
    { title: 'AI Engineering professional program', organization: 'Hebrew University Executive Education', period: 'Enrolled · Starting October 20, 2026', detail: 'Planned curriculum: machine learning, deep learning, LLMs, RAG, and AI agents.' },
    { title: 'Full Stack Web Development', organization: 'Yaniv Arad, Tech Training Labs', period: 'January to April 2024 · 64 hours' },
    { title: 'Full Stack Web Development', organization: 'iNT College', period: 'July 2022 to July 2023 · 564 hours' },
    { title: 'B.A. Political Science & International Relations', organization: 'The Open University of Israel', period: 'October 2018 to October 2022' },
];
