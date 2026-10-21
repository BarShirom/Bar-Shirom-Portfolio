import type { Project } from '../../data/projectsData';

function ScreenshotEvidence({ project }: { project: Project }) {
    const image = project.featuredImage;
    if (!image) return null;

    return <details className="work-evidence">
        <summary>View screenshots<span className="work-evidence-toggle" aria-hidden="true">+</span></summary>
        <div className="work-evidence-panel">
            <figure>
                <figcaption>Local demo · Synthetic data</figcaption>
                <a href={image.src} target="_blank" rel="noreferrer" aria-label="Open owner-pricing screenshot at full size (opens in a new tab)">
                    <img src={image.src} alt={image.alt} width={840} height={2080} loading="lazy"/>
                </a>
            </figure>
            <div className="work-evidence-context">
                <p className="work-evidence-label">Owner pricing</p>
                <p>Owner pricing keeps the partial calculation and work needing manual pricing visible. These screenshots were captured locally with synthetic data. The interface is in Hebrew.</p>
                <a href={image.src} target="_blank" rel="noreferrer">Open owner-pricing screen at full size<span className="sr-only"> (opens in a new tab)</span> ↗</a>
                <ul aria-label="More screenshots">{project.gallery?.filter(capture => capture.src !== image.src).map(capture => <li key={capture.src}>
                    <a href={capture.src} target="_blank" rel="noreferrer">{capture.caption}<span className="sr-only"> Open full-size image in a new tab.</span></a>
                </li>)}</ul>
            </div>
        </div>
    </details>;
}

export default function ProjectActions({ project }: { project: Project }) {
    if (!project.demo && !project.source && !project.featuredImage) return null;

    return <div className="work-actions">
        {project.demo && <a className="work-source" href={project.demo} target="_blank" rel="noreferrer">
            Try live demo <span aria-hidden="true">↗</span><span className="sr-only"> for {project.name} (opens in a new tab)</span>
        </a>}
        {project.source && <a className="work-source" href={project.source} target="_blank" rel="noreferrer">
            View source <span aria-hidden="true">↗</span><span className="sr-only"> for {project.name} (opens in a new tab)</span>
        </a>}
        <ScreenshotEvidence project={project}/>
    </div>;
}
