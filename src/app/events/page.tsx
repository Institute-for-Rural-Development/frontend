import React from "react";
import styles from "@/styles/reusable/events.module.css";
import eventsLists from "@/data/eventsLists.json";
import EventsToggle from "./event-toggle";

const Events = () => {
  return (
    <div className={`${styles.events} ${styles.eventPage}`}>
      <div className={styles.eventsWrapper}>
        <div className={styles.header}>
          <h2>Events</h2>
          <p>
            Discover upcoming events by IRD promoting rural development in Nepal
            through community engagement, collaboration, and impactful local
            initiatives.
          </p>
        </div>
        <EventsToggle events={eventsLists.eventLists} styles={styles} />
      </div>
    </div>
  );
};

export default Events;
