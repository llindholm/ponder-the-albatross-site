import "./epk.css";

export default function EpkPage() {
    return (
        <main className="epk">
            <section className="epk-hero">
                <div className="epk-hero__intro">
                    <div className="epk-hero__intro-inner">
                        <h1>Ponder the Albatross</h1>

                        <p className="epk-hero__tagline">
                            High-energy mountain music without boundaries.
                        </p>

                        <nav className="epk-hero__nav" aria-label="EPK sections">
                            <a href="#listen">Listen</a>
                            <a href="#watch">Watch</a>
                            <a href="#booking">Booking</a>
                            <a href="#downloads">Downloads</a>
                        </nav>
                    </div>
                </div>

                <div
                    className="epk-hero__image"
                    role="img"
                    aria-label="Ponder the Albatross performing live"
                />
            </section>

            <section className="epk-intro">
                <div className="epk-intro__inner">
                    <div className="epk-intro__copy">
                        <p className="epk-section__label">The Band</p>

                        <h2>
                            Colorado-bred string music
                            <br />
                            pushed beyond the expected.
                        </h2>

                        <div className="epk-intro__bio">
                            <p>
                                Somewhere in the vastness of space and time, where Gypsy Punk, Jam Band,
                                and New Grass collide with cosmic force, there is Ponder the Albatross.
                            </p>

                            <p>
                                Formed in 2015, Ponder the Albatross has built its sound on ecstatic
                                mandolin and guitar, searing fiddle, driving bass, and thunderous drums —
                                creating a high-energy blend of Rock, Gypsy, Grass, improvisation, and
                                wanderlust.
                            </p>

                            <p>
                                The band has spent years on the road throughout the U.S. and Rocky
                                Mountains, turning mountain bars, theaters, and festivals into shared
                                experiences built around movement, spontaneity, and connection. Every
                                performance carries the same restless energy: music shaped by the road,
                                the sea, the trees, and the next horizon.
                            </p>

                            <p>
                                Even with the members now spread across the country, Ponder continues to
                                reunite, tour, and create with eyes fixed forward — the next release, the
                                next stage, the next crowd, the next note.
                            </p>

                            <p className="epk-intro__signoff">
                                We Ride.
                            </p>
                        </div>
                    </div>

                    <div className="epk-intro__photo">
                        <img
                            src="/images/epk/epk-band-photo.jpg"
                            alt="Ponder the Albatross"
                        />
                    </div>
                </div>
            </section>
            <section id="watch" className="epk-watch">
                <div className="epk-watch__inner">
                    <div className="epk-watch__header">
                        <p className="epk-section__label">Watch</p>

                        <h2>See Ponder live.</h2>

                        <p>
                            High-energy string music, improvisation, and a live show that refuses
                            to stay in one lane.
                        </p>
                    </div>

                    <div className="epk-watch__featured">
                        <div className="epk-watch__video">
                            <iframe
                                src="https://www.youtube.com/embed/-ladk8JcoWw"
                                title="Ponder the Albatross live"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div className="epk-watch__studio">
                        <div className="epk-watch__studio-copy">
                            <p className="epk-section__label">From the Studio</p>

                            <h3>Ponder in session.</h3>

                            <p>
                                A closer look at the musicianship behind the live show.
                            </p>
                        </div>

                        <div className="epk-watch__studio-video">
                            <iframe
                                src="https://www.youtube.com/embed/7pQEtEOFkHI"
                                title="Ponder the Albatross studio session"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="listen" className="epk-listen">
                <div className="epk-listen__inner">
                    <div className="epk-listen__header">
                        <p className="epk-section__label">Listen</p>

                        <h2>The sound of Ponder.</h2>

                        <p>
                            Bluegrass roots, rock energy, improvisation, and electronic influence
                            woven into something entirely our own.
                        </p>
                    </div>

                    <div className="epk-listen__featured">
                        <div className="epk-listen__artwork">
                            <img
                                src="/images/album/fronthill.jpg"
                                alt="Ponder the Albatross album artwork"
                            />
                        </div>

                        <div className="epk-listen__release">
                            <p className="epk-listen__eyebrow">New Music</p>

                            <h3>Ponder the Albatross</h3>

                            <p className="epk-listen__release-copy">
                                Two new singles out now, with more on the way ahead of the new album
                                arriving October 2.
                            </p>

                            <div className="epk-listen__links">
                                <a
                                    href="https://open.spotify.com/artist/1ZP1eEpdYxTDzi9PiajdMt"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Spotify
                                </a>

                                <a
                                    href="https://music.apple.com/us/artist/ponder-the-albatross/1159168514"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Apple Music
                                </a>

                                <a
                                    href="https://youtube.com/@ponder_the_albatross"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="epk-live">
                <div className="epk-live__inner">
                    <div className="epk-live__header">
                        <p className="epk-section__label">Live</p>

                        <h2>Built for the stage.</h2>

                        <p>
                            From Colorado stages to festivals across the US, Ponder the Albatross has built its sound where it belongs — live.
                        </p>
                    </div>

                    <div className="epk-live__grid">

                        <div className="epk-live__item">
                            <span className="epk-live__type">Festival</span>
                            <h3>Hillberry Music Festival</h3>
                            <p>Eureka Springs, Arkansas</p>
                        </div>

                        <div className="epk-live__item">
                            <span className="epk-live__type">Venue</span>
                            <h3>Cervantes&apos; Other Side</h3>
                            <p>Denver, Colorado</p>
                        </div>

                        <div className="epk-live__item">
                            <span className="epk-live__type">Venue</span>
                            <h3>Washington&apos;s</h3>
                            <p>Fort Collins, Colorado</p>
                        </div>

                        <div className="epk-live__item">
                            <span className="epk-live__type">Festival</span>
                            <h3>Ozark Mountain Music Festival</h3>
                            <p>Eureka Springs, Arkansas</p>
                        </div>

                        <div className="epk-live__item">
                            <span className="epk-live__type">Venue</span>
                            <h3>George&apos;s Majestic Lounge</h3>
                            <p>Fayetteville, Arkansas</p>
                        </div>

                        <div className="epk-live__item">
                            <span className="epk-live__type">Venue</span>
                            <h3>10 Mile Music Hall</h3>
                            <p>Frisco, Colorado</p>
                        </div>

                        <div className="epk-live__item">
                            <span className="epk-live__type">Venue</span>
                            <h3>Belly Up</h3>
                            <p>Aspen, Colorado</p>
                        </div>

                        <div className="epk-live__item">
                            <span className="epk-live__type">Venue</span>
                            <h3>Aggie Theatre</h3>
                            <p>Fort Collins, Colorado</p>
                        </div>

                        <div className="epk-live__item">
                            <span className="epk-live__type">Festival</span>
                            <h3>Sunshine Get Down Music Festival</h3>
                            <p>Brooksville, FL</p>
                        </div>

                        <div className="epk-live__item">
                            <span className="epk-live__type">Venue</span>
                            <h3>Larimer Lounge</h3>
                            <p>Denver, Colorado</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="downloads" className="epk-assets">
                <div className="epk-assets__inner">
                    <div className="epk-assets__header">
                        <p className="epk-section__label">Press Assets</p>

                        <h2>Everything you need.</h2>

                        <p>
                            Approved photography, logos, technical information, and press
                            materials for Ponder the Albatross.
                        </p>
                    </div>

                    <div className="epk-assets__photos">
                        <div className="epk-assets__photo">
                            <img
                                src="/images/epk/photos/ponder-press-01.jpg"
                                alt="Ponder the Albatross press photo"
                            />

                            <a href="/images/epk/photos/ponder-press-01.jpg" download>
                                Download High-Res
                            </a>
                        </div>

                        <div className="epk-assets__photo">
                            <img
                                src="/images/epk/photos/ponder-press-02.jpg"
                                alt="Ponder the Albatross press photo"
                            />

                            <a href="/images/epk/photos/ponder-press-02.jpg" download>
                                Download High-Res
                            </a>
                        </div>

                        <div className="epk-assets__photo">
                            <img
                                src="/images/epk/photos/ponder-press-03.jpg"
                                alt="Ponder the Albatross press photo"
                            />

                            <a href="/images/epk/photos/ponder-press-03.jpg" download>
                                Download High-Res
                            </a>
                        </div>
                    </div>

                    <div className="epk-assets__downloads">
                        <a
                            href="/images/epk/logos/ponder-logo.png"
                            download
                            className="epk-assets__download"
                        >
                            <span>
                                <small>Brand Assets</small>
                                Band Logo
                            </span>

                            <span aria-hidden="true">↓</span>
                        </a>

                        <a
                            href="/images/epk/technical/ponder-stage-plot.png"
                            download
                            className="epk-assets__download"
                        >
                            <span>
                                <small>Technical</small>
                                Stage Plot
                            </span>

                            <span aria-hidden="true">↓</span>
                        </a>

                        <a
                            href="/images/epk/ponder-band-bio.pdf"
                            download
                            className="epk-assets__download"
                        >
                            <span>
                                <small>Press</small>
                                Band Bio
                            </span>

                            <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                </div>
            </section>

            <section id="booking" className="epk-booking">
                <div className="epk-booking__inner">
                    <p className="epk-section__label">Booking</p>

                    <h2>Bring Ponder to your stage.</h2>

                    <p className="epk-booking__intro">
                        For booking, festival inquiries, press, or other opportunities,
                        get in touch.
                    </p>

                    <div className="epk-booking__contact">
                        <a href="mailto:ponderthealbatross@gmail.com">
                            ponderthealbatross@gmail.com
                        </a>
                    </div>

                    <div className="epk-booking__links">
                        <a
                            href="https://open.spotify.com/artist/1ZP1eEpdYxTDzi9PiajdMt"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Spotify
                        </a>

                        <a
                            href="https://music.apple.com/us/artist/ponder-the-albatross/1159168514"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Apple Music
                        </a>

                        <a
                            href="https://youtube.com/@ponder_the_albatross"
                            target="_blank"
                            rel="noreferrer"
                        >
                            YouTube
                        </a>

                        <a href="https://ponderthealbatross.com" target="_blank" rel="noreferrer">
                            Website
                        </a>
                    </div>

                    <p className="epk-booking__footer">
                        © Ponder the Albatross
                    </p>
                </div>
            </section>
        </main>
    );
}