"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

interface Event {
  eventImage: string;
  eventName: string;
  eventTag: string;
  eventDate: string;
  eventDisc: string;
  registerLink: string;
  eventType: string;
  eventDetailsLink?: string;
}

interface EventsToggleProps {
  events: Event[];
  styles: Record<string, string>;
  defaultTab?: "upcoming" | "past";
  upcomingLabel?: string;
  pastLabel?: string;
  itemsPerPage?: number; // default is 3
}

const EventsToggle = ({
  events,
  styles,
  defaultTab = "upcoming",
  upcomingLabel = "Upcoming Events",
  pastLabel = "Past Events",
  itemsPerPage = 3,
}: EventsToggleProps) => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">(defaultTab);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter by event type
  const filteredEvents = events.filter((e) => e.eventType === activeTab);
  const totalPages = Math.max(
    1,
    Math.ceil(filteredEvents.length / itemsPerPage)
  ); // Always show at least 1 page

  // Get paginated events
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleTabChange = (tab: "upcoming" | "past") => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <>
      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleButton} ${
            activeTab === "upcoming" ? styles.activeToggle : ""
          }`}
          onClick={() => handleTabChange("upcoming")}
        >
          {upcomingLabel}
        </button>
        <button
          className={`${styles.toggleButton} ${
            activeTab === "past" ? styles.activeToggle : ""
          }`}
          onClick={() => handleTabChange("past")}
        >
          {pastLabel}
        </button>
      </div>

      <ul className={styles.eventLists}>
        {paginatedEvents.length > 0 ? (
          paginatedEvents.map((item, index) => (
            <li className={styles.event} key={index}>
              <div className={styles.eventImageContainer}>
                <Image
                  src={item.eventImage}
                  className={styles.eventImage}
                  alt={`${item.eventName} Event`}
                  fill
                />
              </div>
              <div className={styles.eventContent}>
                <div className={styles.eventHeader}>
                  <div className={styles.eventInfo}>
                    <p className={styles.eventTag}>{item.eventTag}</p>
                    <h3 className={styles.eventName}>{item.eventName}</h3>
                    <p className={styles.impDates}>{item.eventDate}</p>
                  </div>
                  <div className={styles.actionButton}>
                    {activeTab === "upcoming" ? (
                      <Link href={item.registerLink}>
                        <Button size="medium">Register</Button>
                      </Link>
                    ) : (
                      <Link href={item.eventDetailsLink || "#"}>
                        <Button size="medium">View Details</Button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className={styles.eventDesc}>
                  <p>{item.eventDisc}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className={`${styles.noEvents} py-8`}>
            No {activeTab} events to display
          </li>
        )}
      </ul>

      <div
        className={styles.pagination}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        <button
          className={styles.pageButton}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, idx) => {
          const pageNum = idx + 1;
          return (
            <button
              key={pageNum}
              className={`${styles.pageButton} ${
                currentPage === pageNum ? styles.activePage : ""
              }`}
              onClick={() => goToPage(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          className={styles.pageButton}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default EventsToggle;
