import React from "react";
import styles from "@/styles/sections/about.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
const About = () => {
  return (
   <div className="layout-wide mx-auto pl-[1rem] pr-[1rem]">
         
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex flex-col gap-4 order-2 md:order-1">
              <h2>Our Mission</h2>
  
              <p className="dsctext">
                Empowering and guiding the local leadership, youths, and
                communities to build the foundation for sustainable rural
                development rooted in Nepal&apos;s ethos
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <Image
                src="/assets/images/Nepal_Flag_Circle_500x500.png"
                alt="Nepal Flag Circle"
                width={250}
                height={250}
                className="mt-[5rem]"
              />
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-28">
            <div className="flex justify-center">
              <Image
                src="/assets/images/Nepal_Flag_Circle_500x500.png"
                alt="Nepal Flag Circle"
                width={250}
                height={250}
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2>Our Vision</h2>
  
              <p className="dsctext">
                Develop IRD as an open and collaborative platform for all
                individuals/groups who believe in the positive transformation of
                Nepal at its fundamental level
              </p>
            </div>
          </div>
        
      </div>
  );
};

export default About;
