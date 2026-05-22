import { useState } from "react";
import "./Donate.css";

const causes = [
  { id: "docs", icon: "📄", title: "Document Processing", desc: "Help refugees complete vital paperwork — asylum forms, residence permits, and legal documents.", goal: 15000, raised: 9800 },
  { id: "health", icon: "🏥", title: "Healthcare Access", desc: "Fund medical referrals and subsidized treatments for refugees and their families.", goal: 25000, raised: 18400 },
  { id: "edu", icon: "📚", title: "Language Education", desc: "Support free Arabic language courses with certified instructors for refugee communities.", goal: 10000, raised: 6200 },
  { id: "unhcr", icon: "🏛️", title: "UNHCR Support", desc: "Help cover UNHCR appointment fees and administrative costs for new arrivals.", goal: 8000, raised: 5100 },
];

const amounts = [10, 25, 50, 100, 250];

export default function Donate({ navigate }) {
  const [selected, setSelected] = useState(causes[0].id);
  const [amount, setAmount] = useState(25);
  const [custom, setCustom] = useState("");
  const [step, setStep] = useState("form");

  const finalAmount = custom ? Number(custom) : amount;
  const cause = causes.find(c => c.id === selected);

  const handleDonate = (e) => {
    e.preventDefault();
    setStep("success");
  };

  if (step === "success") {
    return (
      <div className="donate-page">
        <div className="donate-success">
          <div className="success-icon">💙</div>
          <h2>Thank You for Your Support!</h2>
          <p>Your donation of <strong>${finalAmount}</strong> to <strong>{cause.title}</strong> will make a real difference in the lives of refugees.</p>
          <div className="success-actions">
            <button className="btn-primary" onClick={() => { setStep("form"); setCustom(""); setAmount(25); }}>Donate Again</button>
            <button className="btn-outline" onClick={() => navigate("home")}>Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="donate-page">
      {/* Hero */}
      <section className="donate-hero">
        <div className="donate-hero-bg"></div>
        <div className="container donate-hero-content">
          <div className="section-tag" style={{ color: "rgba(255,255,255,0.75)" }}>Make a Difference</div>
          <h1 className="donate-hero-title">Support Refugees Today</h1>
          <p className="donate-hero-desc">Your generosity directly funds vital services for refugees in Egypt — from legal documents to healthcare and education.</p>
        </div>
      </section>

      {/* Main */}
      <section className="section donate-main-section">
        <div className="container donate-layout">

          {/* Left — causes */}
          <div className="donate-causes">
            <h3 className="donate-causes-title">Choose a Cause</h3>
            {causes.map(c => {
              const pct = Math.round((c.raised / c.goal) * 100);
              return (
                <div
                  key={c.id}
                  className={`cause-card ${selected === c.id ? "active" : ""}`}
                  onClick={() => setSelected(c.id)}
                >
                  <div className="cause-icon">{c.icon}</div>
                  <div className="cause-info">
                    <div className="cause-name">{c.title}</div>
                    <div className="cause-desc">{c.desc}</div>
                    <div className="cause-progress-wrap">
                      <div className="cause-progress-bar">
                        <div className="cause-progress-fill" style={{ width: `${pct}%` }}></div>
                      </div>
                      <div className="cause-progress-labels">
                        <span className="cause-raised">${c.raised.toLocaleString()} raised</span>
                        <span className="cause-goal">Goal: ${c.goal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — form */}
          <div className="donate-form-box">
            <h3 className="donate-form-title">Your Donation</h3>
            <p className="donate-form-sub">Supporting: <strong>{cause.title}</strong></p>

            <form onSubmit={handleDonate}>
              <div className="amount-grid">
                {amounts.map(a => (
                  <button
                    type="button"
                    key={a}
                    className={`amount-btn ${amount === a && !custom ? "active" : ""}`}
                    onClick={() => { setAmount(a); setCustom(""); }}
                  >
                    ${a}
                  </button>
                ))}
              </div>

              <div className="custom-amount">
                <span className="custom-prefix">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Custom amount"
                  value={custom}
                  onChange={e => setCustom(e.target.value)}
                />
              </div>

              <div className="donate-divider-line"></div>

              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="•••• •••• •••• ••••" maxLength={19} required />
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <label>Expiry</label>
                  <input type="text" placeholder="MM / YY" maxLength={7} required />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="•••" maxLength={3} required />
                </div>
              </div>

              <button type="submit" className="btn-primary donate-submit">
                Donate ${finalAmount || "—"} →
              </button>
            </form>

            <p className="donate-secure">🔒 Secure & encrypted payment. 100% goes to refugees.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
