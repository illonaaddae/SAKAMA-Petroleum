import { useEffect } from "react";
import { Link } from "react-router-dom";
import fuelStationImage from "../assets/Fuel-station.jpg";
import cleanFuelingImage from "../assets/Clean-fueling.jpg";
import fuelDistributionImage from "../assets/Fuel-distribution.jpg";
import ceoImage from "../assets/Mr.Seidu Mohammed.webp";
import "../App.css";

// Icons for values section
const ValueIcons = {
  quality: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 4L28.9 17.8H43.4L31.2 26.2L36.2 40L24 31.6L11.8 40L16.8 26.2L4.6 17.8H19.1L24 4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  trust: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 44C24 44 40 36 40 24V10L24 4L8 10V24C8 36 24 44 24 44Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 24L22 30L32 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  customer: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M8 42C8 33.2 15.2 26 24 26C32.8 26 40 33.2 40 42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  innovation: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 4V8M24 40V44M44 24H40M8 24H4M38.4 9.6L35.6 12.4M12.4 35.6L9.6 38.4M38.4 38.4L35.6 35.6M12.4 12.4L9.6 9.6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 40L18 28L26 34L40 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 16H40V24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  partnership: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 28L8 20L16 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 12L40 20L32 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 20H28C34.6 20 40 25.4 40 32V36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const values = [
  {
    icon: "quality",
    title: "Quality First",
    description:
      "We maintain the highest standards in fuel quality, ensuring every product meets TotalEnergies specifications.",
  },
  {
    icon: "trust",
    title: "Reliability",
    description:
      "Count on us for consistent, dependable service. We deliver on our promises, every time.",
  },
  {
    icon: "customer",
    title: "Customer Focus",
    description:
      "Your satisfaction drives everything we do. We listen, adapt, and exceed expectations.",
  },
  {
    icon: "innovation",
    title: "Continuous Improvement",
    description:
      "We constantly evolve our methods to serve you better and stay ahead of industry trends.",
  },
  {
    icon: "growth",
    title: "Sustainable Growth",
    description:
      "Building for the future while delivering value today. Our growth benefits all stakeholders.",
  },
  {
    icon: "partnership",
    title: "Strong Partnerships",
    description:
      "Our alliance with TotalEnergies Ghana exemplifies our commitment to world-class partnerships.",
  },
];

const milestones = [
  {
    year: "2010",
    title: "Tarkwa Station Launch",
    description:
      "Partnered with TotalEnergies Ghana and opened our first fuel station in Tarkwa, Western Region.",
  },
  {
    year: "2021",
    title: "Wassa Simpa Expansion",
    description:
      "Expanded operations with the opening of our second TotalEnergies station in Wassa Simpa.",
  },
  {
    year: "2024",
    title: "GH₵1 Billion Milestone",
    description: "Achieved annual turnover exceeding One Billion Ghana Cedis.",
  },
  {
    year: "Future",
    title: "OMC Vision",
    description:
      "Working towards becoming a fully licensed Oil Marketing Company (OMC).",
  },
];

const whyChooseUs = [
  {
    title: "TotalEnergies Quality",
    description:
      "Access to quality fuel products meeting international standards",
    icon: "✓",
  },
  {
    title: "Competitive Pricing",
    description: "Fair prices without compromising on quality",
    icon: "✓",
  },
  {
    title: "Reliable Supply",
    description: "Consistent fuel availability at all our outlets",
    icon: "✓",
  },
  {
    title: "Local Expertise",
    description: "Deep understanding of Ghana's energy needs",
    icon: "✓",
  },
  {
    title: "Professional Service",
    description: "Trained staff committed to excellent customer care",
    icon: "✓",
  },
  {
    title: "Strategic Locations",
    description: "Conveniently located stations in Western Region",
    icon: "✓",
  },
];

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page">
      {/* About Hero Section */}
      <section className="about-hero-new">
        <div
          className="about-hero-bg"
          style={{ backgroundImage: `url(${fuelStationImage})` }}
        >
          <div className="about-hero-overlay"></div>
          <div className="about-hero-content">
            <span className="section-label">About Us</span>
            <h1>Fueling Ghana's Future</h1>
            <p>
              A proudly Ghanaian petroleum company partnered with TotalEnergies
              Ghana, delivering quality fuel and energy solutions across the
              Western Region.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-intro">
        <div className="about-intro-content">
          <div className="about-intro-text">
            <span className="section-label">Who We Are</span>
            <h2>Your Trusted Energy Partner</h2>
            <p>
              <strong>SAKAMA PETROLEUM, GAS LOGISTICS & TRADING LIMITED</strong>{" "}
              is a fully owned Ghanaian company registered under the Laws of
              Ghana in the Oil and Gas sector. We are proud partners of
              TotalEnergies Ghana in retail network development and authorized
              dealers at Tarkwa and Wassa Simpa outlets in the Western Region.
            </p>
            <p>
              With over two decades of experience and an annual turnover
              exceeding One Billion Ghana Cedis, we have established ourselves
              as a trusted name in the petroleum industry. Our commitment to
              quality, reliability, and customer satisfaction drives everything
              we do.
            </p>
            <div className="about-badges">
              <div className="about-badge">
                <span className="badge-icon">🤝</span>
                <span>TotalEnergies Ghana Partner</span>
              </div>
              <div className="about-badge">
                <span className="badge-icon">🇬🇭</span>
                <span>100% Ghanaian Owned</span>
              </div>
              <div className="about-badge">
                <span className="badge-icon">⛽</span>
                <span>Licensed Dealer</span>
              </div>
            </div>
          </div>
          <div className="about-intro-image">
            <img
              src={cleanFuelingImage}
              alt="SAKAMA Fuel Station Operations"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/600x400/0d1b2a/f8a333?text=SAKAMA+Operations";
              }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mv-grid">
          <div className="mv-card mission reveal">
            <div className="mv-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <circle cx="24" cy="24" r="4" fill="currentColor" />
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              To fuel progress by providing dependable energy solutions that
              power businesses and communities forward. We are committed to
              delivering quality petroleum products while building lasting
              relationships based on trust, reliability, and exceptional
              service.
            </p>
          </div>
          <div
            className="mv-card vision reveal"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="mv-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8C14 8 5.46 14.22 2 24C5.46 33.78 14 40 24 40C34 40 42.54 33.78 46 24C42.54 14.22 34 8 24 8Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <circle cx="24" cy="24" r="3" fill="currentColor" />
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              To become a leading Oil Marketing Company (OMC) in Ghana,
              recognized for excellence in fuel distribution, customer service,
              and sustainable business practices. We aspire to expand our
              network while maintaining the highest standards of quality and
              integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <div className="values-header">
          <span className="section-label">What Drives Us</span>
          <h2>Our Core Values</h2>
          <p>The principles that guide every decision we make</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="value-card reveal"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="value-icon">{ValueIcons[value.icon]}</div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-content">
            <span className="section-label">Why SAKAMA</span>
            <h2>Why Choose Us?</h2>
            <p className="why-choose-intro">
              When you choose SAKAMA, you're choosing a partner committed to
              your success. Here's what sets us apart:
            </p>
            <div className="why-choose-grid">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="why-choose-item">
                  <span className="check-icon">{item.icon}</span>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-choose-image">
            <img
              src={fuelDistributionImage}
              alt="SAKAMA Fuel Distribution"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/600x500/0d1b2a/f8a333?text=Quality+Service";
              }}
            />
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="timeline-section">
        <div className="timeline-header">
          <span className="section-label">Our Journey</span>
          <h2>Growing With Ghana</h2>
          <p>
            Key milestones in our journey to becoming a trusted energy partner
          </p>
        </div>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`timeline-item reveal ${
                index % 2 === 0 ? "left" : "right"
              }`}
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="timeline-content">
                <span className="timeline-year">{milestone.year}</span>
                <h4>{milestone.title}</h4>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="leadership-header">
          <span className="section-label">Leadership</span>
          <h2>Meet Our Team</h2>
          <p>Experienced professionals driving SAKAMA's vision forward</p>
        </div>

        <div className="ceo-feature">
          <div className="ceo-image-container">
            <div className="ceo-image-wrapper-new">
              <img
                src={ceoImage}
                alt="Seidu Mohammed Salami - CEO"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/400x400/0d1b2a/f8a333?text=CEO";
                }}
              />
            </div>
          </div>
          <div className="ceo-details">
            <h3>Seidu Mohammed Salami</h3>
            <p className="ceo-title-new">Chief Executive Officer & Founder</p>
            <p className="ceo-bio-new">
              Seidu Mohammed Salami leads SAKAMA with a vision of excellence and
              an unwavering commitment to serving Ghana's energy needs. Under
              his leadership, SAKAMA has grown from a local fuel dealer to a
              trusted partner of TotalEnergies Ghana with an annual turnover
              exceeding One Billion Ghana Cedis.
            </p>
            <p className="ceo-bio-new">
              His dedication to continuous improvement, customer satisfaction,
              and building strong partnerships has positioned SAKAMA as a
              respected name in Ghana's petroleum industry. He continues to
              drive the company's vision of becoming a fully licensed Oil
              Marketing Company.
            </p>
            <div className="ceo-achievements">
              <div className="achievement">
                <span className="achievement-value">20+</span>
                <span className="achievement-label">Years in Industry</span>
              </div>
              <div className="achievement">
                <span className="achievement-value">GH₵1B+</span>
                <span className="achievement-label">Annual Turnover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Ready to Partner With Us?</h2>
          <p>
            Whether you need reliable fuel supply for your business or quality
            petroleum products for your vehicles, SAKAMA is here to serve you.
          </p>
          <div className="about-cta-buttons">
            <Link to="/#locations" className="btn primary">
              Find Our Locations
            </Link>
            <Link to="/#contact" className="btn secondary-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
