import type { ReactNode } from 'react'
import '../styles/case-study.css'

const demoUrl = 'https://tradepilot-ai-livid.vercel.app'
const githubUrl = 'https://github.com/qiliu816-boop/tradepilot-ai'

function ProjectLinks() {
  return (
    <div className="cs-actions">
      <a className="button button-primary" href={demoUrl} target="_blank" rel="noopener noreferrer">
        View Live Demo <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <a className="button button-outline" href={githubUrl} target="_blank" rel="noopener noreferrer">
        View GitHub <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  )
}

function Section({ id, number, label, title, children, dark = false }: {
  id: string
  number: string
  label: string
  title: string
  children: ReactNode
  dark?: boolean
}) {
  return (
    <section id={id} className={`cs-section${dark ? ' cs-section-dark' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="cs-section-heading">
          <p className="eyebrow">{number} / {label}</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function Flow({ steps, label }: { steps: string[]; label: string }) {
  return (
    <ol className="cs-flow" aria-label={label}>
      {steps.map((step, index) => (
        <li key={step}>
          <span className="cs-flow-number">{String(index + 1).padStart(2, '0')}</span>
          <span>{step}</span>
          {index < steps.length - 1 && <span className="cs-flow-arrow" aria-hidden="true">→</span>}
        </li>
      ))}
    </ol>
  )
}

function ProductScreenshot({ src, alt, width, height, number, title, caption, hero = false }: {
  src: string
  alt: string
  width: number
  height: number
  number?: string
  title?: string
  caption?: string
  hero?: boolean
}) {
  return (
    <figure className={`cs-screenshot${hero ? ' cs-screenshot-hero' : ''}`}>
      <a className="cs-screenshot-area" href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size screenshot: ${alt} (opens in a new tab)`}>
        <img src={src} alt={alt} width={width} height={height} loading={hero ? "eager" : "lazy"} />
      </a>
      {title && <figcaption>
        <span className="cs-caption-number">{number}</span>
        <div><h3>{title}</h3><p>{caption}</p></div>
      </figcaption>}
    </figure>
  )
}

const insights = [
  ['Fragmentation', 'Relevant market evidence lives across different sources and formats.'],
  ['Interpretation', 'Raw information does not automatically become a useful business conclusion.'],
  ['Trust', 'AI can summarize quickly, but unsupported conclusions create a new problem: users cannot easily tell what is known and what is inferred.'],
]

const reflections = [
  ['Start with the decision, not the AI.', 'AI creates product value when it improves a real business workflow—not simply when it generates more content.'],
  ['Trust needs product design.', 'Separating evidence from inference made AI reliability a product-design question, not only a model question.'],
  ['Prototype before overbuilding.', 'A focused MVP can test the workflow and communicate product value before investing in APIs, databases, or more complex infrastructure.'],
]

export default function TradePilotPage() {
  return (
    <div className="case-study">
      <a className="skip-link" href="#case-main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="/" aria-label="Qi Liu — Portfolio Home">Qi Liu<span aria-hidden="true">.</span></a>
          <a className="cs-back-link" href="/"><span aria-hidden="true">←</span> Back to Portfolio</a>
        </div>
      </header>
      <main id="case-main">
        <section className="cs-hero container" aria-labelledby="case-title">
          <p className="eyebrow"><span className="small-square" aria-hidden="true" />Featured Case Study · V0.1 Live</p>
          <div className="cs-hero-grid">
            <div>
              <h1 id="case-title">TradePilot AI<span aria-hidden="true">.</span></h1>
              <p className="cs-hero-statement">From fragmented market signals to evidence-aware decisions.</p>
              <p className="cs-hero-description">An AI-powered cross-border market research assistant designed to help small and mid-sized sellers structure early-stage market research and turn fragmented evidence into clearer market decisions.</p>
              <ProjectLinks />
              <p className="cs-stage-note">A portfolio MVP. A working hypothesis, not a claim of proven business impact.</p>
            </div>
            <ProductScreenshot hero src="/images/tradepilot/tradepilot-report.png" alt="TradePilot Market Opportunity Report with demo-data disclosure, opportunity assessment and Market Snapshot." width={2047} height={1221} />
          </div>
          <dl className="cs-metadata">
            <div><dt>Role</dt><dd>Product Design · AI Workflow · Research</dd></div>
            <div><dt>Product</dt><dd>AI Market Research Assistant</dd></div>
            <div><dt>Focus</dt><dd>Cross-border Commerce</dd></div>
            <div><dt>Stage</dt><dd>V0.1 · Live</dd></div>
          </dl>
        </section>

        <Section id="problem" number="01" label="Problem" title="Market research is fragmented before the first decision is even made.">
          <div className="cs-prose-columns">
            <p>Before entering a new market, cross-border sellers often need to review market signals, competitor positioning, pricing, customer feedback, and platform information across multiple sources.</p>
            <p>The challenge is not simply finding information. It is turning scattered inputs into a structured view that can support an early market decision.</p>
          </div>
          <div className="cs-problem-flow" aria-label="Fragmented research inputs require manual synthesis before a market decision">
            <ul className="cs-source-list">{['Market signals', 'Competitors', 'Pricing', 'Customer reviews'].map(item => <li key={item}>{item}</li>)}</ul>
            <span className="cs-connector" aria-hidden="true">→</span>
            <div className="cs-synthesis">Manual synthesis</div>
            <span className="cs-connector" aria-hidden="true">→</span>
            <div className="cs-decision">Market decision</div>
          </div>
          <p className="cs-callout">There is plenty of information. <strong>The real cost is turning it into a decision.</strong></p>
        </Section>

        <Section id="insight" number="02" label="Insight" title="The opportunity was not simply to add AI.">
          <div className="cs-three-grid">
            {insights.map(([title, description], index) => <article className="cs-insight" key={title}>
              <span className="cs-card-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p>
            </article>)}
          </div>
          <div className="cs-principle"><h3>The product opportunity was to use AI for synthesis while keeping the reasoning traceable.</h3><p>This became the design principle behind TradePilot: AI should help structure a decision, not replace the evidence behind it.</p></div>
        </Section>

        <Section id="solution" number="03" label="Solution" title="Turn fragmented research into a structured analysis workflow.">
          <p className="cs-body cs-wide-copy">TradePilot brings the key inputs of early-stage market research into one guided workflow, then organizes the analysis around user needs, competition, opportunities, risks, and recommended actions.</p>
          <Flow label="Product flow" steps={['Product', 'Target Market', 'Business Context', 'Market Evidence', 'AI Analysis', 'Market Report']} />
          <div className="cs-outputs"><h3>Structured outputs</h3><ul>{['User Needs', 'Competitor Analysis', 'Market Opportunity', 'Risk Signals', 'Recommended Actions'].map(item => <li key={item}>{item}</li>)}</ul></div>
          <div className="cs-screenshot-grid">
            <ProductScreenshot number="01" src="/images/tradepilot/tradepilot-input.png" alt="TradePilot analysis setup with product inputs, Research Brief and Input, Analyse, Report navigation." width={1905} height={1164} title="Structured inputs" caption="Product, target market, business context and supporting evidence are collected before analysis begins." />
            <ProductScreenshot number="02" src="/images/tradepilot/tradepilot-evidence.png" alt="TradePilot demo evidence showing Market Snapshot, RM79 median price, customer value signals and review complaints." width={1173} height={1137} title="Structured evidence" caption="Market signals are organized into pricing, customer value and dissatisfaction evidence before AI interpretation." />
          </div>
        </Section>

        <Section id="ai-role" number="04" label="AI Role" title="AI should assist the decision — not hide the evidence." dark>
          <div className="cs-prose-columns"><p>AI is useful for synthesizing fragmented information, identifying patterns and translating research into structured business implications.</p><p>But when AI-generated conclusions are presented without context, speed can come at the cost of trust.</p></div>
          <div className="cs-evidence-comparison">
            <article><div className="cs-evidence-top"><h3>Data fact</h3><span>Known</span></div><p>Information directly supported by the provided market evidence.</p><div className="cs-evidence-bottom"><span className="cs-fact-dot" aria-hidden="true" />Grounded in evidence</div></article>
            <span className="cs-versus">versus</span>
            <article><div className="cs-evidence-top"><h3>AI inference</h3><span>Inferred</span></div><p>Interpretation generated from the available signals.</p><div className="cs-evidence-bottom"><span className="cs-inference-dot" aria-hidden="true" />Requires judgment</div></article>
          </div>
          <Flow label="Evidence to action" steps={['Evidence', 'AI Interpretation', 'Business Implication', 'Action']} />
          <div className="cs-evidence-details"><h3>Evidence-aware design includes</h3><ul>{['Supporting data / source', 'Keywords', 'Sample size', 'Example reviews', 'Data limitations', 'External risks'].map(item => <li key={item}>{item}</li>)}</ul></div>
          <p className="cs-evidence-takeaway">The goal is not to make AI sound certain.<br /><strong>It is to make the basis of the recommendation visible.</strong></p>
        </Section>

        <Section id="execution" number="05" label="Execution" title="From product idea to working MVP.">
          <Flow label="MVP execution process" steps={['Problem Definition', 'Product Flow', 'AI-assisted Prototyping', 'Codex Development', 'QA', 'Live Deployment']} />
          <div className="cs-three-grid cs-execution-grid">
            <div><h3>Product scope</h3><p className="cs-scope-note">4 core screens</p><ul><li>Home</li><li>Analysis Input</li><li>AI Analysis Loading</li><li>Market Report</li></ul></div>
            <div><h3>Implementation</h3><ul><li>React</li><li>TypeScript</li><li>Vite</li><li>GitHub</li><li>Vercel</li></ul></div>
            <div><h3>Validation</h3><ul><li>Responsive QA</li><li>End-to-End QA</li><li>Browser checks</li><li>Live deployment</li></ul></div>
          </div>
          <p className="cs-callout">The objective of V0.1 was not technical completeness. <strong>It was to turn the product hypothesis into a working, demonstrable workflow.</strong></p>
          {/* Optional execution screenshot strip: add up to three real assets when supplied. */}
        </Section>

        <Section id="validation" number="06" label="Validation" title="What has been validated — and what has not.">
          <div className="cs-validation-grid">
            <div className="cs-validated"><h3>Validated in V0.1</h3><ul>{['End-to-end product flow', 'Evidence mechanism implemented', 'Responsive experience', 'Live interactive demo', 'Core workflow is demonstrable'].map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div>
            <div className="cs-unvalidated"><h3>Not yet validated</h3><ul>{['Real seller adoption', 'Reduction in research time', 'Improvement in decision quality', 'Production-scale AI reliability'].map(item => <li key={item}><span aria-hidden="true">—</span>{item}</li>)}</ul></div>
          </div>
          <div className="cs-next-question"><p className="eyebrow">Next validation question</p><h3>Can evidence-aware AI analysis help cross-border sellers complete early-stage market research faster while maintaining confidence in the reasoning behind recommendations?</h3><p>A future validation round would compare research time, perceived usefulness, decision confidence, and the quality of evidence-backed recommendations with target users.</p></div>
        </Section>

        <Section id="reflection" number="07" label="Reflection" title="What I learned from building TradePilot.">
          <div className="cs-reflections">{reflections.map(([title, description], index) => <article key={title}><span className="cs-card-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </Section>

        <section className="cs-final container" aria-labelledby="explore-tradepilot">
          <div><p className="eyebrow">See the working MVP</p><h2 id="explore-tradepilot">Explore TradePilot</h2></div>
          <div><ProjectLinks /><a className="cs-back-link" href="/"><span aria-hidden="true">←</span> Back to Portfolio</a></div>
        </section>
      </main>
      <footer className="container site-footer"><a className="footer-name" href="/">Qi Liu<span aria-hidden="true">.</span></a><span>AI Product × Business × Data</span></footer>
    </div>
  )
}
