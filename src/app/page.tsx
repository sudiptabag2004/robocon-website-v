"use client";

import CountUpUnit from "@/components/CountUpUnit";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import Link from "next/link";
import SponsorCarousel from "@/components/SponsorCarousel";
import {
  noOfTeamAlumni,
  noOfTeamMembers,
  noOfTeamParticipations,
  noOfTeamRobots,
} from "@/constants/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setIsMenuOpenFunction = (arg0: boolean) => {
    setIsMenuOpen(arg0);
  };

  return (
    <div className="overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* First section */}
      <section className="w-full md:h-screen overflow-x-hidden">
        {/* Hero srction */}
        <div className="flex items-center gap-10 md:gap-44 flex-col md:flex-row">
          <div>
            <div
              className="bg-white p-10 border-blue-500 w-[1000px] md:w-[600px] hero-clip md:pr-32 mt-10 flex-shrink-0 flex justify-center"
              data-aos="slide-right"
            >
              <Image
                src={"/logo_nb.png"}
                alt="logo"
                width={400}
                height={400}
                className="w-72 md:w-96"
                unoptimized
              ></Image>
            </div>
          </div>
          <div
            className="flex flex-col gap-5 mx-10"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="text-5xl text-red">Robotics</div>
            <div className="pl-10 text-5xl">Reimagined</div>
            <div className="text-xl md:pr-20 pt-5 border-t-2 border-red">
              We are the official team of SRM participating in{" "}
              <Link
                href="https://aburobocon2024.vtv.gov.vn/"
                className="hover:text-red hover:cursor-pointer underline underline-offset-4 whitespace-nowrap"
              >
                ABU Robocon
              </Link>{" "}
              <br /> since the year 2011.{" "}
            </div>
          </div>
        </div>
        <div className="md:flex justify-center mt-14 hidden">
          <Image
            src={"/downArrow.svg"}
            alt="Down Arrow"
            width={50}
            height={50}
            className="animate-bounce"
          ></Image>
        </div>
      </section>

      {/* Second section */}
      <section className="w-full h-full flex flex-col items-center mt-20 md:mt-0">
        <div className="flex flex-col items-center" data-aos="fade-up">
          <div className="flex flex-wrap gap-5 md:gap-0 w-full justify-center">
            <CountUpUnit upto={noOfTeamMembers} label="Team Members" />
            <CountUpUnit upto={noOfTeamRobots} label="Robots" />
            <CountUpUnit upto={noOfTeamParticipations} label="Participations" />
            <CountUpUnit upto={noOfTeamAlumni} label="Alumni" />
          </div>
          <div className="text-3xl m-12 text-center">
            GROWING <span className="text-red">STRONGER</span> BY THE SECOND
          </div>
        </div>
        <div className="flex md:justify-center justify-around flex-wrap lg:flex-nowrap gap-16 px-10 md:gap-44 mt-20 w-full">
          <div className="border-l-4 border-red overflow-hidden">
            <div
              className="md:w-[500px] px-5 md:px-10 w-full"
              data-aos="slide-right"
              data-aos-delay="100"
            >
              <div className="text-3xl mb-5">Our Mission</div>
              <p className="text-xl w-full">
                Reimagine the knowledge from robotics into producing a solution
                for the growing society, for a better tomorrow.
              </p>
            </div>
          </div>
          <div className="border-l-4 border-red overflow-hidden">
            <div
              className="md:w-[500px] px-5 md:px-10 w-full"
              data-aos="slide-right"
              data-aos-delay="200"
            >
              <div className="text-3xl mb-5">Our Vision</div>
              <div className="text-xl w-full">
                Emerge as a renowned robotics systems lab centred at SRM IST,
                INDIA by inculcating a collaborative work culture.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third section */}
      <section className="w-full h-full">
        <div className="text-3xl md:text-4xl pl-10 md:pl-44 mt-44">
          Our Sponsors
        </div>
        <SponsorCarousel />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
