import { useState } from "react";
import "./Services.css";

const services = [
  {
    id: "docs",
    icon: "📄",
    title: "Document Processing",
    badge: "Most Popular",
    badgeType: "badge-blue",
    color: "#1a5276",
    desc: "Complete official paperwork online from the comfort of your home. Our expert team reviews and processes your documents accurately and securely.",
    features: ["Asylum application forms", "Residence permit renewals", "Family reunification papers", "Travel document requests", "Birth & marriage certificates", "Legal status verification"],
    time: "3–7 business days",
    cost: "Free",
  },
  {
    id: "unhcr",
    icon: "🏛️",
    title: "UNHCR Appointments",
    badge: "Online Booking",
    badgeType: "badge-green",
    color: "#117a65",
    desc: "Book, reschedule, and manage your UNHCR appointments online. Get SMS/email reminders and track your case status in real time.",
    features: ["Initial registration appointments", "Case status tracking", "Appeal appointment scheduling", "Document submission reminders", "Interpreter request", "Follow-up booking"],
    time: "Instant confirmation",
    cost: "Free",
  },
  {
    id: "arabic",
    icon: "📚",
    title: "Arabic Language Courses",
    badge: "Certified",
    badgeType: "badge-gold",
    color: "#7d6608",
    desc: "Learn Arabic from beginner to advanced with certified instructors. Flexible online and in-person sessions designed for busy schedules.",
    features: ["Beginner to advanced levels", "Certified instructors", "Online & in-person classes", "Conversation practice groups", "Cultural integration workshops", "Weekly progress reports"],
    time: "3–6 month programs",
    cost: "Free / Subsidized",
  },
  {
    id: "health",
    icon: "🏥",
    title: "Healthcare & Hospital Referrals",
    badge: "15+ Partners",
    badgeType: "badge-red",
    color: "#922b21",
    desc: "Access our network of partner hospitals and clinics offering special refugee-friendly services, discounted treatments, and priority care.",
    features: ["Emergency medical referrals", "Mental health support", "Maternal & child health", "Chronic disease management", "Dental & eye care", "Pharmacy discounts"],
    time: "24–48 hours",
    cost: "Subsidized / Free",
  },
  {
    id: "legal",
    icon: "⚖️",
    title: "Legal Assistance",
    badge: "Pro Bono",
    badgeType: "badge-blue",
    color: "#1a5276",
    desc: "Get free legal consultations from qualified lawyers specializing in refugee and asylum law. Know your rights and get the protection you deserve.",
    features: ["Asylum case support", "Rights education sessions", "Appeal representation", "Police report assistance", "Detention support", "Family law guidance"],
    time: "Consultation within 48hrs",
    cost: "Free",
  },
  {
    id: "housing",
    icon: "🏠",
    title: "Housing Support",
    badge: "New",
    badgeType: "badge-green",
    color: "#117a65",
    desc: "Find safe, affordable housing through our vetted network of landlords and social housing programs available across Cairo and surrounding areas.",
    features: ["Emergency shelter referrals", "Long-term housing search", "Landlord mediation", "Rent subsidy programs", "Roommate matching", "Safety inspections"],
    time: "1–2 weeks",
    cost: "Free service",
  },
];

const hospitals = [
  { name: "Cairo University Hospital", specialty: "General & Emergency", discount: "50% off", icon: "🏥" },
  { name: "Ain Shams Medical Center", specialty: "Pediatrics & Maternity", discount: "40% off", icon: "👶" },
  { name: "Dar Al Shifa Hospital", specialty: "Surgical & Orthopedic", discount: "35% off", icon: "🔬" },
  { name: "Al Helal Hospital", specialty: "Mental Health & Psychiatry", discount: "60% off", icon: "🧠" },
  { name: "Nasser Medical Institute", specialty: "Oncology & Chronic Disease", discount: "45% off", icon: "💊" },
  { name: "Alexandria Medical City", specialty: "Dental & Ophthalmology", discount: "30% off", icon: "👁️" },
];

export default function Services({ navigate }) {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container page-hero-content">
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.7)" }}>What We Offer</div>
          <h1 className="page-hero-title">Our Services</h1>
          <p className="page-hero-desc">Comprehensive support designed around your needs — from documentation to healthcare, all in one platform.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-detail-card" key={s.id} onClick={() => setSelected(s)}>
                <div className="sdc-header">
                  <div className="sdc-icon" style={{ background: s.color + "18" }}>{s.icon}</div>
                  <div className="sdc-info">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                      <h3>{s.title}</h3>
                      <span className={`badge ${s.badgeType}`}>{s.badge}</span>
                    </div>
                    <p>{s.desc}</p>
                  </div>
                  <div className="sdc-toggle">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <div className="modal-header">
              <div className="modal-icon" style={{ background: selected.color + "18" }}>{selected.icon}</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <h2 className="modal-title">{selected.title}</h2>
                  <span className={`badge ${selected.badgeType}`}>{selected.badge}</span>
                </div>
                <p className="modal-desc">{selected.desc}</p>
              </div>
            </div>
            <div className="modal-meta">
              <div className="sdc-meta-item">
                <span className="meta-label">⏱ Processing Time</span>
                <span className="meta-value">{selected.time}</span>
              </div>
              <div className="sdc-meta-item">
                <span className="meta-label">💰 Cost</span>
                <span className="meta-value">{selected.cost}</span>
              </div>
            </div>
            <h4 className="modal-features-title">What's included:</h4>
            <div className="features-grid">
              {selected.features.map((f, i) => (
                <div className="feature-item" key={i}>
                  <span className="feature-check">✓</span>
                  {f}
                </div>
              ))}
            </div>
            <div className="modal-actions">
              <button className="btn-primary" onClick={() => { closeModal(); navigate("register"); }}>Get Started →</button>
              <button className="btn-outline" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Hospital Partners */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Healthcare Network</div>
            <h2 className="section-title">Our Hospital Partners</h2>
            <div className="divider center"></div>
            <p className="section-subtitle">Partner hospitals offering special discounts and priority access for refugees registered with RefuGuide.</p>
          </div>
          <div className="hospitals-grid">
            {hospitals.map((h, i) => (
              <div className="hospital-card" key={i}>
                <div className="hospital-icon">{h.icon}</div>
                <div className="hospital-info">
                  <h3>{h.name}</h3>
                  <p>{h.specialty}</p>
                </div>
                <div className="hospital-discount">{h.discount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Ready to Access These Services?</h2>
          <div className="divider center"></div>
          <p className="section-subtitle" style={{ margin: "0 auto 32px" }}>Create a free account and get immediate access to all our services.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => navigate("register")}>Create Free Account</button>
            <button className="btn-outline" onClick={() => navigate("contact")}>Ask a Question</button>
          </div>
        </div>
      </section>
    </div>
  );
}
