import { useState } from 'react'

const categories = [
  { title: 'Bouquets', copy: 'Hand-tied every morning', image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=700&q=85' },
  { title: 'Rose boxes', copy: 'Velvet & keepsake boxes', image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=700&q=85' },
  { title: 'Gajras', copy: 'Fresh motia & rose', image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=700&q=85' },
  { title: 'Gift hampers', copy: 'Flowers with something more', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=700&q=85' },
  { title: 'Event decor', copy: 'Mehndi, Nikah & birthdays', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=85' },
  { title: 'Car decor', copy: 'Barat & bridal cars', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=85' },
]

const products = [
  { tag: 'Master florist series', title: 'Badshahi red rose velvet box', copy: '36 hand-selected stems in an imperial keepsake casing.', price: 'PKR 14,500', oldPrice: 'PKR 16,000', image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=85' },
  { tag: 'Morning bloom', title: 'Gulberg lily & sunflower urn', copy: 'A bright, generous arrangement for their favourite room.', price: 'PKR 11,200', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85' },
  { tag: 'Fragrant motia', title: 'Shalimar jasmine & tuberose vase', copy: 'Lahore\'s legendary fragrance, crafted for evening gatherings.', price: 'PKR 9,800', image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85' },
  { tag: 'Bespoke keepsake', title: 'Royal nikkah celebration hamper', copy: 'Fresh blooms, attar and a hand-finished bridal keepsake chest.', price: 'PKR 18,500', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85' },
]

const occasions = [
  { title: 'Anniversaries', copy: 'Crimson roses & velvets', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=850&q=85' },
  { title: 'Weddings & mehndi', copy: 'Fresh gajras & marigolds', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=850&q=85' },
  { title: 'Hajj & blessings', copy: 'Pure lilies & white orchids', image: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=850&q=85' },
  { title: 'Gift combos', copy: 'Blooms & fine confections', image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=850&q=85' },
]

const portfolio = [
  { tag: 'Grand barat stage', title: 'DHA floral pavilion', copy: 'Hanging blooms, candlelight and a little bit of theatre.', image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1100&q=85' },
  { tag: 'Mehndi rituals', title: 'Model Town garden mehndi', copy: 'Marigold swings and fragrant motia wristbands for guests.', image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1100&q=85' },
  { tag: 'VIP gifting', title: 'Gulberg anniversary suite', copy: 'Hand-tied roses delivered with golden silk ribbon.', image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1100&q=85' },
]

const faqs = [
  'Do you deliver flowers the same day in Lahore?',
  'Which areas of Lahore do you deliver to?',
  'Can I pay cash on delivery?',
  'Do you offer midnight surprise delivery?',
  'Can I send flowers to my family from abroad?',
  'Do you make gajras for Mehndi and weddings?',
]

function Arrow({ diagonal = false }) {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden="true">
      {diagonal ? <path d="M4.25 15.75 15.5 4.5M6 4.5h9.5V14" /> : <path d="M3 10h13M10.5 4.5 16 10l-5.5 5.5" />}
    </svg>
  )
}

function Sparkle() {
  return <svg className="sparkle" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 1.5 1.7 7.1L21 12l-7.3 1.4L12 21l-1.7-7.6L3 12l7.3-3.4L12 1.5Z" /></svg>
}

function FlowerMark() {
  return <svg className="flower-mark" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 20c-7.1-1.2-10.8-4.5-10.2-8.6.5-3.4 4.2-4.6 7.1-2.7 2.2 1.5 3.1 4.1 3.1 7.2 0-6.3 1.1-10.3 4.3-11.9 3-1.5 5.8.8 5.4 4.1-.5 3.9-4.2 6.8-8.6 7.8 5.5-2.9 9.3-2.2 11.2.9 1.4 2.5-.2 5.5-3.1 5.8-3.4.4-6.7-2.1-8.6-5.9 3.8 4.8 3.9 8.6 1.1 10.8-2.3 1.8-5.6.5-6.3-2.5-.8-3.5 1.6-6.8 5.3-8.8-4.7 4.1-8.4 4.3-10.6 1.5-1.9-2.4-.6-5.6 2.4-6.4 3.4-1 6.9 1.1 9 4.7Z" /><path d="M20 19.5c-1 5-1 9.2-.1 13.1M15.4 32.8c3.5-1.2 6.7-1.1 9.7.1" /></svg>
}

function SectionTitle({ eyebrow, number, title, children }) {
  return <div className="section-title"><p className="eyebrow"><span>{number}</span><i />{eyebrow}</p><h2 dangerouslySetInnerHTML={{ __html: title }} />{children}</div>
}

function ProductCard({ product }) {
  return <article className="product-card">
    <div className="product-image"><img src={product.image} alt={product.title} loading="lazy" /><span className="product-tag">{product.tag}</span><button className="quick-add" type="button">Quick add <span>+</span></button></div>
    <div className="product-info"><p className="delivery-note"><span /> Delivers today</p><h3>{product.title}</h3><p className="product-copy">{product.copy}</p><div className="product-footer"><span>{product.oldPrice && <del>{product.oldPrice}</del>} {product.price}</span><a href="#consultation" aria-label={`Order ${product.title}`}>Order <Arrow diagonal /></a></div></div>
  </article>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <div className="announcement"><span>Same-day flower delivery across Lahore</span><b>Order by 6 PM for same-day delivery</b><a href="#consultation">Track order <Arrow diagonal /></a></div>
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu}><FlowerMark /><span><strong>Gulposh</strong><small>Flowers · Gajray · Decor</small></span></a>
      <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span /><span /></button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
        <a href="#top" onClick={closeMenu}>Home</a><a href="#flowers" onClick={closeMenu}>Flowers <small>⌄</small></a><a href="#decor" onClick={closeMenu}>Weddings &amp; events</a><a href="#builder" onClick={closeMenu}>Build your own</a><a href="#occasions" onClick={closeMenu}>Gift combos</a>
      </nav>
      <div className="header-actions"><a href="#work" aria-label="Wishlist">♡</a><a href="#consultation" aria-label="Shopping bag">♧</a><a className="header-button" href="#builder">Design a bouquet <Arrow diagonal /></a></div>
    </header>

    <main id="top">
      <section className="hero section-pad">
        <div className="hero-content"><p className="eyebrow"><span>01</span><i /> Bespoke floral decorators &amp; atelier</p><h1>Celebrate Lahori events in <em>golden splendour.</em></h1><p className="hero-copy">Premium flower bouquets, bespoke event decorations and luxury gifts — hand-delivered across Lahore with punctuality and royal presentation.</p><div className="hero-actions"><a className="button button-dark" href="#flowers">Explore floral gifts <Arrow diagonal /></a><a className="button button-outline" href="#consultation">Book event decor <Arrow /></a></div><div className="hero-stats"><div><b>6 PM</b><span>Same-day cutoff</span></div><div><b>Pattoki</b><span>Farm direct</span></div><div><b>100%</b><span>Expat verified</span></div></div></div>
        <div className="hero-visual"><div className="hero-frame"><img src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1100&q=90" alt="A lavish arrangement of red roses" /></div><div className="hero-orbit" /><div className="hero-caption"><span>Master florist series</span><b>Badshahi red rose<br />velvet box</b><strong>PKR 14,500 <Arrow diagonal /></strong></div><span className="vertical-note">Gulposh · Since 2018</span></div>
      </section>

      <section className="trust-strip"><span>Fresh from Pattoki</span><Sparkle /><span>Hand-arranged every morning</span><Sparkle /><span>Delivery across Lahore</span><Sparkle /><span>Fresh from Pattoki</span><Sparkle /></section>

      <section className="section-pad intro-block" id="flowers"><div className="intro-label"><span>Flowers, gifts &amp; décor</span><i /></div><SectionTitle eyebrow="Shop by category" number="02" title="A little luxury for <em>every occasion.</em>"><p>From a single stem to the full floral story of your day, every order is chosen, styled and finished by hand.</p></SectionTitle><div className="category-grid">{categories.map((category) => <a className="category-card" href="#consultation" key={category.title}><img src={category.image} alt={category.title} loading="lazy" /><span><small>{category.copy}</small><b>{category.title}</b><Arrow diagonal /></span></a>)}</div></section>

      <section className="products-section section-pad"><SectionTitle eyebrow="Hand-arranged every morning" number="03" title="Fresh bouquets &amp; <em>gift sets.</em>"><div className="filter-tabs"><button className="active" type="button">New arrivals</button><button type="button">Best sellers</button></div></SectionTitle><div className="product-grid">{products.map((product) => <ProductCard product={product} key={product.title} />)}</div></section>

      <section className="builder section-pad" id="builder"><div className="builder-copy"><p className="eyebrow"><span>04</span><i /> Online studio</p><h2>Build your own <em>bouquet.</em></h2><p>Custom-build a floral masterpiece directly from your screen. Fast, easy and personalised with fresh morning blooms cut directly in Pattoki.</p><ol><li><b>01</b><span>Pick your preferred vessel: hatbox, rustic jute or crystal vase</span></li><li><b>02</b><span>Tap premium stems: roses, motia, lilies &amp; foliage</span></li><li><b>03</b><span>Add custom ribbon calligraphy with your heartfelt note</span></li></ol><a className="button button-dark" href="#consultation">Launch full creator studio <Arrow diagonal /></a></div><div className="builder-preview"><span className="preview-label">Interactive studio simulator</span><div className="preview-card"><img src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=85" alt="Roses arranged in a velvet hatbox" /><div className="preview-price"><small>Live subtotal</small><b>PKR 8,450</b></div></div><div className="preview-controls"><span>16 stems selected</span><span>Velvet hatbox</span><span>Add stems&nbsp; +</span></div></div></section>

      <section className="occasions section-pad" id="occasions"><SectionTitle eyebrow="Curated by Lahori celebrations" number="05" title="Shop by <em>occasion.</em>" /><div className="occasion-grid">{occasions.map((occasion) => <a className="occasion-card" href="#consultation" key={occasion.title}><img src={occasion.image} alt={occasion.title} loading="lazy" /><span><small>{occasion.copy}</small><b>{occasion.title}</b><Arrow diagonal /></span></a>)}</div></section>

      <section className="values section-pad"><div className="values-heading"><p className="eyebrow"><span>06</span><i /> The Gulposh standard</p><h2>Freshness, <em>with feeling.</em></h2></div><div className="value-list"><article><span>01</span><h3>100% fresh from Pattoki</h3><p>Harvested at dawn from Punjab growers, bypassing middlemen for longer bloom life.</p></article><article><span>02</span><h3>Expert in-house floristry</h3><p>Every arrangement is tied by trained florists with years of experience in bridal stages.</p></article><article><span>03</span><h3>Trusted by overseas families</h3><p>Send a gift to Lahore from abroad, pay by bank transfer and get a photo before delivery.</p></article></div></section>

      <section className="portfolio section-pad" id="work"><SectionTitle eyebrow="Our portfolio" number="07" title="Follow our decor journeys <em>in Lahore.</em>"><p>Real celebrations across Gulberg, DHA, Model Town and Cantt — made memorable with flowers.</p></SectionTitle><div className="portfolio-grid">{portfolio.map((item) => <a className="portfolio-card" href="#consultation" key={item.title}><img src={item.image} alt={item.title} loading="lazy" /><span><small>{item.tag}</small><b>{item.title}</b><em>{item.copy}</em><Arrow diagonal /></span></a>)}</div></section>

      <section className="faq section-pad"><div className="faq-heading"><p className="eyebrow"><span>08</span><i /> Good to know</p><h2>Questions, <em>answered.</em></h2></div><div className="faq-list">{faqs.map((question, index) => <div className={`faq-item ${activeFaq === index ? 'open' : ''}`} key={question}><button type="button" onClick={() => setActiveFaq(activeFaq === index ? null : index)}><span>{question}</span><b>{activeFaq === index ? '−' : '+'}</b></button>{activeFaq === index && <p>Absolutely. Our studio team will guide you from first stem to final delivery and make sure every detail feels considered.</p>}</div>)}</div></section>

      <section className="consultation section-pad" id="consultation"><div><p className="eyebrow"><span>09</span><i /> Let&apos;s make it memorable</p><h2>Have a celebration <em>in mind?</em></h2><p>Tell us what you are dreaming up. Our senior florists will get back to you within two working days.</p></div>{submitted ? <div className="success-message"><Sparkle /><h3>Thank you, lovely.</h3><p>Your note is on its way. We&apos;ll be in touch soon.</p></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><label>Your name<input required placeholder="e.g. Sarah Khan" /></label><label>Email address<input type="email" required placeholder="you@example.com" /></label><label>What are we creating?<select defaultValue="" required><option value="" disabled>Select a service</option><option>Flower delivery</option><option>Event decoration</option><option>Wedding car decoration</option><option>Bespoke gifting</option></select></label><button className="button button-dark" type="submit">Start a conversation <Arrow diagonal /></button></form>}</section>
    </main>

    <footer className="site-footer"><div className="footer-top"><a className="brand" href="#top"><FlowerMark /><span><strong>Gulposh</strong><small>Flowers · Gajray · Decor</small></span></a><p>Fresh flower bouquets, gajray and event decoration delivered across Lahore — same day, at the time you choose.</p><div className="footer-contact"><b>Lahore</b><span>Mo–Su · 9 AM – 11 PM</span></div></div><div className="footer-columns"><div><h4>Shop</h4><a href="#flowers">All flowers</a><a href="#flowers">Bouquets</a><a href="#occasions">Gift combos</a><a href="#builder">Build your own bouquet</a></div><div><h4>Event services</h4><a href="#decor">All décor services</a><a href="#consultation">Birthday decoration</a><a href="#consultation">Mehndi &amp; Mayun</a><a href="#consultation">Wedding car decoration</a></div><div><h4>Client care</h4><a href="#consultation">Track your order</a><a href="#consultation">Delivery areas</a><a href="#consultation">FAQs</a><a href="#consultation">Contact</a></div><div className="footer-note"><Sparkle /><p>Flowers for the beautifully lived.</p></div></div><div className="footer-bottom"><span>© 2026 Gulposh · گل پوش</span><span>Cash on delivery · Bank transfer · JazzCash · EasyPaisa</span><span>Privacy · Terms · Refunds</span></div></footer>
  </div>
}

export default App
