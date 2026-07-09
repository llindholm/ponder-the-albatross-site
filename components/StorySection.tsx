import Image from "next/image";

export default function StorySection() {
    return (
        <section id="about" className="story">
            <div className="story__content">
                <div className="story__art">
                    <Image
                        src="/images/album/back.jpg"
                        alt="Over Hill & Hollow back cover"
                        width={800}
                        height={800}
                        className="story__album"
                    />
                </div>

                <div>
                    <div className="section-mark" />

                    <p className="story__eyebrow">The Campfire</p>

                    <h2 className="story__title">
                        Songs for the road, the fire, and the long way home.
                    </h2>

                    <p className="story__copy">
                        Ponder the Albatross carries stories through strings, grit, harmony,
                        and the kind of wild-hearted energy that turns a room into a gathering.
                    </p>
                </div>
            </div>
        </section>
    );
}