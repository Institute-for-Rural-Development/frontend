import React from "react";
import Image from "next/image";
import joinUsPrograms from "@/data/joinUsPrograms.json";
import Button from "@/components/Button";

const AreasOfWork = () => {
  return (
    <section className="sec1-mt sec1-mb">
      <div className="layout-wide mx-auto px-4 lg:px-8">
        <div className="sec-mb">
          <h2 className="text-4xl font-bold text-accent mb-8">Join IRD</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-5 dsctext">
              <p>
                At IRD, we believe that meaningful change happens when passionate individuals come
                together with a shared vision. Whether you are a student, a young professional, an
                expert, or someone simply eager to make a difference, there’s a place for you here.
                We welcome people from all backgrounds, skills, and experiences to join us in our
                mission to create a more just, inclusive, and thriving Nepal.
              </p>
              <p>
                Your involvement—whether through volunteering, interning, collaborating, or
                supporting our initiatives—can drive real impact in education, sustainability,
                community development, and beyond. Together, we can shape a future where progress is
                not just a possibility but a reality for all.
              </p>
            </div>
            <div className="relative w-full lg:w-[50%] aspect-video min-h-[300px]">
              <Image
                src="/assets/images/involve/join.jpg"
                alt="Join Us Hero Image"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <ul className="space-y-40">
          {joinUsPrograms.joinUsPrograms.map((item, index) => (
            <li
              className={`flex flex-col lg:flex-row gap-16 ${
                index % 2 == 0 ? "lg:flex-row-reverse" : ""
              } mb-20`}
              key={index}
            >
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-accent uppercase">
                  {item.programName}
                </h3>
                <p className="mt-3 text-gray-700 dsctext">{item.programDesc}</p>
               <br/> <Button size="medium">
                  Join Us
                </Button>
              </div>
              <div className="relative w-full lg:w-[50%] aspect-video min-h-[300px]">
                <Image
                  src={item.programImage}
                  alt={`${item.programName} Image`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AreasOfWork;