import { useEffect } from "react";
import "../App.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <section className="about-hero">
        <h1>About SAKAMA</h1>
        <p className="about-subtitle">
          A fully owned Ghanaian Company registered under the Laws of Ghana in
          the Oil and Gas arena
        </p>
      </section>

      <section className="about-content">
        <div className="about-card reveal">
          <h2>Who We Are</h2>
          <p>
            SAKAMA PETROLEUM, GAS LOGISTICS & TRADING LIMITED (SAKAMA) is a
            fully owned Ghanaian Company and registered under the Laws of Ghana
            in the Oil and Gas arena. We are a Partner of TOTALENERGIES in the
            area of Retail Network/Fuel stations development, a Dealer of
            TotalEnergies at Tarkwa and Simpa outlets in the Western region of
            Ghana.
          </p>
        </div>

        <div className="about-card reveal" style={{ animationDelay: "0.1s" }}>
          <h2>Our Services</h2>
          <ul className="services-list">
            <li>
              <strong>Retail Network Development:</strong> Partner of
              TOTALENERGIES in fuel stations development
            </li>
            <li>
              <strong>Fuel Distribution:</strong> Dealer of TotalEnergies at
              Tarkwa  and Simpa outlets in the Western region
            </li>
            <li>
              <strong>End-to-End Lubricants Supply:</strong> Comprehensive
              lubricants supply to the Tarkwa Municipality, especially for Small
              and Medium scale Miners
            </li>
            <li>
              <strong>Fuel Transportation:</strong> Reliable fuel transport
              services
            </li>
            <li>
              <strong>Vehicle Lubrication Servicing:</strong> Professional
              vehicle servicing with genuine Toyota parts
            </li>
            <li>
              <strong>General Trading:</strong> Comprehensive trading solutions
            </li>
          </ul>
        </div>

        <div className="about-card reveal" style={{ animationDelay: "0.2s" }}>
          <h2>Our Commitment</h2>
          <p>
            SAKAMA, over the years, has matured into adopting continuous
            improvement methods to excite customers. We are looking forward to
            growing together with your needs in mind. With an annual average
            turnover of over One Billion (GH₵) Cedis, we are well positioned to
            handling your concerns/needs with a smile.
          </p>
        </div>

        <div className="about-card reveal" style={{ animationDelay: "0.3s" }}>
          <h2>Leadership</h2>
          
          <div className="ceo-section">
            <div className="ceo-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Seidu Mohammed Salami - CEO"
                className="ceo-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x300/1a202c/8a97b1?text=CEO";
                }}
              />
            </div>
            <div className="ceo-info">
              <h3>Seidu Mohammed Salami</h3>
              <p className="ceo-title">Chief Executive Officer</p>
              <p className="ceo-bio">
                Seidu Mohammed Salami leads SAKAMA with a vision of excellence and
                commitment to serving Ghana's energy needs. Under his leadership,
                SAKAMA has grown into a trusted partner of TOTALENERGIES and a
                leading provider of fuel solutions, logistics, and trading services
                in the Western region of Ghana. His dedication to continuous
                improvement and customer satisfaction has positioned SAKAMA as a
                company with an annual turnover exceeding One Billion Ghana Cedis.
              </p>
            </div>
          </div>
        </div>

        <div className="about-card reveal" style={{ animationDelay: "0.4s" }}>
          <h2>Key Leadership Team</h2>
          <div className="leadership-grid">
            {/* This section can be populated when additional key leaders are available */}
            <div className="leadership-placeholder">
              <p>
                Our leadership team consists of experienced professionals dedicated
                to driving SAKAMA's mission forward. Additional key leadership
                profiles will be added as the company continues to grow and expand
                its operations.
              </p>
            </div>
            {/* Example structure for future leaders - uncomment and fill when available */}
            {/* 
            <div className="leader-card">
              <div className="leader-image-wrapper">
                <img src="/path/to/leader-image.jpg" alt="Leader Name" />
              </div>
              <div className="leader-info">
                <h4>Leader Name</h4>
                <p className="leader-title">Position Title</p>
                <p className="leader-bio">Brief biography...</p>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

