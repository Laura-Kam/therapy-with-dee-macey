import Link from "next/link";
import Image from "next/image";

const WhatIsRTTContentHomepage = () => {
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse bg-lime-100 mt-20">
        <img
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="m-12">
          <h1 className="text-3xl font-bold">
            What is Rapid Transformational Therapy&#174;?
          </h1>
          <p className="py-6">
            Rapid Transformational Therapy&#174; is the creation and the vision
            of world renowned Marisa Peer <br />
            <br />
            This therapy is endorsed by the General Hypnotherapy Register, the
            Complementary and Natural Healthcare Council, the National and
            International Council of Psychotherapists, the American Board of
            Hypnotherapy, the International Association of Complementary
            Therapists, the International Institute of Complementary Therapies.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default WhatIsRTTContentHomepage;
