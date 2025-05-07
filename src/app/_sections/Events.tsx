import React from "react";
import styles from "@/styles/reusable/events.module.css";
import Link from "next/link";
import Button from "@/components/Button";
import eventsLists from "@/data/eventsLists.json";
import Image from "next/image";


const Events = () => {
  return (
    <section className="sect-mt">
      <div className="layout-wide mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-[#850d09] uppercase text-3xl md:text-4xl font-bold">Events</h2>
          <p className="max-w-[70ch] dsctext md:text-xl mt-4">
            Discover upcoming events by IRD promoting rural development in Nepal
            through community engagement, collaboration, and impactful local
            initiatives.
          </p>
        </div>

        <ul className="flex flex-col gap-8">
          {eventsLists.eventLists.map((item, index) => (
            <li key={index} className="bg-[#f3f3f3] flex flex-col md:flex-row">
              <div className="relative w-full md:w-[30%] aspect-video">
                <Image
                  src={item.eventImage}
                  alt={`${item.eventName} Event`}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="w-full md:w-[70%] p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="bg-[#850d09] text-[#f0f0f0] px-5 py-0.5 rounded-full text-[12px]">
                      {item.eventTag}
                    </span>
                    <h3 className="text-2xl md:text-3xl mt-4 leading-tight">
                      {item.eventName}
                    </h3>
                  </div>
                  <Button>View Details</Button>
                </div>
                
                <p className="text-[#353535] text-lg font-medium mt-4">
                  {item.eventDate}
                </p>
                <p className="mt-5">{item.eventDisc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <Button>View All Events</Button>
        </div>
      </div>
    </section>
  );
};

export default Events;