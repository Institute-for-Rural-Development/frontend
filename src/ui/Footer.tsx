import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex w-full bg-[#850d09] justify-center items-center p-20 py-[5rem] max-md:p-4 max-md:py-8">
      <div className="w-full max-w-[1440px]">
        <div className="w-full flex max-md:flex-col max-md:gap-8 justify-between px-10 max-md:px-4">
          <div className="flex items-center gap-5 max-md:flex-wrap">
            <p className="text-2xl font-semibold text-[#fefefe] max-md:text-xl">
              Follow Us
            </p>
            <Link
              href="https://www.facebook.com/profile.php?id=61570984090298"
              target="_blank"
              className="text-2xl font-semibold !text-[#fefefe] max-md:text-xl"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/ird.nepal/"
              target="_blank"
              className="text-2xl font-semibold !text-[#fefefe] max-md:text-xl"
            >
              <AiFillInstagram />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <AiOutlineGlobal className="text-2xl font-semibold !text-[#fefefe] max-md:text-xl" />
            <p className="text-2xl font-semibold text-[#fefefe] max-md:text-xl">
              NP
            </p>
          </div>
        </div>

        <div className="w-full h-[3px] bg-[#fefefe] my-5" />

        <div className="w-full my-20 flex gap-5 px-10 justify-between max-md:flex-col max-md:my-10 max-md:px-4 max-md:gap-10">
          {/* Areas Column */}
          <div className="h-full flex flex-col gap-5 max-md:w-full">
            <h3 className="!text-[#fefefe] font-bold !text-[1.4rem] ">
              Useful Links
            </h3>
            <div className="flex flex-col gap-2">
              {/* ... area items */}
              <ul>
                <li className="!text-[1.2rem] !text-[#fefefe] pb-2">
                  <Link href="/about"> About</Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/events"> Events</Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/news"> News</Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/involve"> Involve</Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/gallery"> Gallery</Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="#"> Donate</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Campaigns Column */}
          <div className="h-full flex flex-col gap-5 max-md:w-full">
            <h3 className="!text-[#fefefe] font-bold !text-[1.4rem] ">
              Areas of Work
            </h3>
            <div className="flex flex-col gap-2">
              <ul>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/areas-of-work/agriculture">Agriculture</Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/areas-of-work/culture-and-heritage">
                    Culture & Heritage
                  </Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/areas-of-work/tourism">Tourism</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Campaigns Column */}
          <div className="h-full flex flex-col gap-5 max-md:w-full">
            <h3 className="!text-[#fefefe] font-bold !text-[1.4rem] ">
              Initiatives & Campaigns
            </h3>
            <div className="flex flex-col gap-2">
              <ul>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/initiative/education-reform">
                    Education Reform
                  </Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/initiative/ex-l">EXL</Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/initiative/literacy-course-package">
                    Literacy Course Package
                  </Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/initiative/local-curriculum-development">
                    Local Curriculum Development
                  </Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/initiative/maitri">Maitri</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Programs Column */}
          <div className="h-full flex flex-col gap-5 max-md:w-full">
            <h3 className="!text-[#fefefe] font-bold !text-[1.4rem] ">
              Flagship Programs
            </h3>
            <div className="flex flex-col gap-2">
              <ul>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/flagship-programs/conscious-village-initiative">
                    Conscious Village
                  </Link>
                </li>
                <li className="!text-[1.2rem] !text-[#fefefe]  pb-2">
                  <Link href="/flagship-programs/one-app-one-tap">
                    One App One Tap
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo Column */}
          <div className="h-full flex flex-col gap-5 max-md:w-full">
            <div className="bg-[#fefefe] flex justify-center items-center p-2 rounded-3xl max-md:w-40">
              <Image
                src="/assets/images/logo3.png"
                alt="IRD Logo"
                width={200}
                height={120}
                className="max-md:w-full max-md:h-auto"
              />
            </div>
            <div className="flex flex-col gap-2 items-end max-md:items-start max-md:w-full">
              <p className="text-lg text-[#fefefe] text-end max-md:text-start">
                Panchakanya-1, Nuwakot, NP
              </p>
              <p className="text-lg text-[#fefefe] text-end max-md:text-start">
                +977 9843504464
              </p>
              <p className="text-lg text-[#fefefe] text-end max-md:text-start">
                contact@ird.com.np
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center max-md:p-2">
          <p className="text-[#fefefe] text-lg max-md:text-sm">
            Copyright 2025 Institute For Rural Development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
