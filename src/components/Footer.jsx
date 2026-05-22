import "./Footer.css";

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🕊️</span>
              <span className="footer-logo-text">RefuGuide</span>
            </div>
            <p className="footer-desc">
              Supporting refugees with essential services, documentation, healthcare access, and education. Your journey forward starts here.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link">🌐</a>
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📸</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => navigate("home")}>Home</button></li>
              <li><button onClick={() => navigate("about")}>About Us</button></li>
              <li><button onClick={() => navigate("services")}>Our Services</button></li>
              <li><button onClick={() => navigate("contact")}>Contact Us</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><button onClick={() => navigate("services")}>Document Processing</button></li>
              <li><button onClick={() => navigate("services")}>UNHCR Appointments</button></li>
              <li><button onClick={() => navigate("services")}>Arabic Courses</button></li>
              <li><button onClick={() => navigate("services")}>Hospital Referrals</button></li>
              <li><button onClick={() => navigate("services")}>Legal Assistance</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li><span>📍</span> Cairo, Egypt</li>
              <li><span>📞</span> +20 2 1234 5678</li>
              <li><span>✉️</span> info@refuGuide.org</li>
              <li><span>🕐</span> Mon–Fri, 9am–5pm</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 RefuGuide. All rights reserved. Built with care for refugees worldwide.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
