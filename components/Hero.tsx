export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__photo">
                <div className="hero__image" />
                <div className="hero__overlay" />

                <div className="hero__content">
                    <h1 className="hero__title">Ponder the Albatross</h1>
                </div>
            </div>

            <div className="hero__details">
                <p className="hero__album">Over Hill &amp; Hollow</p>

                <div className="hero__divider">
                    <span></span>
                    <div className="hero__diamond"></div>
                    <span></span>
                </div>

                <p className="hero__release">
                    <span>A New Chapter Begins</span>
                    <span>August 2026</span>
                </p>

                <a href="#listen" className="hero__button">
                    Begin the Journey
                </a>
            </div>

            <div className="hero__road" />
            <div className="hero__scroll-line" />
        </section>
    );
}