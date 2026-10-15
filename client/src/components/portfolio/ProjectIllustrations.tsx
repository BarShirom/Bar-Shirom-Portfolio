import { useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import './ProjectIllustrations.css';

type IllustrationId = 'sales-agent' | 'ray' | 'ant';

function Step({ children }: { children: ReactNode }) {
  return <div className="wi-step">{children}</div>;
}

function Check() {
  return <svg className="wi-icon" viewBox="0 0 20 20" fill="none"><path d="m5 10 3.2 3.2L15 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Arrow() {
  return <div className="wi-connector"><span /><svg viewBox="0 0 12 12" fill="none"><path d="m3 4 3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg></div>;
}

function Stage({ children, order, className = '' }: { children: ReactNode; order: number; className?: string }) {
  return <div className={'wi-stage ' + className} style={{ '--wi-order': order } as CSSProperties}>{children}</div>;
}

function SalesIllustration() {
  return <div className="wi-sales" aria-hidden="true">
    <Stage order={0} className="wi-message-block">
      <div className="wi-message"><span className="wi-message-mark">“</span><p>I’m moving two rooms.</p></div>
    </Stage>
    <Arrow />
    <Stage order={1} className="wi-panel wi-lead">
      <Step>AI-extracted details</Step>
      <div className="wi-fields"><strong>2 rooms</strong><span>Area A → Area B</span></div>
      <div className="wi-missing"><Check /><span>Access clarified in follow-up</span></div>
    </Stage>
    <Arrow />
    <Stage order={2} className="wi-quote-path">
      <div className="wi-panel wi-price"><span className="wi-price-icon"><svg viewBox="0 0 20 20" fill="none"><rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" /><path d="M7 6h6m-6 4h6m-6 4h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg></span><Step>Rule-based price</Step></div>
      <span className="wi-path-arrow">→</span>
      <div className="wi-panel wi-owner"><span className="wi-approved"><Check /></span><Step>Owner approved</Step></div>
    </Stage>
    <Stage order={3} className="wi-accepted"><span className="wi-result-check"><Check /></span><div><strong>Accepted</strong><span>Awaiting coordination</span></div></Stage>
  </div>;
}

function StationPin({ className = '', selected = false }: { className?: string; selected?: boolean }) {
  return <div className={'wi-station-pin ' + className + (selected ? ' wi-pin-selected' : '')}><svg viewBox="0 0 22 22" fill="none"><path d="M5 10h12l-1.5 6h-9L5 10Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M4.5 10h13M9 6v1m4-1v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg></div>;
}

function RayIllustration() {
  return <div className="wi-ray" aria-hidden="true">
    <Stage order={0} className="wi-map">
      <svg className="wi-map-drawing" viewBox="0 0 480 295" preserveAspectRatio="xMidYMid slice" fill="none">
        <rect width="480" height="295" fill="#e8ede7" />
        <path d="M312-15c-22 70 35 93 16 142-17 46-60 70-30 178" stroke="#d1dce1" strokeWidth="28" />
        <path d="m-25 70 155 30 112-64 86 37 173-11M-20 211l130-17 88 35 102-62 204 32M93-20l28 121-14 94 43 121M214-20l26 57-40 190 13 89M414-20l-30 130 38 102-20 109" stroke="#d4dcd3" strokeWidth="20" strokeLinejoin="round" />
        <path d="m-25 70 155 30 112-64 86 37 173-11M-20 211l130-17 88 35 102-62 204 32M93-20l28 121-14 94 43 121M214-20l26 57-40 190 13 89M414-20l-30 130 38 102-20 109" stroke="#fafbf7" strokeWidth="13" strokeLinejoin="round" />
        <path d="m4 136 101 24m142-58 49 17m55 135 36 6M150 22l28 20" stroke="#fafbf7" strokeWidth="7" strokeLinecap="round" />
        <rect x="28" y="238" width="66" height="42" rx="16" fill="#d3dfcb" transform="rotate(-8 28 238)" />
        <rect x="265" y="4" width="34" height="37" rx="12" fill="#d3dfcb" />
        <rect x="427" y="103" width="57" height="58" rx="17" fill="#d3dfcb" />
      </svg>
      <StationPin className="wi-station-one" />
      <StationPin className="wi-station-two" selected />
      <StationPin className="wi-station-three" />
      <div className="wi-report-pin"><span>!</span></div>
      <div className="wi-map-key"><span><i className="wi-key-station" />Feeding station</span><span><i className="wi-key-report">!</i>Animal report</span></div>
    </Stage>
    <Stage order={1} className="wi-ray-activity wi-panel">
      <span className="wi-activity-dot"><Check /></span><div><strong>Feeding update</strong><span>Food and water added</span></div>
    </Stage>
    <Stage order={2} className="wi-animal-report"><span className="wi-report-symbol">!</span><div><strong>Separate animal report</strong><span>Needs attention</span></div></Stage>
  </div>;
}

function Provider({ kind, icon }: { kind: string; icon: 'box' | 'van' }) {
  return <div className="wi-provider"><span className="wi-provider-icon">{icon === 'box' ? <svg viewBox="0 0 28 28" fill="none"><path d="m5 9 9-5 9 5v11l-9 5-9-5V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="m5 9 9 5 9-5m-9 5v11m-4-18 9 5" stroke="currentColor" strokeWidth="1.5" /></svg> : <svg viewBox="0 0 28 28" fill="none"><path d="M3 8h13v12H3V8Zm13 5h5l4 5v2h-9v-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="8" cy="21" r="2.3" fill="#f5f4ff" stroke="currentColor" strokeWidth="1.5" /><circle cx="21" cy="21" r="2.3" fill="#f5f4ff" stroke="currentColor" strokeWidth="1.5" /></svg>}</span><strong>{kind}</strong></div>;
}

function AntIllustration() {
  return <div className="wi-ant" aria-hidden="true">
    <div className="wi-planned">Planned marketplace flow</div>
    <Stage order={0} className="wi-panel wi-request">
      <Step>Service request</Step>
      <strong className="wi-request-title">Small move · Area A → Area B</strong>
    </Stage>
    <div className="wi-branch"><span /><span /></div>
    <Stage order={1} className="wi-provider-stage"><div className="wi-providers"><Provider kind="Moving service" icon="box" /><Provider kind="Local transporter" icon="van" /></div></Stage>
    <Arrow />
    <Stage order={2} className="wi-marketplace-end"><div className="wi-panel wi-offer-review"><Check /><Step>Offer review</Step></div><span className="wi-path-arrow">→</span><div className="wi-coordination"><span className="wi-coordination-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="15" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="M8 3v6m8-6v6M4 12h16m-12 5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span><Step>Service coordination</Step></div></Stage>
  </div>;
}

const captions: Record<IllustrationId, string> = {
  'sales-agent': 'Illustration · Synthetic move details',
  ray: 'Illustration · Synthetic care activity',
  ant: 'Planned flow · Illustrative providers',
};

export default function ProjectIllustration({ id }: { id: IllustrationId }) {
  const figureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      figure.dataset.inView = String(entry.isIntersecting);
      if (entry.isIntersecting) figure.classList.add('wi-has-entered');
    }, { threshold: 0.12 });

    observer.observe(figure);
    return () => observer.disconnect();
  }, []);

  return <figure className={'work-illustration work-illustration--' + id} ref={figureRef}>
    {id === 'sales-agent' ? <SalesIllustration /> : id === 'ray' ? <RayIllustration /> : <AntIllustration />}
    <figcaption>{captions[id]}</figcaption>
  </figure>;
}
