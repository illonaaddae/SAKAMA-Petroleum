import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import heroImageAsset from "../assets/hero.png";
import OperationImage from "../components/OperationImage";
import retailNetworkImage from "../assets/Retail Network.jpg";
import fuelDistributionImage from "../assets/Fuel-distribution.jpg";
import lubricantsSupplyImage from "../assets/Lubricants-supplies.jpg";
import cleanFuelingImage from "../assets/Clean-fueling.jpg";
import fuelStationImage from "../assets/Fuel-station.jpg";
import "../App.css";

// Service icons as SVG components for better control
const ServiceIcons = {
  fuelStation: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 42V12C8 10.9 8.9 10 10 10H26C27.1 10 28 10.9 28 12V42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 42H28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12 18H24V26H12V18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 24H34C35.1 24 36 24.9 36 26V34C36 35.1 36.9 36 38 36C39.1 36 40 35.1 40 34V20L36 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="38" cy="30" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M18 42V36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  fuelPump: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="10"
        y="8"
        width="20"
        height="32"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path d="M14 16H26V24H14V16Z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M30 18L36 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M36 12V28C36 30.2 37.8 32 40 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="36" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M18 32H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  oilDrop: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 6C24 6 10 20 10 30C10 37.7 16.3 44 24 44C31.7 44 38 37.7 38 30C38 20 24 6 24 6Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 30C18 26.7 20.7 24 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12H28V32H6V12Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 18H36L42 24V32H28V18Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="36" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="35" cy="36" r="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M17 36H31" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M6 36H9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M39 36H42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  partnership: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 20L24 28L40 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 28L16 36L24 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="36" cy="36" r="6" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
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
};

const services = [
  {
    id: "retail",
    title: "Retail Fuel Stations",
    description:
      "Operating modern fuel stations in partnership with TotalEnergies, providing quality petroleum products to motorists across Ghana.",
    image: retailNetworkImage,
    icon: "fuelStation",
    highlight: "TotalEnergies Partner",
  },
  {
    id: "fuel",
    title: "Fuel Distribution",
    description:
      "Authorized dealer of TotalEnergies at Tarkwa and Simpa outlets in the Western Region, serving communities with reliable fuel supply.",
    image: fuelDistributionImage,
    icon: "fuelPump",
    highlight: "Western Region",
  },
  {
    id: "lubricants",
    title: "Lubricants & Oil Supply",
    description:
      "Premium lubricants and engine oils distribution to the Tarkwa Municipality, serving mining companies and vehicle operators.",
    image: lubricantsSupplyImage,
    icon: "oilDrop",
    highlight: "Mining Sector",
  },
  {
    id: "partnership",
    title: "OMC Partnership",
    description:
      "Working towards becoming a fully licensed Oil Marketing Company (OMC) to expand our fuel distribution network.",
    image: cleanFuelingImage,
    icon: "partnership",
    highlight: "Growing Network",
  },
  {
    id: "quality",
    title: "Quality Assurance",
    description:
      "Committed to international standards in fuel quality, ensuring every drop meets TotalEnergies specifications.",
    image: fuelStationImage,
    icon: "quality",
    highlight: "Certified Quality",
  },
];

const operations = [
  {
    title: "Fuel Stations",
    description: "Modern TotalEnergies partner stations serving motorists",
    image: fuelStationImage,
    fallback: fuelStationImage,
  },
  {
    title: "Clean Fueling",
    description: "Quality fuel dispensing with trained attendants",
    image: cleanFuelingImage,
    fallback: cleanFuelingImage,
  },
  {
    title: "Lubricants Shop",
    description: "Premium oils and lubricants for all vehicle types",
    image: lubricantsSupplyImage,
    fallback: lubricantsSupplyImage,
  },
  {
    title: "Customer Service",
    description: "Friendly staff dedicated to your satisfaction",
    image: retailNetworkImage,
    fallback: retailNetworkImage,
  },
];

const stats = [
  { value: "GH₵1B+", label: "Annual Turnover" },
  { value: "16+", label: "Years Experience" },
  { value: "2", label: "Retail Outlets" },
  { value: "100%", label: "Ghanaian Owned" },
];

const faqs = [
  {
    question: "What types of fuel do you sell?",
    answer:
      "We sell premium TotalEnergies fuel products including Super (Petrol), Diesel, and Kerosene. All our fuel meets international quality standards through our partnership with TotalEnergies.",
  },
  {
    question: "What is your partnership with TotalEnergies?",
    answer:
      "SAKAMA Petroleum operates as an outlet partner of TotalEnergies, one of the world's leading energy companies. This partnership ensures we provide internationally certified, high-quality fuel products to our customers.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our stations operate 24/7 to serve you at any time. Both our Tarkwa and Simpa outlets are always ready to fuel your journey.",
  },
  {
    question: "Do you accept mobile money payments?",
    answer:
      "Yes! We accept all major mobile money services including MTN Mobile Money, Vodafone Cash, and AirtelTigo Money. We also accept cash and bank cards for your convenience.",
  },
  {
    question: "What lubricants do you offer?",
    answer:
      "We stock a full range of TotalEnergies lubricants including engine oils for cars, motorcycles, and commercial vehicles. Our trained staff can help you choose the right product for your vehicle.",
  },
  {
    question: "Do you offer bulk fuel supply?",
    answer:
      "Yes, we provide fuel distribution services for businesses, industries, and commercial clients. Contact us to discuss your bulk fuel requirements and get competitive pricing.",
  },
  {
    question: "Where are your stations located?",
    answer:
      "We have two stations in the Western Region of Ghana: our flagship station in Tarkwa (established 2010) and our Simpa station (opened 2021). Both locations are easily accessible and offer full service.",
  },
  {
    question: "How do you ensure fuel quality?",
    answer:
      "Quality is our priority. We source exclusively from TotalEnergies, maintain strict storage standards, regularly test our fuel, and keep our equipment well-calibrated. Every drop meets international specifications.",
  },
];

function Home() {
  const heroImage = useMemo(() => heroImageAsset, []);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="aboutus">
        <div
          className="hero-card reveal"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">
              <span className="partner-badge">
                Official TotalEnergies Partner
              </span>
            </p>
            <h1>Powering Ghana's Progress</h1>
            <p className="lead">
              SAKAMA is a proudly Ghanaian-owned petroleum company providing
              quality fuel, lubricants, and energy solutions. As an authorized
              TotalEnergies dealer, we deliver excellence at every pump.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn primary">
                Discover More
              </Link>
              <a
                href="#services"
                className="btn secondary"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Redesigned */}
      <section className="services-new" id="services">
        <div className="services-header-new">
          <span className="section-label">What We Offer</span>
          <h2>Our Core Services</h2>
          <p className="services-subtitle-new">
            From retail fuel stations to bulk distribution, we provide
            comprehensive petroleum solutions across Ghana
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="service-card-new reveal"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="service-image-new">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/640x400/0d1b2a/f8a333?text=${encodeURIComponent(
                      service.title
                    )}`;
                  }}
                />
                <div className="service-image-gradient"></div>
                {service.highlight && (
                  <span className="service-highlight">{service.highlight}</span>
                )}
              </div>
              <div className="service-content-new">
                <div className="service-icon-new">
                  {ServiceIcons[service.icon]}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Legacy Section */}
      <section className="legacy">
        <div className="legacy-card reveal" style={{ animationDelay: "0.2s" }}>
          <div className="legacy-content-wrapper">
            <div className="legacy-text">
              <span className="section-label">Our Story</span>
              <h2>A Legacy of Trust</h2>
              <p>
                SAKAMA has matured over the years into a trusted name in Ghana's
                petroleum industry. As an official TotalEnergies partner, we
                combine international quality standards with local expertise to
                serve our customers better.
              </p>
              <p>
                With an annual turnover exceeding One Billion Ghana Cedis, we
                are committed to fueling Ghana's progress, one delivery at a
                time. Our journey towards becoming a fully licensed OMC reflects
                our dedication to growth and excellence.
              </p>
              <div className="legacy-features">
                <div className="legacy-feature">
                  <span className="feature-icon">✓</span>
                  <span>TotalEnergies Quality Standards</span>
                </div>
                <div className="legacy-feature">
                  <span className="feature-icon">✓</span>
                  <span>100% Ghanaian Owned</span>
                </div>
                <div className="legacy-feature">
                  <span className="feature-icon">✓</span>
                  <span>Competitive Pricing</span>
                </div>
              </div>
            </div>
            <div className="legacy-image-wrapper">
              <img
                src={fuelStationImage}
                alt="SAKAMA Fuel Station"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/800x600/0d1b2a/f8a333?text=SAKAMA+Petroleum";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operations Gallery */}
      <section className="operations">
        <div className="operations-header">
          <span className="section-label">See Us In Action</span>
          <h2>Our Operations</h2>
        </div>
        <div className="operation-grid">
          {operations.map((operation, index) => (
            <article
              key={operation.title}
              className="operation-card reveal"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="operation-image-wrapper">
                <OperationImage
                  src={operation.image}
                  fallback={operation.fallback}
                  alt={operation.title}
                  title={operation.title}
                />
              </div>
              <div className="operation-content">
                <h3>{operation.title}</h3>
                <p>{operation.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-section" id="locations">
        <div className="locations-header">
          <span className="section-label">Find Us</span>
          <h2>Our Locations</h2>
          <p>Visit our TotalEnergies partner stations in the Western Region</p>
        </div>
        <div className="locations-grid">
          <div className="location-card reveal">
            <div className="location-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4C16.268 4 10 10.268 10 18C10 28 24 44 24 44C24 44 38 28 38 18C38 10.268 31.732 4 24 4Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="24"
                  cy="18"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h3>Tarkwa Station</h3>
            <p className="location-address">Tarkwa, Western Region, Ghana</p>
            <p className="location-desc">
              Our flagship station serving the Tarkwa Municipality since 2010.
              Providing quality TotalEnergies fuel and lubricants.
            </p>
            <div className="location-badge">
              <span>⛽ TotalEnergies Partner</span>
            </div>
          </div>
          <div
            className="location-card reveal"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="location-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4C16.268 4 10 10.268 10 18C10 28 24 44 24 44C24 44 38 28 38 18C38 10.268 31.732 4 24 4Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="24"
                  cy="18"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h3>Simpa Station</h3>
            <p className="location-address">Simpa, Western Region, Ghana</p>
            <p className="location-desc">
              Our newest outlet opened in 2021, extending our reach to serve
              more communities in the Western Region.
            </p>
            <div className="location-badge">
              <span>⛽ TotalEnergies Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="section-label">
          <span>FAQ</span>
        </div>
        <h2 className="section-title reveal">Frequently Asked Questions</h2>
        <p className="section-subtitle reveal">
          Got questions? We've got answers. Find out more about our services and
          operations.
        </p>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item reveal ${
                activeFaq === index ? "active" : ""
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeFaq === index}
              >
                <span>{faq.question}</span>
                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <h2>Partner With Us</h2>
            <p>
              Looking for reliable fuel supply for your business? SAKAMA offers
              competitive pricing and dependable service for commercial clients.
            </p>
            <Link to="/about" className="btn primary">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
