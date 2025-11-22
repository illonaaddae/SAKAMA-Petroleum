import { useMemo } from "react";
import heroImageAsset from "../assets/hero.png";
import OperationImage from "../components/OperationImage";
import retailNetworkImage from "../assets/Retail Network.jpg";
import fuelDistributionImage from "../assets/Fuel-distribution.jpg";
import lubricantsSupplyImage from "../assets/Lubricants-supplies.jpg";
import fuelTransportationImage from "../assets/Fuel-Transportation.jpg";
import cleanFuelingImage from "../assets/Clean-fueling.jpg";
import fuelStationImage from "../assets/Fuel-station.jpg";
import "../App.css";

const services = [
  {
    id: "retail",
    title: "Retail Network Development",
    description:
      "Partner of TOTALENERGIES in fuel stations development and management.",
    image: retailNetworkImage,
    fallback: retailNetworkImage,
  },
  {
    id: "fuel",
    title: "Fuel Distribution",
    description:
      "Dealer of TotalEnergies at Tarkwa   and Simpa outlets in the Western region of Ghana.",
    image: fuelDistributionImage,
    fallback: fuelDistributionImage,
  },
  {
    id: "lubricants",
    title: "Lubricants Supply",
    description:
      "End-to-end lubricants supply to the Tarkwa Municipality, especially for Small and Medium scale Miners.",
    image: lubricantsSupplyImage,
    fallback: lubricantsSupplyImage,
  },
  {
    id: "transport",
    title: "Fuel Transportation",
    description: "Reliable and efficient fuel transport services across Ghana.",
    image: fuelTransportationImage,
    fallback: fuelTransportationImage,
  },
  {
    id: "servicing",
    title: "Vehicle Servicing",
    description:
      "Professional vehicle lubrication servicing with genuine Toyota parts.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=640&h=480&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=640&h=480&fit=crop&q=80",
  },
  {
    id: "trading",
    title: "General Trading",
    description: "Comprehensive trading solutions for all your business needs.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&h=480&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=640&h=480&fit=crop&q=80",
  },
];

const operations = [
  {
    title: "Fuel Stations",
    image: fuelStationImage,
    fallback: fuelStationImage,
  },
  {
    title: "Clean Fueling",
    image: cleanFuelingImage,
    fallback: cleanFuelingImage,
  },
  {
    title: "Storage Facilities",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&h=600&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=900&h=600&fit=crop&q=80",
  },
  {
    title: "Transportation",
    image: fuelTransportationImage,
    fallback: fuelTransportationImage,
  },
];

function Home() {
  const heroImage = useMemo(() => heroImageAsset, []);

  return (
    <main>
      <section className="hero" id="aboutus">
        <div
          className="hero-card reveal"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">
              Partner of TOTALENERGIES | Serving Ghana with Excellence
            </p>
            <h1>Reliable Energy for Progress</h1>
            <p className="lead">
              SAKAMA is a fully owned Ghanaian Company providing dependable fuel
              solutions, logistics, and trading services. With over One Billion
              GH₵ annual turnover, we power businesses and communities forward.
            </p>
            <div className="hero-actions">
              <a href="/about" className="btn primary">
                Learn More
              </a>
              <a
                href="#locations"
                className="btn secondary"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#locations");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Our Locations
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-header">
          <h2>Our Core Services</h2>
          <p className="services-subtitle">
            20+ Years of Excellence in Energy Solutions
          </p>
        </div>
        <div className="service-scroll-container">
          <div className="service-scroll-track">
            {/* First set of services */}
            {services.map((service) => (
              <article key={`${service.id}-1`} className="service-card">
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      if (e.target.src !== service.fallback) {
                        e.target.src =
                          service.fallback ||
                          `https://via.placeholder.com/640x480/1a202c/8a97b1?text=${encodeURIComponent(
                            service.title
                          )}`;
                      } else {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/640x480/1a202c/8a97b1?text=${encodeURIComponent(
                          service.title
                        )}`;
                      }
                    }}
                  />
                  <div className="service-image-overlay"></div>
                </div>
                <div className="service-card-content">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
            {/* Duplicate set for seamless infinite scroll */}
            {services.map((service) => (
              <article
                key={`${service.id}-2`}
                className="service-card"
                aria-hidden="true"
              >
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      if (e.target.src !== service.fallback) {
                        e.target.src =
                          service.fallback ||
                          `https://via.placeholder.com/640x480/1a202c/8a97b1?text=${encodeURIComponent(
                            service.title
                          )}`;
                      } else {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/640x480/1a202c/8a97b1?text=${encodeURIComponent(
                          service.title
                        )}`;
                      }
                    }}
                  />
                  <div className="service-image-overlay"></div>
                </div>
                <div className="service-card-content">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy">
        <div className="legacy-card reveal" style={{ animationDelay: "0.2s" }}>
          <div className="legacy-content-wrapper">
            <div className="legacy-text">
              <h2>A Legacy of Trust</h2>
              <p>
                SAKAMA, over the years, has matured into adopting continuous
                improvement methods to excite customers. We are looking forward
                to growing together with your needs in mind. With an annual
                average turnover of over One Billion (GH₵) Cedis, we are well
                positioned to handle your concerns and needs with a smile. Our
                mission is to fuel progress by providing dependable energy
                solutions that power businesses and communities forward,
                building a legacy of trust one delivery at a time.
              </p>
            </div>
            <div className="legacy-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
                alt="SAKAMA Legacy of Trust"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/800x600/1a202c/8a97b1?text=Legacy+of+Trust";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="operations" id="locations">
        <h2>Our Operations in Action</h2>
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
              <div>
                <h3>{operation.title}</h3>
                <p>
                  Precision, care, and innovation in every project we undertake.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
