export interface ProjectImage {
    src: string;
    caption: string;
    alt: string;
}

export interface Project {
    id: 'sales-agent' | 'ray' | 'ant';
    name: string;
    category: string;
    tagline: string;
    description: string;
    engineeringDistinction: string;
    currentBuild?: string;
    workflow: string[];
    workflowLabel?: string;
    tech: string[];
    stack?: { category: string; items: string }[];
    source?: string;
    decisions: string[];
    verification: string;
    next: string;
    featuredImage?: ProjectImage;
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
        id: 'sales-agent',
        name: 'Moving Services Sales Agent',
        category: 'Applied AI / Sales workflow',
        tagline: 'From customer conversations to owner-approved quotes.',
        description: 'A local prototype for handling incomplete moving enquiries, collecting useful details, and preparing quotes. It keeps calculated costs and unpriced work visible so the business owner can review the full scope.',
        engineeringDistinction: 'AI extracts facts. Rules calculate prices. The owner approves.',
        workflow: ['Message', 'Move details', 'Price proposal', 'Owner review', 'Acceptance'],
        tech: ['React', 'TypeScript', 'Node.js / Express', 'OpenAI API', 'Zod', 'Docker'],
        stack: [
            { category: 'Interface', items: 'React, TypeScript, Vite and Hebrew RTL layouts.' },
            { category: 'API and extraction', items: 'Node.js, Express, OpenAI Responses API, Structured Outputs and Zod.' },
            { category: 'Tests and runtime', items: 'Node.js test runner, offline evaluations, Docker Compose and Caddy.' },
        ],
        source: 'https://github.com/BarShirom/moving-services-sales-agent',
        decisions: [
            'OpenAI Structured Outputs constrain extraction to a schema. Zod and domain checks validate values before lead updates; application logic tracks missing details and chooses follow up questions.',
            'Deterministic rules calculate supported costs. Unpriced work stays visible so the owner can confirm the full scope and final price before sending a quote.',
            'Versioned quotes bind acceptance to the approved scope. Acceptance creates a pending-coordination summary without reserving a date or crew.',
        ],
        verification: 'Regression tests reject outdated quotes after move details change and require owner acknowledgement of unpriced work before finalizing a partial calculation. Offline tests use fixture responses; they do not measure live model accuracy.',
        next: 'Local prototype with in-memory sessions. Persistence and external integrations are planned.',
        featuredImage: agentGallery[2],
        gallery: agentGallery,
    },
    {
        id: 'ray',
        name: 'RAY',
        category: 'Community care / Full-stack application',
        tagline: 'Make Stray Cats Visible',
        description: 'Inspired by my experience feeding and caring for community cats, RAY brings feeding stations, routine activity, and reports of animals in need into a shared map.',
        engineeringDistinction: 'Separate feeding and incident-report workflows, supported by authenticated APIs and validated data.',
        workflow: ['Find a location', 'Feeding update or report', 'Activity and report status'],
        tech: ['React', 'TypeScript', 'Redux Toolkit', 'Leaflet', 'Node.js / Express', 'PostgreSQL preview'],
        stack: [
            { category: 'Existing application', items: 'React, Redux Toolkit, Leaflet, Express, JWT, Zod and the MongoDB runtime.' },
            { category: 'Local database preview', items: 'PostgreSQL, PostGIS, Drizzle, SQL migrations and Docker Compose.' },
            { category: 'Private-media preview', items: 'AWS S3, signed uploads and reads, image validation and attachment rules.' },
        ],
        source: 'https://github.com/BarShirom/ray',
        decisions: [
            'Redux Toolkit connects map interactions to Express APIs. Authentication and Zod validation support the care workflows; feeding updates do not create incident reports.',
            'Normal startup uses MongoDB. A separate PostgreSQL/PostGIS preview uses Drizzle schemas and versioned SQL migrations in a local Docker environment.',
            'Private S3 media uses signed uploads and reads, validated images and attachment rules. Upload, display, refresh and API-restart persistence have been exercised locally.',
        ],
        verification: 'Core map and care workflows are in development, alongside a local PostgreSQL and private-media preview.',
        next: 'Complete the remaining preview checks and production configuration for the database and private-media release.',
    },
    {
        id: 'ant',
        name: 'ANT',
        category: 'Local services / Marketplace',
        tagline: 'Connecting service requests with local businesses.',
        description: 'A mobile-first platform in development for moving, delivery, and related services. ANT is being built around structured requests, business profiles, and a clear path from a request to an agreed service.',
        engineeringDistinction: 'Relational models connect businesses with service categories and areas.',
        currentBuild: 'Email/password sign-in and profile screens; business and service schemas and access policies are prepared.',
        workflowLabel: 'Planned marketplace flow',
        workflow: ['Request', 'Relevant businesses', 'Offer review', 'Coordination'],
        tech: ['React', 'TypeScript', 'Vite', 'React Router', 'Supabase', 'PostgreSQL'],
        stack: [
            { category: 'Interface', items: 'React, TypeScript, Vite and React Router.' },
            { category: 'Data foundation', items: 'Supabase Auth, PostgreSQL migrations and row-level access policies.' },
        ],
        decisions: [
            'Supabase email/password integration, session handling and account UI are implemented in the application. Profile loading follows the authenticated user.',
            'SQL migrations define profiles, businesses, service categories and areas, with row-level policies and column privileges. The profile-creation migration is prepared for application.',
        ],
        verification: 'The current build focuses on authentication UI and data foundations. The profile migration has not yet been applied remotely.',
        next: 'Structured requests and offer review are the next product workflow. The illustration shows this planned direction.',
    },
];
