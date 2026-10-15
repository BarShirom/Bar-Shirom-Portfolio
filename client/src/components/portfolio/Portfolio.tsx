import { projects } from '../../data/projectsData';
import type { Project } from '../../data/projectsData';
import ProjectIllustration from './ProjectIllustrations';
import './Portfolio.css';

function PrototypeEvidence({ project }: { project: Project }) {
    const image = project.featuredImage;
    if (!image) return null;

    return <details className="work-evidence">
        <summary>View prototype screens<span className="work-evidence-toggle" aria-hidden="true">+</span></summary>
        <div className="work-evidence-panel">
            <figure>
                <figcaption>Local demo · Synthetic data</figcaption>
                <a href={image.src} target="_blank" rel="noreferrer" aria-label="Open owner-pricing screenshot at full size (opens in a new tab)">
                    <img src={image.src} alt={image.alt} width={840} height={2080} loading="lazy"/>
                </a>
            </figure>
            <div className="work-evidence-context">
                <p className="work-evidence-label">Owner pricing</p>
                <p>Owner pricing keeps the partial calculation and work needing manual pricing visible. The prototype interface is in Hebrew.</p>
                <a href={image.src} target="_blank" rel="noreferrer">Open owner-pricing screen at full size<span className="sr-only"> (opens in a new tab)</span> ↗</a>
                <ul aria-label="More prototype screens">{project.gallery?.filter(capture => capture.src !== image.src).map(capture => <li key={capture.src}>
                    <a href={capture.src} target="_blank" rel="noreferrer">{capture.caption}<span className="sr-only"> Open full-size image in a new tab.</span></a>
                </li>)}</ul>
            </div>
        </div>
    </details>;
}

function ProjectDetails({ project }: { project: Project }) {
    return <details className="work-details">
        <summary>
            Project details <span className="sr-only">for {project.name}</span>
            <span className="work-details-hint" aria-hidden="true">Architecture & next steps</span>
            <span className="work-expand" aria-hidden="true">+</span>
        </summary>
        <div className="work-details-content">
            <h4>How it is built</h4>
            <ol className="work-engineering">{project.decisions.map(decision => <li key={decision}>{decision}</li>)}</ol>
            {project.stack && <div className="work-stack">
                <h4>Technology in context</h4>
                <dl>{project.stack.map(group => <div key={group.category}><dt>{group.category}</dt><dd>{group.items}</dd></div>)}</dl>
            </div>}
            <div className="work-verification"><h4>{project.id === 'sales-agent' ? 'Regression tests' : 'Current development'}</h4><p>{project.verification}</p></div>
            <div className="work-next"><h4>Next step</h4><p>{project.next}</p></div>
        </div>
    </details>;
}

function ProjectFeature({ project, index }: { project: Project; index: number }) {
    return <article id={'project-' + project.id} className={'work-feature work-feature-' + project.id} aria-labelledby={project.id + '-title'}>
        <div className="work-feature-heading">
            <p className="work-category"><span className="work-number" aria-hidden="true">0{index + 1}</span>{project.category}</p>
        </div>
        <div className="work-feature-main">
            <div className="work-copy">
                <h3 id={project.id + '-title'}>{project.name}</h3>
                <p className="work-tagline">{project.tagline}</p>
                <p className="work-description">{project.description}</p>
                <p className="work-distinction">{project.engineeringDistinction}</p>
                {project.currentBuild && <p className="work-current-build"><strong>Current build:</strong> {project.currentBuild}</p>}
                <div className="work-flow">
                    <h4 className={project.workflowLabel ? undefined : 'sr-only'}>{project.workflowLabel ?? 'Workflow'}</h4>
                    <ol>{project.workflow.map(step => <li key={step}>{step}</li>)}</ol>
                </div>
                <ul className="work-tech" aria-label={'Selected technologies for ' + project.name}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
            </div>
            <ProjectIllustration id={project.id}/>
        </div>
        {(project.source || project.featuredImage) && <div className="work-actions">
            {project.source && <a className="work-source" href={project.source} target="_blank" rel="noreferrer">
                View source <span aria-hidden="true">↗</span><span className="sr-only"> for {project.name} (opens in a new tab)</span>
            </a>}
            <PrototypeEvidence project={project}/>
        </div>}
        <ProjectDetails project={project}/>
    </article>;
}

export default function Portfolio() {
    return <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="shell">
            <div className="work-introduction">
                <div><p className="eyebrow">01 / Work</p><h2 id="projects-title">Selected work</h2></div>
                <p>Three products in development.<br/>The idea, the engineering, and the current build.</p>
            </div>
            <nav className="work-index" aria-label="Project index">
                <a href="#project-sales-agent"><strong>Sales Agent:</strong><span>AI-assisted quoting</span><span aria-hidden="true">↘</span></a>
                <a href="#project-ray"><strong>RAY:</strong><span>Community cat care</span><span aria-hidden="true">↘</span></a>
                <a href="#project-ant"><strong>ANT:</strong><span>Local services marketplace</span><span aria-hidden="true">↘</span></a>
            </nav>
            <div className="work-features">{projects.map((project, index) => <ProjectFeature key={project.id} project={project} index={index}/>)}</div>
        </div>
    </section>;
}
