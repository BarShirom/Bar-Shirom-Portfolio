export interface ProjectImage {
    src: string;
    caption: string;
    alt: string;
}
export interface Project {
    id: string;
    name: string;
    category: string;
    status: string;
    description: string;
    contribution: string;
    tech: string[];
    stack?: { category: string; items: string }[];
    source?: string;
    image?: ProjectImage;
    problem: string;
    decisions: string[];
    verification: string;
    next: string;
    gallery?: ProjectImage[];
}
const agentGallery: ProjectImage[] = [
    { src: '/images/agent-01-customer-conversation.jpg', caption: '01 / Customer conversation: collecting missing move details.', alt: 'Hebrew demo conversation with a customer message and a follow up question about dropoff details.' },
    { src: '/images/agent-02-structured-lead.jpg', caption: '02 / Structured lead: known details retained; missing information stays visible.', alt: 'Structured inventory, pickup and dropoff details, and requested date in the Hebrew demo.' },
    { src: '/images/agent-03-owner-pricing.jpg', caption: '03 / Owner pricing: a partial calculation with unpriced work made explicit.', alt: 'Owner pricing view with a 950 ILS partial subtotal and components requiring manual review.' },
    { src: '/images/agent-04-owner-finalization.jpg', caption: '04 / Finalization: the owner confirms the full scope and final price.', alt: 'Owner finalization form with a 1200 ILS price and unchecked scope confirmations.' },
    { src: '/images/agent-05-accepted-awaiting-coordination.jpg', caption: '05 / Accepted quote: manual coordination is still required.', alt: 'Accepted 1200 ILS quote and coordination summary, separate from the original partial subtotal.' },
];
export const projects: Project[] = [
    {
        id: 'ray', name: 'RAY', category: 'Community care · Full stack application', status: 'In development',
        description: 'A community cat care application for managing feeding stations, recording feeding activity, and reporting animals in need.',
        contribution: 'I connect the React map interface to authenticated APIs, feeding workflows, and a PostgreSQL development preview with private S3 media.',
        tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS S3'],
        source: 'https://github.com/BarShirom/ray',
        image: { src: '/images/ray-brand.webp', caption: 'Make Stray Cats Visible · Original RAY project identity', alt: 'RAY cat shaped map pin logo with the words Make Stray Cats Visible.' },
        problem: 'Community cat care involves recurring feeding and location based reports. RAY brings those activities into one map application, keeping feeding stations at its core.',
        decisions: [
            'React, Redux Toolkit and Leaflet connect station and report views to Express APIs. JWT authentication and Zod validation protect the relevant workflows.',
            'A separate PostgreSQL preview uses Drizzle schemas, PostGIS location fields and versioned SQL migrations. Normal startup still uses the earlier MongoDB implementation; this is not a completed production migration.',
            'The S3 development path uses private objects, signed uploads and reads, image validation, and attachment rules. Docker Compose provides the local PostgreSQL/PostGIS environment.',
        ],
        verification: 'Local verification records cover PostgreSQL workflows and S3 upload, display and persistence. Full security acceptance and public deployment remain pending. The public repository may lag this local development work.',
        next: 'Continue the PostgreSQL and private media release work. AI assisted report extraction and broader response coordination are planned, not working product features. RAY has not been used in the field.',
    },
    {
        id: 'sales-agent', name: 'Moving Services Sales Agent', category: 'Applied AI · Business workflow', status: 'Local v0.1 prototype',
        description: 'An AI powered sales workflow that turns customer conversations into structured moving service leads and supports pricing and quotations with human review.',
        contribution: 'I built the extraction boundary, lead workflow, rule based pricing, and owner review interface, keeping model output separate from business decisions.',
        tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'OpenAI Responses API', 'Zod', 'Docker'],
        stack: [
            { category: 'Interface', items: 'React 19, React DOM, TypeScript, Vite, HTML and CSS, Hebrew RTL' },
            { category: 'API and AI', items: 'Node.js, Express 5, OpenAI Node SDK, Responses API, Structured Outputs, Zod 4' },
            { category: 'Testing', items: 'Node.js test runner, JSDOM, tsx, offline conversation and pricing evaluations' },
            { category: 'Development', items: 'Git, npm workspaces, strict TypeScript' },
            { category: 'Containers', items: 'Docker, Docker Compose, Caddy, Chainguard/Wolfi Node runtime' },
            { category: 'Release verification', items: 'Grype, Cosign, SBOM inspection, npm audit, Go tooling for the custom Caddy build. AWS ECR was used for an earlier private image publication; current release preparation does not establish public hosting.' },
        ],
        source: 'https://github.com/BarShirom/moving-services-sales-agent', image: agentGallery[0], gallery: agentGallery,
        problem: 'Moving enquiries arrive as incomplete, out of order messages. The workflow collects useful facts, asks for missing details, and gives an owner enough context to review a quotation.',
        decisions: [
            'OpenAI Structured Outputs constrain the extraction schema. Zod and domain checks validate structure and values before updates reach the lead. Missing information drives follow up questions; provider failures do not invent successful extraction.',
            'Deterministic pricing rules expose supported costs and omitted work. The model does not calculate prices or approve quotes, and provisional tariffs still need business validation.',
            'Owner review separates a partial calculation from the final whole job quote. Customer acceptance leads to manual coordination, without reserving a date or crew.',
            'Docker Compose runs the API behind Caddy. Container preparation uses a Chainguard/Wolfi Node runtime with image scanning and signature verification. Local integration is recorded; public hosting remains unverified.',
        ],
        verification: 'The offline demo uses synthetic data and extraction fixtures. Automated tests and evaluations cover extraction contracts, business rules and quotation states using injected responses. They do not establish live model accuracy or production usage.',
        next: 'Local prototype with temporary sessions held in memory and controlled deployment preparation. Persistent storage, authentication, and WhatsApp integration are not implemented.',
    },
];
export const additionalProject = {
    name: 'ANT', status: 'Early stage prototype · Development paused',
    description: 'A service platform prototype exploring how customers connect with providers for moving, delivery, and related services. My work was on the early product prototype; development is paused while I focus on RAY, the Sales Agent, and AI Engineering preparation.',
};
