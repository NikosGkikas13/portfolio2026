import { useEffect, useRef, useState } from 'react'
import avatarImg from './assets/avatar.jpeg'

const NAV_LINKS = [
  { num: '01', label: 'about', href: '#about' },
  { num: '02', label: 'now', href: '#now' },
  { num: '03', label: 'work', href: '#work' },
  { num: '04', label: 'experience', href: '#experience' },
  { num: '05', label: 'contact', href: '#contact' },
] as const

const FOCUS_CHIPS = [
  'AI agents',
  'Custom skills',
  'Workflow automation',
  'React 19 / RSC',
  'Type-safe APIs',
  'Trading UIs',
] as const

const EXPERIENCE = [
  {
    years: '2025 — now',
    company: 'JPMorganChase',
    title: 'Software Engineer II · Greece, hybrid',
    bullets: [
      'Built highly interactive React + TypeScript apps for traders to inspect ETF baskets, edit constituents, monitor live pricing and risk, validate trade inputs, and submit baskets into pricing & valuation engines.',
      'Shipped composition editors, pricing workflows, basket management tools, and charting features powering real-time analytics and trading decisions.',
      'Partnered with backend engineers to define and integrate the services behind low-latency market data, pricing, and risk calculations.',
      "Built desk-specific UI extensions, persisted user-state management, validation frameworks, and comprehensive automated test coverage — keeping the platform performant and tailored to each desk's workflow.",
      'Drove AI-driven engineering initiatives across the equities ETF business — AI agents, reusable skills, and workflow automation to accelerate delivery and streamline trading & ops processes.',
    ],
  },
  {
    years: '2023 — 2025',
    company: 'OKTO',
    title: 'Front-end developer',
    bullets: [
      'Built and maintained secure, high-performance web applications in React + TypeScript, with a focus on reusable, responsive UI components.',
      'Partnered with backend, product and design in an Agile setting to ship features that move business metrics.',
      'Managed app state with Redux and Context API, keeping behavior predictable across pages.',
      'Improved frontend performance with lazy loading and memoization — cut initial load time and bumped responsiveness.',
      'Mentored on React + TS best practices by senior engineers; lifted code quality and team velocity.',
    ],
  },
  {
    years: '2020 — 2023',
    company: 'Sportion',
    title: 'Junior web developer',
    bullets: [
      'Built fully responsive pages from scratch, in close collaboration with the design team.',
      'Maintained, improved and revamped existing landing pages.',
      'Designed and shipped mobile-first features.',
      'Browser testing and debugging across the matrix.',
      'Fetched and handled data from APIs.',
    ],
  },
  {
    years: '2019 — 2020',
    company: 'Freelance',
    title: 'Junior web developer',
    bullets: ['Took on small freelance projects while learning the craft. The work that started it.'],
  },
] as const

const SKILLS = [
  { name: 'JavaScript', level: 'primary' },
  { name: 'TypeScript', level: 'primary' },
  { name: 'React', level: 'primary' },
  { name: 'Redux · Context', level: 'primary' },
  { name: 'HTML5', level: 'primary' },
  { name: 'CSS3 · responsive', level: 'primary' },
  { name: 'jQuery', level: 'familiar' },
  { name: 'PHP', level: 'familiar' },
  { name: 'WordPress', level: 'familiar' },
  { name: 'C', level: 'familiar' },
] as const

const SERVICES = [
  {
    n: '01',
    title: 'Custom web development',
    body: 'Tailored websites and apps from scratch in modern React / TypeScript. Sensible architecture, no over-engineering.',
  },
  {
    n: '02',
    title: 'Responsive design',
    body: 'Layouts that hold up from mobile to ultrawide — built mobile-first with real device testing, not just media queries.',
  },
  {
    n: '03',
    title: 'Single-page applications',
    body: 'Dynamic, interactive SPAs in React. State you can reason about and components you can actually reuse.',
  },
  {
    n: '04',
    title: 'Performance optimization',
    body: 'Code splitting, lazy loading, image strategy, render profiling — measurable wins on real Lighthouse scores.',
  },
  {
    n: '05',
    title: 'API integration',
    body: 'Wiring front-ends to REST / GraphQL / third-party APIs with proper error states, retries, and type safety.',
  },
  {
    n: '06',
    title: 'Workflow & automation',
    body: "Where my evenings go right now: AI agents, custom skills, and tooling that takes the rote work off the team's plate.",
  },
] as const

const TICKER_WORDS = [
  'ai agents',
  'custom skills',
  'workflow automation',
  'odyhook.dev',
  'a quiet evening',
] as const

const THEME_KEY = 'portfolio_theme'

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = window.localStorage.getItem(THEME_KEY) as 'light' | 'dark' | null
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))] as const
}

function useTypingTicker(words: readonly string[]) {
  const [text, setText] = useState('')
  const state = useRef({ i: 0, j: 0, deleting: false })

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const s = state.current
      const word = words[s.i]
      if (s.deleting) {
        setText(word.slice(0, s.j))
        s.j -= 1
      } else {
        setText(word.slice(0, s.j))
        s.j += 1
      }

      let delay = s.deleting ? 30 : 70
      if (!s.deleting && s.j === word.length + 1) {
        s.deleting = true
        delay = 1400
      } else if (s.deleting && s.j === -1) {
        s.deleting = false
        s.i = (s.i + 1) % words.length
        s.j = 0
        delay = 220
      }
      timer = setTimeout(tick, delay)
    }
    tick()
    return () => clearTimeout(timer)
  }, [words])

  return text
}

function Nav({ theme, onToggleTheme }: { theme: 'light' | 'dark'; onToggleTheme: () => void }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="mark">
          <span className="a">nikos</span>
          <span className="b">.gkikas</span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              <span className="num">{link.num}</span>
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  const typed = useTypingTicker(TICKER_WORDS)
  return (
    <section className="hero">
      <img className="avatar" src={avatarImg} alt="Nikos Gkikas" width={92} height={92} />
      <div className="status">
        <span className="dot dot--delivered" />
        available for new work — Q3 2026
      </div>
      <h1>
        <span className="first">Nikos</span>
        <br />
        <span className="last">
          Gkikas<span className="dot-char">.</span>
        </span>
      </h1>
      <div className="role">
        software engineer
        <span className="sep">·</span>
        Marathon, Greece
        <span className="sep">·</span>
        JPMorganChase
      </div>

      <p className="lede">
        Software engineer with experience building{' '}
        <span className="accent">high-performance frontend and full-stack applications</span>{' '}
        across fintech, trading, and web platforms. Specialized in React, TypeScript, and real-time
        systems, with a strong focus on scalable UI architecture, trading workflows, and
        low-latency data-driven applications.
      </p>
      <p className="lede">
        Passionate about <span className="accent">AI-driven engineering</span>, workflow automation,
        and developer productivity — with hands-on experience building and integrating AI agents,
        reusable skills, and intelligent tooling into modern software platforms.
      </p>

      <div className="ticker">
        <span className="prompt">~/</span>
        <span>currently building&nbsp;→&nbsp;</span>
        <span className="typed">{typed}</span>
        <span className="cursor" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <div className="eyebrow">01 / about</div>
      <h2 className="section-title">A bit about me.</h2>
      <p className="body">
        I'm based in Marathon, Greece, with a Bachelor's in{' '}
        <strong>Informatics Engineering</strong>. Six years writing web software professionally —
        three of them at <strong>OKTO</strong>, where I build payments, trading and risk interfaces
        in React and TypeScript.
      </p>
      <p className="body">
        I find beauty in clean, thorough, well-structured code. I like reusable components, small
        modules, sensible state, and interfaces that quietly do the right thing. My goal is to get
        a little better with each day.
      </p>
    </section>
  )
}

function Now() {
  return (
    <section id="now">
      <div className="eyebrow">02 / now</div>
      <h2 className="section-title">What I'm focused on.</h2>
      <p className="body">A short list of what's holding my attention this quarter.</p>
      <div className="chips">
        {FOCUS_CHIPS.map((chip) => (
          <span key={chip} className="chip">
            <span className="dot" />
            {chip}
          </span>
        ))}
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work">
      <div className="eyebrow">03 / work</div>
      <h2 className="section-title">Side projects.</h2>
      <p className="body">
        Things I'm making outside the day job. Most of them are works in progress — I'll point you
        at them when they're ready.
      </p>

      <div className="project-list">
        <a className="project" href="https://odyhook.dev/" target="_blank" rel="noreferrer">
          <div className="project-head">
            <div className="title-wrap">
              <h3>Odyhook</h3>
              <div className="url">odyhook.dev&nbsp;→</div>
            </div>
            <span className="pill pill--in-flight">
              <span className="dot dot--in-flight" />
              in_flight
            </span>
          </div>
          <p>
            A smart webhook proxy. Ingests events from upstream providers, logs every payload
            forever, fans out to multiple destinations with automatic retries, and lets you replay
            any event with one click. AI-compiled filters and JS transforms run in a QuickJS
            sandbox before forwarding.
          </p>
          <div className="project-meta">
            <span>
              stack <b>Next.js · Prisma · Postgres · QuickJS</b>
            </span>
            <span>
              status <b>under construction</b>
            </span>
          </div>
        </a>
      </div>

      <div className="project-empty">
        More projects landing here soon — currently shipping privately.
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="eyebrow">04 / experience</div>
      <h2 className="section-title">Where I've worked.</h2>
      {EXPERIENCE.map((job) => (
        <div className="xp" key={job.company + job.years}>
          <div className="years">{job.years}</div>
          <div>
            <div className="company">{job.company}</div>
            <div className="title">{job.title}</div>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="eyebrow">05 / skills</div>
      <h2 className="section-title">Tech stack.</h2>
      <p className="body" style={{ marginBottom: 28 }}>
        A working knowledge of the front-end stack, with depth where I've spent the most time.
      </p>
      <div className="skill-grid">
        {SKILLS.map((s) => (
          <div className="skill" key={s.name}>
            <span className="name">{s.name}</span>
            <span className="level">{s.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services">
      <div className="eyebrow">06 / services</div>
      <h2 className="section-title">What I can help with.</h2>
      <p className="body" style={{ marginBottom: 28 }}>
        Whether you need an entire product front-end or a hand on something specific, these are the
        lanes I work in.
      </p>
      <div className="svc-grid">
        {SERVICES.map((s) => (
          <div className="svc" key={s.n}>
            <div className="n">{s.n}</div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education">
      <div className="eyebrow">07 / education</div>
      <h2 className="section-title">Education.</h2>
      <div className="edu">
        <div className="when">B.Eng.</div>
        <div className="what">
          Informatics Engineering
          <small>Bachelor's degree — Greece</small>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact">
      <div className="eyebrow">08 / contact</div>
      <h2 className="section-title">Let's talk.</h2>
      <p className="body" style={{ marginBottom: 32 }}>
        Have a project, a hire, or just want to compare notes on AI tooling? The form goes straight
        to my inbox. Or pick the channel you prefer on the right.
      </p>
      <div className="contact-grid">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <div className="field">
            <label htmlFor="n">Name</label>
            <input id="n" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="e">Email</label>
            <input id="e" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="m">Message</label>
            <textarea id="m" required />
          </div>
          <button className="btn-send" type="submit">
            {sent ? 'sent →' : 'Send message →'}
          </button>
        </form>

        <dl className="aside">
          <dt>Email</dt>
          <dd>
            <a href="mailto:ngkdev93@gmail.com">ngkdev93@gmail.com</a>
          </dd>

          <dt>Phone</dt>
          <dd>+30 698 476 4168</dd>

          <dt>Location</dt>
          <dd>Marathon, Greece · GMT+2</dd>

          <dt>Elsewhere</dt>
          <dd>
            <a
              href="https://www.linkedin.com/in/nikos-gkikas-7b250b1b0"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
          </dd>
          <dd>
            <a href="https://github.com/NikosGkikas13" target="_blank" rel="noreferrer">
              GitHub →
            </a>
          </dd>
          <dd>
            <a href="https://www.instagram.com/nick_klg" target="_blank" rel="noreferrer">
              Instagram →
            </a>
          </dd>
        </dl>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="inner">
        <div>© 2026 Nikos Gkikas · built with care</div>
        <div>
          last updated <span>May 2026</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero />
        <About />
        <Now />
        <Work />
        <Experience />
        <Skills />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
