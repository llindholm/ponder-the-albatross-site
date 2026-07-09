export default function ContactSection() {
    return (
        <section id="contact" className="contact">
            <div className="contact__content">
                <div className="section-mark" />

                <p className="contact__eyebrow">Contact</p>

                <h2 className="contact__title">Continue the journey.</h2>

                <div className="contact__links">
                    <a href="mailto:ponderthealbatross@gmail.com">
                        Booking
                    </a>

                    <a href="mailto:steve@mythmakerpr.com">
                        Press
                    </a>

                </div>

                

                <div className="contact__socials">
                    <a href="https://www.instagram.com/ponderthealbatross"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <a href="https://youtube.com/channel/UCfPTE10br_5G3_H5SZJjoZw?si=XKv-vI8BDK7oLRw0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        YouTube
                    </a>
                    <a href="https://www.facebook.com/ponderthealbatross"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                </div>
                <div className="contact__divider">
                    <span></span>
                    <div className="contact__diamond"></div>
                    <span></span>
                </div>

                <footer className="footer">
                    <p>© 2026 Ponder the Albatross</p>
                    <p>See you somewhere down the road.</p>
                </footer>
            </div>
        </section >
    );
}