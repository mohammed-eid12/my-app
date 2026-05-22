import { useState } from "react";
import "./Contact.css";

const faqs = [
  { q: "How do I register for services?", a: "Click 'Sign Up' at the top of the page and create a free account. Once registered, you'll have access to all our services from your personal dashboard." },
  { q: "Are the services really free?", a: "Yes, most of our services are completely free. Some specialized services like Arabic courses have subsidized fees. We never turn anyone away for inability to pay." },
  { q: "What languages do you support?", a: "We currently offer support in English, Arabic, French, Somali, Tigrinya, and Amharic. More languages are being added regularly." },
  { q: "How long does document processing take?", a: "Most documents are processed within 3–7 business days. Emergency cases can be expedited — contact us directly for urgent situations." },
  { q: "Can I book a UNHCR appointment through you?", a: "Yes! We help you schedule, prepare for, and follow up on UNHCR appointments. We also provide interpreters if needed." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container page-hero-content">
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.7)" }}>We're Here to Help</div>
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-desc">Have questions? Our team is ready to assist you in multiple languages. Reach out anytime.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="divider"></div>
              <p style={{ color: "var(--text-light)", marginBottom: "32px", lineHeight: "1.8" }}>
                Our multilingual support team is available Monday through Friday. For emergencies, use our 24/7 hotline.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item-icon">📍</div>
                  <div>
                    <div className="contact-item-label">Office Address</div>
                    <div className="contact-item-value">12 Tahrir Square, Floor 3<br />Cairo, Egypt 11511</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div>
                    <div className="contact-item-label">Phone (Mon–Fri 9am–5pm)</div>
                    <div className="contact-item-value">+20 2 1234 5678</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">🚨</div>
                  <div>
                    <div className="contact-item-label">24/7 Emergency Hotline</div>
                    <div className="contact-item-value" style={{ color: "var(--accent)" }}>+20 100 999 8888</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">✉️</div>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-value">info@refuGuide.org</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">🕐</div>
                  <div>
                    <div className="contact-item-label">Office Hours</div>
                    <div className="contact-item-value">Mon–Fri: 9:00am – 5:00pm<br />Saturday: 10:00am – 2:00pm</div>
                  </div>
                </div>
              </div>

              <div className="lang-support">
                <div className="lang-support-title">Languages Supported</div>
                <div className="lang-tags">
                  {["English", "العربية", "Français", "Somali", "Tigrinya", "Amharic"].map(l => (
                    <span className="lang-tag" key={l}>{l}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-box">
              {sent ? (
                <div className="sent-msg">
                  <div style={{ fontSize: "56px", marginBottom: "16px" }}>✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will respond within 24–48 hours.</p>
                  <button className="btn-primary" onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <>
                  <h3>Send Us a Message</h3>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input required type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                      </div>
                      <div className="form-group">
                        <label>Email Address *</label>
                        <input required type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+20 ..." value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                      </div>
                      <div className="form-group">
                        <label>Service Needed</label>
                        <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                          <option value="">Select a service</option>
                          <option>Document Processing</option>
                          <option>UNHCR Appointment</option>
                          <option>Arabic Courses</option>
                          <option>Healthcare Referral</option>
                          <option>Legal Assistance</option>
                          <option>Housing Support</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Your Message *</label>
                      <textarea required rows="5" placeholder="Tell us how we can help you..." value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: "100%" }}>Send Message →</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Common Questions</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="divider center"></div>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
