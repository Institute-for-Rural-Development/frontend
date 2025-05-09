import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import eventsLists from "@/data/eventsLists.json";
import EventCard from "../../ui/EventCard";
const Events = () => {
  return (
    <section className="">
      <div>
        <h2 className="text-xl">Events</h2>
        <p className="">
          Discover upcoming events by IRD promoting rural development in Nepal
          through community engagement, collaboration, and impactful local
          initiatives.
        </p>
      </div>

      <ul className="flex flex-col">
        {eventsLists.eventLists.map((event, index) => (
          <EventCard
            key={index}
            title={event.eventName}
            image={event.eventImage}
            date={event.eventDate}
            link={event.registerLink}
            description={event.eventDisc}
          />
        ))}
      </ul>

      <div className="">
        <Link href="/events">
          <Button size="large">View All Events</Button>
        </Link>
      </div>
    </section>
  );
};

export default Events;
