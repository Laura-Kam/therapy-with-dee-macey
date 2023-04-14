import Link from "next/link";
import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";
import { HiClipboardCheck } from "react-icons/hi";

import { HiChevronRight } from "react-icons/hi";

const BenefitsHomepage = () => {
  return (
    <div className="p-4 bg-blue-400 mb-10">
      <h1 className="text-xl font-bold mb-6 text-center mt-6 text-white">
        How can RTT&#174; benefit me?
      </h1>
      <div className="flex flex-col sm:flex-row gap-3 items-stretch">
        <div className="infodiv bg-white mt-10 pt-5 flex-1 m-10 relative border border-gray-300 rounded-lg border-30 mb-10 p-10">
          <HiClipboardCheck className="mb-5 text-4xl absolute top-4 bottom-3 left-1/2 transform -translate-x-1/2" />

          <ul className="list-none mt-12">
            <li className="mb-2">
              <HiChevronRight className="inline-block mr-2" />
              Feel the change after one 2 hour session
            </li>
            <li className="mb-2">
              <HiChevronRight className="inline-block mr-2" />
              Connect the memories and the meanings to repeating behaviours of
              today and change those repetitions
            </li>
            <li className="mb-2">
              <HiChevronRight className="inline-block mr-2" />
              Release from ‘looping thoughts’ and repeated patterns of
              behaviours because you understand why
            </li>
            <li className="mb-2">
              <HiChevronRight className="inline-block mr-2" />
              Facilitated and controlled dialogue with your subconscious mind -
              the ‘control panel’ of our behaviours and feelings
            </li>
            <li className="mb-2">
              <HiChevronRight className="inline-block mr-2" />
              Change your focus from what you don’t want to what you do
            </li>
            <li className="mb-2">
              <HiChevronRight className="inline-block mr-2" />
              After each 90 minute – 2 hour session, you will receive a bespoke
              20 minute audio <br /> – made specifically for you which addresses
              your needs and is integral in rewiring and recoding your
              subconscious mind to embed change. <br />
              This, you listen to when it suits you.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BenefitsHomepage;
