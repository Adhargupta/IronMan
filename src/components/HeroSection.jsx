import SocialIcons from './SocialIcons'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero">
      {/* Bike image placeholder on the right */}
      <div className="hero__bike" aria-hidden="true" />

      {/* Diagonal dark overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Slide indicators */}
      <div className="hero__slide-indicator">
        <div className="hero__slide-item hero__slide-item--active">
          <span className="hero__slide-dot" />
          <span className="hero__slide-num">01</span>
        </div>
        <div className="hero__slide-item">
          <span className="hero__slide-num">04</span>
        </div>
      </div>

      {/* Main content */}
      <div className="hero__content">
        <div className="hero__heading-wrapper">
          <h1 className="hero__heading">
            ENGINEERED FOR<br />
            <span className="hero__heading-line2">
              EVERY MILE
              <span className="hero__thumbnails" aria-hidden="true">
                <span className="hero__thumb" />
                <span className="hero__thumb" />
                <span className="hero__thumb" />
              </span>
            </span>
          </h1>
        </div>

        <p className="hero__subtext">
          From city streets to open roads, our cycles deliver speed,<br />
          control, and durability where it matters most.
        </p>

        <button className="hero__cta">EXPLORE COLLECTION</button>
      </div>

      {/* Social Icons */}
      <SocialIcons />
    </section>
  )
}

export default HeroSection
