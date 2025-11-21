import { useMemo } from "react";
import heroImageAsset from "../assets/hero.png";
import OperationImage from "../components/OperationImage";
import "../App.css";

const services = [
  {
    id: "retail",
    title: "Retail Network Development",
    description:
      "Partner of TOTALENERGIES in fuel stations development and management.",
  },
  {
    id: "fuel",
    title: "Fuel Distribution",
    description:
      "Dealer of TotalEnergies at Tarkwa  and Simpa outlets in the Western region of Ghana.",
  },
  {
    id: "lubricants",
    title: "Lubricants Supply",
    description:
      "End-to-end lubricants supply to the Tarkwa Municipality, especially for Small and Medium scale Miners.",
  },
  {
    id: "transport",
    title: "Fuel Transportation",
    description: "Reliable and efficient fuel transport services across Ghana.",
  },
  {
    id: "servicing",
    title: "Vehicle Servicing",
    description:
      "Professional vehicle lubrication servicing with genuine Toyota parts.",
  },
  {
    id: "trading",
    title: "General Trading",
    description: "Comprehensive trading solutions for all your business needs.",
  },
];

const operations = [
  {
    title: "Fuel Stations",
    image: "https://images.unsplash.com/photo-1474221024601-1c1583d1defa?w=900&h=600&fit=crop",
    fallback: "https://images.unsplash.com/photo-1474221024601-1c1583d1defa?w=900&h=600&fit=crop",
  },
  {
    title: "Clean Fueling",
    image: "https://images.unsplash.com/photo-1475274224006-63dd95ccd490?w=900&h=600&fit=crop",
    fallback: "https://images.unsplash.com/photo-1475274224006-63dd95ccd490?w=900&h=600&fit=crop",
  },
  {
    title: "Storage Facilities",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&h=600&fit=crop",
    fallback: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&h=600&fit=crop",
  },
  {
    title: "Transportation",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=600&fit=crop",
    fallback: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=600&fit=crop",
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
        <h2>Our Core Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="service-card reveal"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <span className="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="legacy">
        <div
          className="legacy-card reveal"
          style={{ animationDelay: "0.2s" }}
        >
          <h2>A Legacy of Trust</h2>
          <p>
            SAKAMA, over the years, has matured into adopting continuous
            improvement methods to excite customers. We are looking forward to
            growing together with your needs in mind. With an annual average
            turnover of over One Billion (GH₵) Cedis, we are well positioned to
            handle your concerns and needs with a smile. Our mission is to fuel
            progress by providing dependable energy solutions that power
            businesses and communities forward, building a legacy of trust one
            delivery at a time.
          </p>
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

