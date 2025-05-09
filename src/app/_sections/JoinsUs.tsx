import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import joinUsPrograms from "@/data/joinUsPrograms.json";
import Card from "@/ui/Card";
const JoinUs = () => {
  return (
    <section className="">
      <div className="">
        <h2>Join Us</h2>
        <p>
          Be part of something bigger. Be part of the change. Join us in making
          a lasting impact.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {joinUsPrograms.joinUsPrograms.map((program, index) => (
          <Card
            key={index}
            title={program.programName}
            description={program.programDesc}
            link={program.programLink}
            image={program.programImage}
          />
        ))}
      </ul>

      <div className="">
        <Link href="/involve">
          <Button size="large">More Opportunities</Button>
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
