export const skills: {
    title: string;
    items: string;
    note?: string;
}[] = [
    { title: 'Frontend', items: 'React · TypeScript · JavaScript · Vite · Redux Toolkit · HTML & CSS' },
    { title: 'Backend & APIs', items: 'Node.js · Express · REST APIs · Zod' },
    { title: 'Data', items: 'PostgreSQL · SQL · MongoDB', note: 'PostGIS and Drizzle in the RAY development preview.' },
    { title: 'Infrastructure & tooling', items: 'Git · npm workspaces · Docker · Docker Compose · Caddy · Amazon S3 · Vercel', note: 'Containers and release preparation, private media storage, and frontend deployment.' },
    { title: 'Applied AI & testing', items: 'OpenAI Responses API · Structured Outputs · Node.js test runner · JSDOM · tsx', note: 'Zod validation, human review, and offline evaluations in the Sales Agent.' },
    { title: 'Currently learning', items: 'Python · AI Engineering', note: 'Building foundations for agents and automation.' },
];
