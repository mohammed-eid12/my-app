import { useState } from "react";
import "./Auth.css";

export default function Register({ navigate }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", nationality: "", password: "", confirm: "", agree: false });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate("home"); }, 1800);
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-content">
          <div className="auth-brand" onClick={() => navigate("home")}>
            <span>🕊️</span> RefuGuide
          </div>
          <h2>Start your journey with us</h2>
          <p>Join over 12,000 refugees who have found support and hope through RefuGuide's free services.</p>
          <div className="auth-features">
            <div className="auth-feature">✓ 100% free to register</div>
            <div className="auth-feature">✓ Your data is kept private & secure</div>
            <div className="auth-feature">✓ Access all services immediately</div>
            <div className="auth-feature">✓ Support in 6+ languages</div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-box">
          <h1>Create Account</h1>
          <p className="auth-sub">Already have an account? <button className="auth-link" onClick={() => navigate("login")}>Log in</button></p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input required type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Nationality *</label>
                <select required value={form.nationality} onChange={e => setForm({...form, nationality: e.target.value})}>
                  <option value="">Select country</option>
                  <option>Syria</option><option>Sudan</option><option>Somalia</option>
                  <option>Ethiopia</option><option>Eritrea</option><option>Yemen</option>
                  <option>Iraq</option><option>Afghanistan</option><option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input required type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+20 ..." value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Password *</label>
                <input required type="password" placeholder="At least 8 characters" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Confirm Password *</label>
                <input required type="password" placeholder="Repeat password" value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} />
              </div>
            </div>
            <label className="checkbox-label">
              <input type="checkbox" required checked={form.agree} onChange={e => setForm({...form, agree: e.target.checked})} />
              <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
            </label>
            <button type="submit" className="btn-primary auth-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Create Free Account →"}
            </button>
          </form>

          <p className="auth-note" style={{ marginTop: "16px" }}>
            🔒 Your personal information is encrypted and never shared with third parties without your consent.
          </p>
        </div>
      </div>
    </div>
  );
}
