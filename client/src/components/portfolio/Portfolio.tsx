import { projects, additionalProject } from '../../data/projectsData';
import type { Project } from '../../data/projectsData';
function ProjectCard({ project, index }: {
    project: Project;
    index: number;
}) {
    return <article className={'project-card project-' + project.id} aria-labelledby={project.id + '-title'}>
    <div className="project-main">
      <figure className="project-preview">
        <div className="preview-label"><span>PROJECT / 0{index + 1}</span><span>{project.id === 'ray' ? 'Community care' : 'AI with human review'}</span></div>
        {project.image && <div className="preview-image"><img src={project.image.src} alt={project.image.alt} loading="lazy" width={project.id === 'ray' ? 1536 : 840} height={project.id === 'ray' ? 1024 : 2150}/></div>}
        <figcaption>{project.id === 'ray' ? project.image?.caption : 'Conversation preview · Offline demo with synthetic data'}</figcaption>
      </figure>
      <div className="project-copy">
        <p className="eyebrow">{project.category}</p>
        <h3 id={project.id + '-title'}>{project.name}</h3>
        <span className="status"><span aria-hidden="true"/>{project.status}</span>
        <p className="project-description">{project.description}</p>
        <p className="contribution"><strong>My contribution</strong>{project.contribution}</p>
        <ul className="tech-list" aria-label="Selected technologies">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
        {project.source && <a className="text-link" href={project.source} target="_blank" rel="noreferrer">Explore source <span aria-hidden="true">↗</span><span className="sr-only"> for {project.name} (opens in a new tab)</span></a>}
      </div>
    </div>
    <details className="case-study">
      <summary>Read the case study <span className="sr-only">for {project.name}</span><span className="details-hint" aria-hidden="true">Problem, decisions & verification</span><span className="expand-icon" aria-hidden="true">+</span></summary>
      <div className="case-content">
        <div className="case-intro"><div><p className="eyebrow">The problem</p><h4>Why this project exists</h4><p>{project.problem}</p></div><div><p className="eyebrow">My contribution</p><h4>What I worked on</h4><p>{project.contribution}</p></div></div>
        <h4>Key engineering decisions</h4><ol className="decisions">{project.decisions.map(decision => <li key={decision}>{decision}</li>)}</ol>
        {project.stack && <div className="project-stack"><h4>Technology stack</h4><dl className="stack-grid">{project.stack.map(group => <div key={group.category}><dt>{group.category}</dt><dd>{group.items}</dd></div>)}</dl></div>}
        <div className="case-intro"><div><h4>Verification</h4><p>{project.verification}</p></div><div><h4>Current status & next steps</h4><p>{project.next}</p></div></div>
        {project.gallery && <div className="gallery">
          <h4>The product flow</h4><p>Real captures of the local offline demo, using synthetic data and extraction fixtures. Expand a step to view the full screenshot.</p>
          {project.gallery.map(image => <details key={image.src} className="gallery-step"><summary>{image.caption}<span aria-hidden="true">+</span></summary><figure><a href={image.src} target="_blank" rel="noreferrer" aria-label={'Open screenshot at full size: ' + image.caption}><img src={image.src} alt={image.alt} loading="lazy"/></a><figcaption>{image.caption} Select the image to open it at full size.</figcaption></figure></details>)}
        </div>}
      </div>
    </details>
  </article>;
}
export default function Portfolio() {
    return <section className="section shell" id="projects" aria-labelledby="projects-title">
    <div className="section-heading"><h2 className="eyebrow" id="projects-title">01 / Selected work</h2></div>
    <div className="project-list">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index}/>)}</div>
    <div className="additional-project"><div><p className="eyebrow">Additional project</p><h3>{additionalProject.name}</h3><span className="small-status">{additionalProject.status}</span></div><p>{additionalProject.description}</p></div>
  </section>;
}
