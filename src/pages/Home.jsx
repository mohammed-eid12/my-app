import "./Home.css";

const stats = [
  { number: "139,000+", label: "Syrian Refugees in Egypt" },
  { number: "40,800+", label: "Eritrean Refugees in Egypt" },
  { number: "672,000+", label: "Sudanese Refugees in Egypt" },
];

const services = [
  { icon: "📄", title: "Document Processing", desc: "Complete your official paperwork online — registration, renewals, and legal forms done quickly and securely.", color: "#e8f4fd" },
  { icon: "🏛️", title: "UNHCR Appointments", desc: "Book and manage your UNHCR appointments online. Get reminders and track your application status in real time.", color: "#dbeafe" },
  { icon: "📚", title: "Arabic Language Courses", desc: "Free and affordable Arabic courses for those learning the language, with certified instructors and flexible schedules.", color: "#eff6ff" },
  { icon: "🏥", title: "Healthcare Referrals", desc: "Access our network of partner hospitals offering special services and discounted healthcare packages for refugees.", color: "#e0f2fe" },
];

const testimonials = [
  { name: "Amira K.", country: "Syria", text: "RefuGuide helped me complete my UNHCR registration in just two days. I was so lost before — now I feel supported.", avatar: "AK" },
  { name: "Hassan M.", country: "Sudan", text: "The Arabic courses changed my life. I can now communicate with my doctors and neighbors much better.", avatar: "HM" },
  { name: "Fatima L.", country: "Somalia", text: "The hospital partnership program helped my daughter get treatment she urgently needed at a price we could afford.", avatar: "FL" },
];

export default function Home({ navigate }) {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container hero-content">
          <button className="hero-donate-btn" onClick={() => navigate("donate")}>
            💙 Support & Donate to Refugees
          </button>
          <h1 className="hero-title">
            Your New Beginning<br />
            <span className="hero-title-accent">Starts Here</span>
          </h1>
          <p className="hero-desc">
            RefuGuide provides refugees with free access to document processing, UNHCR appointment booking, Arabic language education, and hospital partnerships — all in one place.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate("services")}>Explore Our Services</button>
            <button className="btn-hero-outline" onClick={() => navigate("register")}>Create Free Account</button>
          </div>
          <div className="hero-langs">
            <span>Available in:</span>
            <span className="lang-pill">English</span>
            <span className="lang-pill">العربية</span>
            <span className="lang-pill">Spanish</span>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">What We Offer</div>
            <h2 className="section-title">Services Built for You</h2>
            <div className="divider center"></div>
            <p className="section-subtitle">From paperwork to healthcare — we handle the complexity so you can focus on building your new life.</p>
          </div>
          <div className="grid-3">
            {services.map((s, i) => (
              <div className="card service-card" key={i} style={{ "--card-bg": s.color }}>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-text">{s.desc}</p>
                <button className="service-link" onClick={() => navigate("services")}>Learn more →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-alt how-section">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Simple Process</div>
            <h2 className="section-title">How It Works</h2>
            <div className="divider center"></div>
            <p className="section-subtitle">Getting help has never been easier. Follow these simple steps.</p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Create an Account</h3>
                <p>Register for free with your basic information. We protect your data with top-level security.</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Choose a Service</h3>
                <p>Select from our range of services — documents, appointments, courses, or medical help.</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Submit & Track</h3>
                <p>Upload your information online and track everything from your personal dashboard.</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Get Support</h3>
                <p>Our team follows up and provides assistance every step of the way until resolved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Real Stories</div>
            <h2 className="section-title">Lives We've Touched</h2>
            <div className="divider center"></div>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.avatar}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-country">🌍 {t.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Join thousands of refugees who have found support, guidance, and hope through RefuGuide.</p>
              <div className="cta-actions">
                <button className="btn-primary" onClick={() => navigate("register")}>Create Free Account</button>
                <button className="btn-outline" onClick={() => navigate("contact")}>Contact Us</button>
              </div>
            </div>
            <div className="cta-deco">🕊️</div>
          </div>
        </div>
      </section>
    </div>
  );
}
