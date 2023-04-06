import Link from "next/link";
import Image from "next/image";
import roundedLogo from "../../../public/rttroundedlogo.png";

const WhatMakesRTTDifferentHomepage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-bold">
            So what makes RTT&#174; different to other therapies?
          </h1>
          <div className="avatar">
            <div className="w-24 rounded-full mt-5">
              <img src="/rttroundedlogo.png" />
            </div>
          </div>
          <p className="mb-5 py-6 text-sm sm:text-lg lg:text-xl">
            A therapist displaying the RTT&#174;logo on their website will have
            qualified in Rapid Transformational Therapy&#174; which enables and
            facilitates you to make the changes you wish for yourself without
            the requirement of many sessions. Most issues are tackled in one,
            two or sometime three sessions – depending on the complexity and
            what is the right fit for you.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesRTTDifferentHomepage;
