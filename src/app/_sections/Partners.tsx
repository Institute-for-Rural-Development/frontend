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
  // { id: 6, logo: "/assets/images/logo2.png", name: "Partner 6" },
  // { id: 7, logo: "/assets/images/logo2.png", name: "Partner 6" },
  // { id: 8, logo: "/assets/images/logo2.png", name: "Partner 6" },
  // { id: 9, logo: "/assets/images/logo2.png", name: "Partner 6" },
  // { id: 10, logo: "/assets/images/logo2.png", name: "Partner 6" },
  // { id: 11, logo: "/assets/images/logo2.png", name: "Partner 6" },
  // { id: 12, logo: "/assets/images/logo2.png", name: "Partner 6" },
];

function Partners() {
  return (
    <section className="">
      <div>
        <h2>Our Partners</h2>
        <p className="">
          We collaborate with dedicated partners to drive sustainable rural
          development and create lasting impact
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex flex justify-center items-center "
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>

      <div className="">
        <Link href="/involve">
          <Button size="large">Become a Partner</Button>
        </Link>
      </div>
    </section>
  );
}

export default Partners;
