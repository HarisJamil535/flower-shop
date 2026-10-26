import { useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Signature bouquets',
    description: 'Thoughtful, hand-tied arrangements made for the people and moments that matter most.',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '02',
    title: 'Event florals',
    description: 'From intimate dinners to grand celebrations, we turn your vision into an atmosphere.',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '03',
    title: 'Car decorations',
    description: 'A beautiful beginning to a beautiful journey, styled with flowers that feel uniquely yours.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85',
  },
]

const gallery = [
  {
    label: 'The Pearl arrangement',
    category: 'Bouquets',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85',
  },
  {
    label: 'Golden hour table',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=85',
  },
  {
    label: 'Just married',
    category: 'Car styling',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=900&q=85',
  },
  {
    label: 'Softly wild',
    category: 'Bouquets',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85',
  },
]

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4.25 15.75 15.5 4.5M6 4.5h9.5V14" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M10.5 4.5 16 10l-5.5 5.5" />
    </svg>
  )
}

function Sparkle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 1.5 1.7 7.1L21 12l-7.3 1.4L12 21l-1.7-7.6L3 12l7.3-3.4L12 1.5Z" />
    </svg>
  )
}

function FlowerMark() {
  return (
    <svg className="flower-mark" viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 20c-7.1-1.2-10.8-4.5-10.2-8.6.5-3.4 4.2-4.6 7.1-2.7 2.2 1.5 3.1 4.1 3.1 7.2 0-6.3 1.1-10.3 4.3-11.9 3-1.5 5.8.8 5.4 4.1-.5 3.9-4.2 6.8-8.6 7.8 5.5-2.9 9.3-2.2 11.2.9 1.4 2.5-.2 5.5-3.1 5.8-3.4.4-6.7-2.1-8.6-5.9 3.8 4.8 3.9 8.6 1.1 10.8-2.3 1.8-5.6.5-6.3-2.5-.8-3.5 1.6-6.8 5.3-8.8-4.7 4.1-8.4 4.3-10.6 1.5-1.9-2.4-.6-5.6 2.4-6.4 3.4-1 6.9 1.1 9 4.7Z" />
      <path d="M20 19.5c-1 5-1 9.2-.1 13.1M15.4 32.8c3.5-1.2 6.7-1.1 9.7.1" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Fleur and Co. home">
          <FlowerMark />
          <span className="brand-name">Fleur <i>&amp;</i> Co.</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#work" onClick={closeMenu}>Our work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="header-cta" href="#contact">Plan your moment <ArrowUpRight /></a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Floral design studio · Est. 2018</p>
            <h1>Flowers that make <em>moments</em> linger.</h1>
            <p className="hero-intro">Intentional florals for the beautifully lived. We create bouquets, celebrations and little details that stay with you.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contact">Start a conversation <ArrowUpRight /></a>
              <a className="text-link" href="#work">Explore our work <ArrowRight /></a>
            </div>
            <div className="hero-note">
              <span className="note-stars"><Sparkle /><Sparkle /></span>
              <span>Flowers for the<br />beautifully lived.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="A lush cream and blush flower arrangement">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="hero-image-wrap">
              <img src="https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=1100&q=90" alt="Cream and blush flowers in a sculptural vase" />
            </div>
            <div className="art-label label-top">Seasonal<br /><strong>blooms</strong></div>
            <div className="art-label label-bottom"><span>01</span> / 03</div>
            <Sparkle className="hero-sparkle" />
          </div>
        </section>

        <section className="marquee" aria-label="Fleur and Co. services">
          <div className="marquee-track">
            <span>Flowers with feeling</span><Sparkle /><span>Made by hand</span><Sparkle /><span>For your forever moments</span><Sparkle /><span>Flowers with feeling</span><Sparkle /><span>Made by hand</span><Sparkle />
          </div>
        </section>

        <section className="story section-pad" id="story">
          <div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>Our philosophy</span></div>
          <div className="story-grid">
            <h2>Not just flowers.<br /><em>A feeling.</em></h2>
            <div className="story-copy">
              <p className="large-copy">We believe flowers should feel like you — a little unexpected, deeply considered and impossible to forget.</p>
              <p>Fleur &amp; Co. is an independent floral studio creating expressive arrangements for life&apos;s most meaningful occasions. Every stem is chosen with intention, every detail finished by hand.</p>
              <a className="text-link" href="#services">Discover our approach <ArrowRight /></a>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>What we do</span></div>
            <h2>Made for your<br /><em>kind of beautiful.</em></h2>
            <p>Whether it&apos;s one unforgettable bouquet or the full floral story of your day, we&apos;re here to make it feel effortless.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-image-wrap"><img src={service.image} alt={service.title} loading="lazy" /><span className="service-number">{service.number}</span></div>
                <div className="service-details">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <ArrowUpRight /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="statement">
          <div className="statement-inner">
            <Sparkle className="statement-sparkle" />
            <p className="eyebrow">The Fleur &amp; Co. difference</p>
            <h2>“The details are not the details.<br /><em>They make the design.</em>”</h2>
            <p className="statement-credit">— Charles Eames</p>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading work-heading">
            <div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>Selected work</span></div>
            <div className="work-title-row"><h2>A little <em>inspiration.</em></h2><a className="text-link" href="#contact">View all work <ArrowRight /></a></div>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <a className={`gallery-card gallery-${index + 1}`} href="#contact" key={item.label}>
                <img src={item.image} alt={item.label} loading="lazy" />
                <span className="gallery-overlay"><span><small>{item.category}</small>{item.label}</span><ArrowUpRight /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-intro">
            <div className="section-kicker"><span>05</span><span className="kicker-rule" /><span>Let&apos;s make something lovely</span></div>
            <h2>Have a moment<br />in <em>mind?</em></h2>
            <p>Tell us a little about what you&apos;re dreaming up. We&apos;ll get back to you within two working days.</p>
            <div className="contact-details"><span>Based in Lahore</span><span>Working beautifully, everywhere</span></div>
          </div>
          <form className="inquiry-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="form-success"><Sparkle /><h3>Thank you, lovely.</h3><p>Your note is on its way. We&apos;ll be in touch very soon.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another note <ArrowRight /></button></div>
            ) : (
              <>
                <label>Your name <input type="text" name="name" placeholder="e.g. Sarah Khan" required /></label>
                <label>Email address <input type="email" name="email" placeholder="you@example.com" required /></label>
                <label>What are we creating? <select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Signature bouquet</option><option>Event florals</option><option>Car decorations</option><option>Something bespoke</option></select></label>
                <label>Tell us more <textarea name="message" placeholder="Date, occasion, your floral daydream..." rows="3" required /></label>
                <button className="button button-gold submit-button" type="submit">Send inquiry <ArrowUpRight /></button>
              </>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><FlowerMark /><span className="brand-name">Fleur <i>&amp;</i> Co.</span></a>
        <p>Flowers with feeling.</p>
        <div className="footer-links"><a href="#story">Instagram</a><a href="#contact">Email us</a><span>© {new Date().getFullYear()} Fleur &amp; Co.</span></div>
      </footer>
    </div>
  )
}

export default App
