import Image from "next/image";

export default function IntroSection() {
  return (
    <section id="listen" className="intro">
      <div className="intro__road" />

      <div className="intro__content">
        <div className="intro__text">
          <div className="section-mark" />

          <p className="intro__eyebrow">A New Chapter</p>

          <h2 className="intro__title">
            The road begins with a new single.
          </h2>

          <p className="intro__copy">
            Our first single from <em>Over Hill &amp; Hollow</em> is now
            available! The next chapter for Ponder the Albatross opens...
          </p>
        </div>

        <div className="intro__media">
          <div className="intro__streaming">
            <p className="intro__streaming-label">Listen now</p>

            <div className="intro__streaming-links">
              <a
                href="https://open.spotify.com/track/2mUgLtJuZz5pIhbHBCnvvP?si=48a92e9832844ced"
                target="_blank"
                rel="noopener noreferrer"
                className="intro__streaming-link"
                aria-label="Listen to Holy Road on Spotify"
              >
                Spotify
              </a>

              <a
                href="https://music.apple.com/us/song/holy-road/6790982183"
                target="_blank"
                rel="noopener noreferrer"
                className="intro__streaming-link"
                aria-label="Listen to Holy Road on Apple Music"
              >
                Apple Music
              </a>
            </div>
          </div>

          <div className="intro__art">
            <Image
              src="/images/album/fronthill.jpg"
              alt="Over Hill & Hollow album artwork by Ponder the Albatross"
              width={800}
              height={800}
              className="intro__album"
            />
          </div>
        </div>
      </div>
    </section>
  );
}