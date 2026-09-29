import type { ReactNode } from 'react'

// Set resume to the confirmed URL or a public PDF path when available.
const links = {
  github: 'https://github.com/qiliu816-boop',
  tradepilot: 'https://tradepilot-ai-livid.vercel.app',
  resume: null as string | null,
}

function Arrow({ external = false }: { external?: boolean }) {
  return <span aria-hidden="true">{external ? '↗' : '→'}</span>
}

function ExternalLink({ href, className, children }: {
  href: string
  className?: string
  children: ReactNode
}) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}<Arrow external /><span className="sr-only"> (opens in a new tab)</span>
  </a>
}

const pillars = [
  { number: '01', title: 'Business', description: 'Understand business problems, market context, operations, and commercial workflows.', detail: 'Market research · Merchant collaboration' },
  { number: '02', title: 'Data', description: 'Use data analysis and evidence to structure problems and support better decisions.', detail: 'Applied social data science · Analysis' },
  { number: '03', title: 'AI Product', description: 'Translate real business problems into AI-assisted workflows and build testable MVPs.', detail: 'Product thinking · AI coding · Rapid MVPs' },
]

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#home" aria-label="Qi Liu — back to top">Qi Liu<span aria-hidden="true">.</span></a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a><a href="#projects">Projects</a><a href="#resume">Resume</a>
            <ExternalLink href={links.github} className="nav-github">GitHub</ExternalLink>
          </nav>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-square" aria-hidden="true" /> AI Product Portfolio</p>
            <p className="hero-name">Hi, I’m Qi Liu.</p>
            <h1 id="hero-title">Business <span className="multiply">×</span> Data<br /><span className="multiply">×</span> <span className="accent">AI Product</span></h1>
            <p className="hero-description">A business-oriented product candidate connecting international trade, applied social data science, and platform operations with AI-assisted product building.</p>
            <div className="actions"><a className="button button-primary" href="#projects">View Projects <Arrow /></a><a className="button button-outline" href="#resume">View Resume <Arrow /></a></div>
          </div>
          <aside className="perspective" aria-label="Product approach">
            <div className="perspective-top"><span className="eyebrow">My approach</span><span className="cross-mark" aria-hidden="true">+</span></div>
            <p className="perspective-heading">Start with the problem.<br />Build toward a decision.</p>
            <ol className="approach-steps">
              <li><span className="step-dot" aria-hidden="true" /><div><strong>Business context</strong><span>What needs to be solved?</span></div></li>
              <li><span className="step-dot" aria-hidden="true" /><div><strong>Data & evidence</strong><span>What do we actually know?</span></div></li>
              <li><span className="step-dot" aria-hidden="true" /><div><strong>AI-assisted product</strong><span>How can we make it actionable?</span></div></li>
            </ol>
            <div className="perspective-bottom">A practical lens on AI.</div>
          </aside>
          <div className="hero-baseline"><span>Business understanding. Evidence-led thinking. Product execution.</span><a href="#about">Explore my perspective <span aria-hidden="true">↓</span></a></div>
        </section>
        <section id="about" className="section container" aria-labelledby="about-title">
          <div className="section-heading"><div><p className="eyebrow">01 / About</p><h2 id="about-title">Connecting the dots.</h2></div><p className="section-intro">An interdisciplinary background.<br /> A practical approach to product.</p></div>
          <div className="profile-summary"><p>My background brings together <strong>International Economics & Trade</strong>, an <strong>MSc in Applied Social Data Science</strong>, and <strong>platform / OTA operations experience</strong>.</p><p>I focus on understanding the business problem first—then using data, AI workflows, and rapid prototyping to turn ideas into testable products.</p></div>
          <div className="pillar-grid">{pillars.map(pillar => <article className="pillar" key={pillar.title}><span className="pillar-number">{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.description}</p><p className="pillar-detail">{pillar.detail}</p></article>)}</div>
        </section>
        <section id="projects" className="section projects-section" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow">02 / Selected work</p><h2 id="projects-title">From problem to product.</h2></div><p className="section-intro">Business questions, explored<br /> through working products.</p></div>
            <article className="featured-project" aria-labelledby="tradepilot-title">
              <div className="featured-copy">
                <div className="project-labels"><span className="eyebrow">Featured Project</span><span className="live-status"><span aria-hidden="true" />V0.1 Live</span></div>
                <h3 id="tradepilot-title">TradePilot AI</h3><p className="project-subtitle">AI-powered cross-border<br className="desktop-break" /> market research assistant.</p>
                <div className="problem-solution"><div><h4>The problem</h4><p>Cross-border sellers manually piece together fragmented market, competitor, pricing, and customer-review information before making an early market decision.</p></div><div><h4>The solution</h4><p>An evidence-aware analysis workflow that separates data facts from AI inference—and turns research into opportunity, risk, and action insights.</p></div></div>
                <ul className="tags" aria-label="Project capabilities">{['Market Research', 'Evidence Mechanism', 'AI-assisted Analysis', 'Cross-border Commerce', 'Product Thinking'].map(tag => <li key={tag}>{tag}</li>)}</ul>
                <div className="project-actions"><a className="button button-disabled" href="/tradepilot">View Case Study <Arrow /></a><ExternalLink href={links.tradepilot} className="button button-light">Live Demo</ExternalLink></div>
              </div>
              <div className="workflow-panel" aria-label="TradePilot workflow overview">
                <div className="workflow-header"><span className="workflow-brand"><span aria-hidden="true">T</span> TradePilot</span><span className="workflow-caption">Workflow overview</span></div>
                <div className="workflow-body">
                  <p className="eyebrow">Fragmented inputs. Structured insight.</p>
                  <div className="input-grid"><span>Market signals</span><span>Competitors</span><span>Pricing</span><span>Customer reviews</span></div>
                  <div className="flow-line" aria-hidden="true">↓</div>
                  <div className="analysis-box"><span className="analysis-symbol" aria-hidden="true">✳</span><h4>Evidence-aware analysis</h4><p>A clear distinction between<br />what’s known and what’s inferred.</p><div className="evidence-types"><span><i aria-hidden="true" />Data facts</span><span><i aria-hidden="true" />AI inference</span></div></div>
                  <div className="flow-line" aria-hidden="true">↓</div>
                  <div className="output-grid"><div><span aria-hidden="true">↗</span><strong>Opportunity</strong></div><div><span aria-hidden="true">◇</span><strong>Risk</strong></div><div><span aria-hidden="true">→</span><strong>Action</strong></div></div>
                  <p className="workflow-footnote">Designed to support early market decisions.</p>
                </div>
              </div>
            </article>
            <div className="other-projects-heading"><h3>More questions to explore.</h3><span>Next in the portfolio</span></div>
            <div className="other-projects">
              <article className="future-project"><div className="future-top"><span className="project-monogram" aria-hidden="true">B.</span><span className="status-tag">Coming Soon</span></div><h4>BizDoctor AI</h4><p>AI merchant performance diagnosis<br className="desktop-break" /> and growth assistant.</p><span className="future-focus">Operations × Data × B2B Product × AI</span></article>
              <article className="future-project"><div className="future-top"><span className="project-monogram" aria-hidden="true">R.</span><span className="status-tag">Future Update</span></div><h4>Roomie AI</h4><p>AI-enhanced shared-living<br className="desktop-break" /> management product.</p><span className="future-focus">Consumer Product × AI Coding × MVP</span></article>
            </div>
          </div>
        </section>
        <section id="resume" className="section container contact-section" aria-labelledby="contact-title">
          <div><p className="eyebrow">03 / Resume & Contact</p><h2 id="contact-title">Explore more.</h2><p className="contact-description">Interested in the intersection of business, data, and AI?<br className="desktop-break" /> Take a closer look at my work and background.</p><p className="role-note">Product · AI Product · Operations · Business Analysis</p></div>
          <div className="contact-actions">{links.resume ? <ExternalLink href={links.resume} className="button button-primary">View Resume</ExternalLink> : <div className="resume-pending"><button className="button button-outline" disabled aria-describedby="resume-status">View Resume <Arrow /></button><span id="resume-status">Resume will be available soon.</span></div>}<ExternalLink href={links.github} className="text-link">Explore my GitHub</ExternalLink></div>
        </section>
      </main>
      <footer className="container site-footer"><span className="footer-name">Qi Liu<span aria-hidden="true">.</span></span><span>AI Product × Business × Data</span></footer>
    </>
  )
}

