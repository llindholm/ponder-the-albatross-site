export default function ContactSection() {
    return (
        <section id="contact" className="contact">
            <div className="contact__content">
                <div className="section-mark" />

                <p className="contact__eyebrow">Contact</p>

                <h2 className="contact__title">
                    Continue the journey.
                </h2>

                <div className="contact__grid">
                    <div className="contact__card">
                        <h3 className="contact__card-title">Booking</h3>

                        <a href="mailto:ponderthealbatross@gmail.com">
                            ponderthealbatross@gmail.com
                        </a>
                    </div>

                    <div className="contact__card">
                        <h3 className="contact__card-title">
                            Media &amp; Press
                        </h3>

                        <p className="contact__name">
                            Steve Labate
                        </p>

                        <p className="contact__company">
                            Mythmaker PR
                        </p>

                        <a href="mailto:steve@mythmakerpr.com">
                            steve@mythmakerpr.com
                        </a>

                    </div>

                    <div className="contact__card">
                        <h3 className="contact__card-title">
                            TV/Film Placements • Podcasts • Partnerships
                        </h3>

                        <p className="contact__name">
                            Holly Davidson
                        </p>

                        <p className="contact__company">
                            ICT PR & Strategic Communications
                        </p>

                        <a href="mailto:holly@iconnectyou.today">
                            holly@iconnectyou.today
                        </a>

                        <a href="tel:3235134804">
                            (323) 513-4804
                        </a>
                    </div>
                </div>
                <div className="contact__divider">
                    <span />
                    <div className="contact__diamond" />
                    <span />
                </div>
                <div className="contact__social-section">
                    <p className="contact__social-heading">
                        Follow The Journey
                    </p>

                    <div className="contact__socials">
                        <a
                            href="https://www.instagram.com/ponderthealbatross"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://youtube.com/channel/UCfPTE10br_5G3_H5SZJjoZw?si=XKv-vI8BDK7oLRw0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YouTube
                        </a>

                        <a
                            href="https://www.facebook.com/ponderthealbatross"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </div>
                </div>

                <div className="contact__divider">
                    <span />
                    <div className="contact__diamond" />
                    <span />
                </div>

                <footer className="footer">
                    <p>© 2026 Ponder the Albatross</p>
                    <p>See you somewhere down the road.</p>
                </footer>
            </div>
        </section>
    );
}