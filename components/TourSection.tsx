import { getBandsintownEvents } from "@/lib/bandsintown";

export default async function TourSection() {
  const events = await getBandsintownEvents();

  return (
    <section id="tour" className="tour">
      <div className="tour__content">
        <div className="section-mark" />

        <p className="tour__eyebrow">Where the Road Leads</p>

        <h2 className="tour__title">Come find us out there.</h2>

        <div className="tour__list">
          {events.map((show) => {
            const date = new Date(show.datetime).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            const location = [
              show.venue.city,
              show.venue.region,
            ]
              .filter(Boolean)
              .join(", ");

            const ticketUrl =
              show.offers?.find((offer) => offer.status === "available")?.url ??
              show.url;

            const rsvpUrl = `${show.url}&trigger=rsvp_going`;

            

            return (
              <div className="tour__show" key={show.id}>
                <span>{date}</span>

                <strong>{show.venue.name}</strong>

                <span>{location}</span>

                <div className="tour__actions">
                  <a
                    href={rsvpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tour__rsvp"
                  >
                    RSVP
                  </a>

                  {show.offers?.some(
                    (offer) => offer.status === "available"
                  ) && (
                      <a
                        href={ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tour__tickets"
                      >
                        Tickets
                      </a>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}