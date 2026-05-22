import "./About.css";

const team = [
  { name: "Dr. Layla Hassan", role: "Executive Director", avatar: "LH", bg: "#1a5276" },
  { name: "Omar Khalil", role: "Head of Legal Affairs", avatar: "OK", bg: "#c0392b" },
  { name: "Nadia Farouk", role: "Healthcare Coordinator", avatar: "NF", bg: "#117a65" },
  { name: "Yusuf Ali", role: "Education Director", avatar: "YA", bg: "#6c3483" },
];

const values = [
  { icon: "🤝", title: "Dignity", desc: "Every person deserves to be treated with respect and dignity, regardless of their background or status." },
  { icon: "🛡️", title: "Safety", desc: "We create safe spaces where refugees can access services without fear or discrimination." },
  { icon: "🌍", title: "Inclusivity", desc: "Our services are available in multiple languages and designed for people from all backgrounds." },
  { icon: "💡", title: "Empowerment", desc: "We don't just help — we educate and empower communities to advocate for themselves." },
];

const partners = [
  { name: "UNHCR Egypt", icon: "🏛️" },
  { name: "WHO", icon: "🏥" },
  { name: "UNICEF", icon: "👶" },
  { name: "IOM", icon: "🌐" },
  { name: "Cairo University", icon: "🎓" },
  { name: "Red Crescent", icon: "🌙" },
];

export default function About({ navigate }) {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container page-hero-content">
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.7)" }}>Our Story</div>
          <h1 className="page-hero-title">About RefuGuide</h1>
          <p className="page-hero-desc">Founded in 2019, RefuGuide has been at the forefront of supporting refugee communities across Egypt and the Middle East with essential services, dignity, and hope.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-tag">Our Mission</div>
              <h2 className="section-title">We Believe Every Refugee Deserves a Fair Chance</h2>
              <div className="divider"></div>
              <p style={{ fontSize: "16px", color: "var(--text-light)", lineHeight: "1.9", marginBottom: "20px" }}>
                RefuGuide was born from a simple belief: that navigating life as a refugee should not be an impossible challenge. We saw families drowning in paperwork, missing critical appointments, and unable to access healthcare — and we decided to do something about it.
              </p>
              <p style={{ fontSize: "16px", color: "var(--text-light)", lineHeight: "1.9", marginBottom: "32px" }}>
                Today, we are a dedicated team of social workers, legal experts, doctors, and volunteers united by one mission: to remove barriers and create real opportunities for refugee communities.
              </p>
              <button className="btn-primary" onClick={() => navigate("services")}>See Our Services</button>
            </div>
            <div className="mission-visual">
              <div className="mission-card-1">
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>🕊️</div>
                <h3>Est. 2019</h3>
                <p>Serving the community for 7 years</p>
              </div>
              <div className="mission-card-2">
                <div className="mission-stat">12,000+</div>
                <div>People supported</div>
              </div>
              <div className="mission-card-3">
                <div className="mission-stat">18</div>
                <div>Countries represented</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Our Foundation</div>
            <h2 className="section-title">Values We Stand By</h2>
            <div className="divider center"></div>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div className="card value-card" key={i}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{v.icon}</div>
                <h3 className="card-title">{v.title}</h3>
                <p className="card-text">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Our People</div>
            <h2 className="section-title">Meet the Team</h2>
            <div className="divider center"></div>
            <p className="section-subtitle">A passionate group of professionals dedicated to making a difference.</p>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar" style={{ background: m.bg }}>{m.avatar}</div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Trusted By</div>
            <h2 className="section-title">Our Partners</h2>
            <div className="divider center"></div>
          </div>
          <div className="partners-grid">
            {partners.map((p, i) => (
              <div className="partner-item" key={i}>
                <div className="partner-icon">{p.icon}</div>
                <div className="partner-name">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
