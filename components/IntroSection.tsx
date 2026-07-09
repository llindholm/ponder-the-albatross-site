import Image from "next/image";

export default function IntroSection() {
  return (
    <section id="listen" className="intro">
      <div className="intro__road" />

      <div className="intro__content">
        <div>
          <div className="section-mark" />

          <p className="intro__eyebrow">A New Chapter</p>

          <h2 className="intro__title">
            The road begins with a new single.
          </h2>

          <p className="intro__copy">
            The first song from <em>Over Hill &amp; Hollow</em> arrives this
            August, opening the next chapter for Ponder the Albatross.
          </p>

          <a href="#" className="intro__button">
            Coming Soon
          </a>
        </div>

        <div className="intro__art">
          <Image
            src="/images/album/fronthill.jpg"
            alt="Over Hill & Hollow"
            width={800}
            height={800}
            className="intro__album"
          />
        </div>
      </div>
    </section>
  );
}