import { ChartPreview } from "./ChartPreview";
import { education, experience, profile, skills, work } from "./content";

export function App() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top">
          Murlidhar S G
        </a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <p className="eyebrow">Frontend Engineer · React.js</p>
            <h1>{profile.name}</h1>
            <p className="lede">{profile.summary}</p>
            <p className="meta-line">{profile.location}</p>
            <div className="actions">
              <a className="button" href={`mailto:${profile.email}`}>
                Email
              </a>
              <a className="button button-quiet" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="button button-quiet" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <aside className="now" aria-label="Current role">
            <p className="eyebrow on-dark">Now</p>
            <h2>Software Engineer, Analyttica Datalab</h2>
            <p className="now-meta">May 2023 — Present · Bengaluru</p>
            <p>
              Building the LEAPS dashboard studio: canvas authoring, a multi-type chart system, and a Plotly-to-ECharts migration, with analytics in DuckDB WASM.
            </p>
            <ChartPreview />
          </aside>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <p className="eyebrow">01</p>
            <h2>Selected work</h2>
          </div>
          <div className="stack">
            {work.map((item) => (
              <article className="piece" key={item.title}>
                <div className="piece-index">
                  <span>{item.index}</span>
                  <span>{item.when}</span>
                </div>
                <div>
                  <h3>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="place">{item.place}</p>
                  <p>{item.summary}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <ul className="tags" aria-label="Stack">
                    {item.stack.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">02</p>
            <h2>Experience</h2>
          </div>
          <div className="stack">
            {experience.map((job) => (
              <article className="role" key={`${job.role}-${job.dates}`}>
                <div className="role-meta">
                  <p>{job.dates}</p>
                  <p>{job.place}</p>
                </div>
                <div>
                  <h3>
                    {job.role}
                    <span>, {job.org}</span>
                  </h3>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">03</p>
            <h2>Skills</h2>
          </div>
          <dl className="skills">
            {skills.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section education">
          <div className="section-heading">
            <p className="eyebrow">04</p>
            <h2>Education</h2>
          </div>
          <div className="role">
            <div className="role-meta">
              <p>{education.dates}</p>
              <p>{education.detail}</p>
            </div>
            <div>
              <h3>{education.degree}</h3>
              <p className="place">{education.school}</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <p className="eyebrow">Contact</p>
        <a className="email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="footer-links">
          <a href={profile.phoneHref}>{profile.phoneDisplay}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>{profile.location}</span>
        </div>
      </footer>
    </>
  );
}
