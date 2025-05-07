import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import joinUsPrograms from "@/data/joinUsPrograms.json";
import Image from "next/image";

const JoinUs = () => {
  return (
    <section className="sec-mt bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-accent uppercase">Join Us</h2>
          <p className="max-w-3xl mx-auto dsctext text-gray-700">
            Be part of something bigger. Be part of the change. Join us in
            making a lasting impact.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {joinUsPrograms.joinUsPrograms.map((item, index) => (
            <li className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" key={index}>
              <Link href={item.programLink}>
                <div className="relative w-full h-0 pb-[65%]">
                  <Image
                    src={item.programImage}
                    alt={`${item.programName} Image`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {item.programName}
                  </h3>
                  <p className="text-gray-600 dsctext">
                    {item.programDesc.length > 100
                      ? `${item.programDesc.slice(0, 100)}...`
                      : item.programDesc}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12 sec-mb">
          <Link href="/involve">
            <Button size="large">More Opportunities</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;