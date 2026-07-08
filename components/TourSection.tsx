import { tourDates } from "@/data/tourDates";

export default function TourSection() {
  return (
    <section id="tour" className="tour">
      <div className="tour__content">
        <div className="section-mark" />

        <p className="tour__eyebrow">Where the Road Leads</p>

        <h2 className="tour__title">Come find us out there.</h2>

        <div className="tour__list">
          {tourDates.map((show) => (
            <a
              href={show.ticketUrl}
              className="tour__show"
              key={`${show.date}-${show.venue}`}
            >
              <span>{show.date}</span>
              <strong>{show.venue}</strong>
              <span>{show.city}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}