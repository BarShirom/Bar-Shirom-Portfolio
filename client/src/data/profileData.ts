export const profile = {
    name: 'Bar Shirom',
    email: 'shirombar@gmail.com',
    location: 'Bat Yam, Israel',
    github: 'https://github.com/BarShirom',
    linkedin: 'https://www.linkedin.com/in/bar-shirom/',
    headline: 'Full Stack Developer building AI powered products.',
    about: [
        'I build web applications with React, TypeScript and Node.js, from interfaces and APIs to databases and deployment. My background in sales and customer success helps me turn customer needs into practical software.',
        'My Moving Services Sales Agent combines React, Vite and CSS with an Express API. The OpenAI Node SDK, Responses API, Structured Outputs and Zod turn Hebrew conversations into structured leads, with pricing rules and human approval kept separate from the model.',
        'I use the Node.js test runner, JSDOM and tsx for automated checks, plus offline evaluations for the sales workflow. Git and npm workspaces support development; Docker, Docker Compose and Caddy support deployment preparation. The case study includes the full stack and container verification tools.',
        'In RAY, I’m developing community cat care workflows, a PostgreSQL preview and private media storage with Amazon S3. I’m also developing my Python skills and preparing for the AI Engineering program at Hebrew University Executive Education, starting October 20, 2026.',
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
    { title: 'B.A. Political Science & International Relations', organization: 'The Open University of Israel', period: 'October 2018 to October 2022 · GPA 85/100' },
];
