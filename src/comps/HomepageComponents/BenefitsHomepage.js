import Link from "next/link";
import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";
import { HiClipboardCheck } from "react-icons/hi";
import { BsFillArrowRightSquareFill } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

const BenefitsHomepage = () => {
  return (
    <div className="p-4 bg-blue-400 mb-10">
      <h1 className="text-xl font-bold mb-6 text-center mt-6 text-white">
        How can RTT&#174; benefit me?
      </h1>
      {/* to create more divs use the inner div - before I was using the outer one */}
      <div className="flex flex-col sm:flex-row gap-1 items-stretch">
        <div className="infodiv bg-white mt-7 pt-5 flex-1 m-5 relative border border-gray-300 rounded-lg border-30 mb-10 p-10">
          <HiClipboardCheck className="mb-5 text-4xl absolute top-4 bottom-3 left-1/2 transform -translate-x-1/2" />

          <ul className="list-none mt-12">
            <h1
              className="text-center text-3xl m-6 rounded"
              style={{ backgroundColor: "#B7C828" }}
            >
              Step 1
            </h1>
            <li className="mb-2 text-2xl">
              <h1 className="text-center text-2xl m-6 rounded font-bold bg-amber-200">
                Free 30 Minute &apos;Discovery Call&apos;
              </h1>
            </li>
            <li className="mb-2 text-xl">
              <HiChevronRight className="inline-block mr-2" />
              Help me to understand what needs to change in your life. Here we
              will target what previously held thoughts and beliefs you need to
              override.
            </li>
            <li className="mb-2 text-xl">
              <HiChevronRight className="inline-block mr-2" />
              This can be done online or by telephone.
            </li>
          </ul>
        </div>
        <div className="infodiv bg-white mt-7 pt-5 flex-1 m-5 relative border border-gray-300 rounded-lg border-30 mb-10 p-10">
          <HiClipboardCheck className="mb-5 text-4xl absolute top-4 bottom-3 left-1/2 transform -translate-x-1/2" />

          <ul className="list-none mt-12">
            <h1
              className="text-center text-3xl m-6 rounded"
              style={{ backgroundColor: "#B7C828" }}
            >
              Step 2
            </h1>
            <li className="mb-2 text-2xl">
              <h1 className="text-center text-2xl m-6 rounded font-bold bg-amber-200">
                Book in your First &apos;Cycle&apos;
              </h1>
              <h1 className="text-center text-xl m-6 rounded font-bold ">
                This is a 3 stage process, which lasts over 21 days.
              </h1>
            </li>
            <li className="mb-2 text-lg">
              <HiChevronRight className="inline-block mr-2" />
              <span className="font-extrabold">STEP 1 -</span>Your detailed
              &apos;intake&apos;. This is a deeper conversation which lasts
              around 45mins where we can begin to target and understand better
              what your area of need might be. (Online or by telephone)
            </li>
            <li className="mb-2 text-lg">
              <HiChevronRight className="inline-block mr-2" />
              <span className="font-extrabold">STEP 2 -</span> Your 2 hour RTT
              session. This is where we undertake your bespoke hypnotherapy
              session. (Face to Face or Online)
            </li>
          </ul>
        </div>
        <div className="infodiv bg-white mt-7 pt-5 flex-1 m-5 relative border border-gray-300 rounded-lg border-30 mb-10 p-10">
          <HiClipboardCheck className="mb-5 text-4xl absolute top-4 bottom-3 left-1/2 transform -translate-x-1/2" />

          <ul className="list-none mt-12">
            <h1
              className="text-center text-3xl m-6 rounded"
              style={{ backgroundColor: "#B7C828" }}
            >
              Step 3
            </h1>
            <li className="mb-2 text-2xl">
              <h1 className="text-center text-2xl m-6 rounded font-bold bg-amber-200">
                21 Day Audio Recording and Optional &apos;Check-In&apos; Service
              </h1>
            </li>
            <li className="mb-2 text-xl">
              <HiChevronRight className="inline-block mr-2" />
              <span className="font-extrabold">STEP 3 -</span>After the RTT
              session, you will receive your personalised audio recording, which
              you will the listen to for 20 minutes over 21 days. This helps to
              rewire the neural pathways in your brain.
            </li>
            <li className="mb-2 text-xl">
              <HiChevronRight className="inline-block mr-2" />I provide an
              optional daily check in, by text or 10 minute phone call to ensure
              you can obtain the most out of your session recording.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsHomepage;
