import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const partners = [
  { id: 1, logo: "/assets/images/logo2.png", name: "Partner 1" },
  { id: 2, logo: "/assets/images/logo2.png", name: "Partner 2" },
  { id: 3, logo: "/assets/images/logo2.png", name: "Partner 3" },
  { id: 4, logo: "/assets/images/logo2.png", name: "Partner 4" },
  { id: 5, logo: "/assets/images/logo2.png", name: "Partner 5" },
  { id: 6, logo: "/assets/images/logo2.png", name: "Partner 6" },
];

function Partners() {
  return (
    <section className="w-full bg-[#eeeeee] py-16">
      <div className="max-w-[1280px] mx-auto px-6 space-y-[3rem]">
        <div>
          <h2>Our Partners</h2>
          <p className="!text-[1.6rem] max-w-[70ch]">
            We collaborate with dedicated partners to drive sustainable rural
            development and create lasting impact
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-between items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-32 h-32 md:w-40 md:h-40 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/involve">
            <Button size="large">Become a Partner</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Partners;
