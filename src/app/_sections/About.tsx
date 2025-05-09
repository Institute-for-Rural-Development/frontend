import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const About = () => {
  return (
    <section className="">
      {/* Our Value Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <h2 className="">Our Value</h2>
          <p>
            Empowering and guiding the local leadership and communities to build
            the foundation for sustainable rural development rooted in
            Nepal&apos;s ethos.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/2 order-1 lg:order-2">
          <Image
            src="/assets/images/Nepal_Flag_Circle_500x500.png"
            alt="Nepal Flag Circle"
            width={250}
            height={250}
          />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex justify-center lg:w-1/2 order-first lg:order-none">
          <Image
            src="/assets/images/Nepal_Flag_Circle_500x500.png"
            alt="Nepal Flag Circle"
            width={250}
            height={250}
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="">Our Mission</h2>
          <p>
            Develop IRD as an open and collaborative platform for all
            individuals/groups who believe in the positive transformation of
            Nepal at its fundamental level.
          </p>
        </div>
      </div>

      {/* Learn More Button */}
      <div className="">
        <Link href="/about">
          <Button size="large">Learn More</Button>
        </Link>
      </div>
    </section>
  );
};

export default About;
