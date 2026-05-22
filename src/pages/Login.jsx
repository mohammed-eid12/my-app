import { useState } from "react";
import "./Auth.css";

export default function Login({ navigate }) {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate("home"); }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-content">
          <div className="auth-brand" onClick={() => navigate("home")}>
            <span>🕊️</span> RefuGuide
          </div>
          <h2>Welcome back</h2>
          <p>Thousands of people trust RefuGuide to navigate their journey safely and with dignity.</p>
          <div className="auth-features">
            <div className="auth-feature">✓ Secure document processing</div>
            <div className="auth-feature">✓ UNHCR appointment booking</div>
            <div className="auth-feature">✓ Healthcare referrals</div>
            <div className="auth-feature">✓ Arabic language courses</div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-box">
          <h1>Log In</h1>
          <p className="auth-sub">Don't have an account? <button className="auth-link" onClick={() => navigate("register")}>Sign up free</button></p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input required type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div className="form-group">
              <label>
                Password
                <button type="button" className="forgot-link">Forgot password?</button>
              </label>
              <input required type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
            </div>
            <label className="checkbox-label">
              <input type="checkbox" checked={form.remember} onChange={e => setForm({...form, remember: e.target.checked})} />
              <span>Keep me logged in</span>
            </label>
            <button type="submit" className="btn-primary auth-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In →"}
            </button>
          </form>

          <div className="auth-divider"><span>or continue with</span></div>
          <div className="social-btns">
            <button className="social-btn">
              <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.3-.2-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3c-7.6 0-14.2 4.3-17.7 11.7z"/><path fill="#FBBC05" d="M24 45c5.8 0 10.7-1.9 14.3-5.1l-6.6-5.4C29.8 36.1 27 37 24 37c-5.9 0-10.9-3.9-12.7-9.3l-7 5.4C7.9 40.6 15.4 45 24 45z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-1 3-3.2 5.5-6.1 7.1l6.6 5.4C40.7 37.3 45 31.2 45 24c0-1.3-.2-2.7-.5-4z"/></svg>
              Google
            </button>
            <button className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
