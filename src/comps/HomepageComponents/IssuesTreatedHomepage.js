import Link from "next/link";
import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";
import { TbBulb } from "react-icons/tb";

const IssuesTreatedHomepage = () => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-xl font-bold mb-2 text-center mt-6 text-teal-950">
        Can RTT&#174; work for me?
      </h1>
      <p className="mb-4 text-center m-8 ml-12 mr-10 ">
        If your heart’s desire is for change, then RTT&#174; can definitely work
        for you. <br />
        This will be dependent on you listening to your bespoke audio for at
        least 21 days and for you to be willing to enter into a ‘hypnosis
        contract’. <br />
        This is your willingness to go into hypnosis with your therapist.
      </p>
      <h1 className="text-xl font-bold mb-10 mt-8 text-center text-teal-950">
        What can RTT&#174; be used for?
      </h1>
      <div className="flex flex-col sm:flex-row gap-3 items-stretch">
        <div className="infodiv bg-amber-100 p-2 flex-1 mx-5 relative border border-gray-300 rounded-lg border-30">
          <TbBulb className="mb-5 text-4xl absolute top-4 bottom-3 left-1/2 transform -translate-x-1/2" />

          <ul className="list-none mt-12">
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Anxiety
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Phobias
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Weight Issues- Food/Diet, Anorexia, Bulimia
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Confidence
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Self-Esteem
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Motivation
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Achieving Goals
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Public Speaking
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Interview Skills
            </li>
          </ul>
        </div>
        <div className="infodiv bg-amber-100 p-2 flex-1 mx-5 relative border border-gray-300 rounded-lg border-30">
          <TbBulb className="mb-5 text-4xl absolute top-4 bottom-3 left-1/2 transform -translate-x-1/2" />

          <ul className="list-none mt-12">
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Money Blocks
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Trauma
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Stress
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Panic Attacks
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Depression
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Guilt
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              PTSD - Post Traumatic Stress Disorder
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Birth
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Birth Trauma
            </li>
          </ul>
        </div>
        <div className="infodiv bg-amber-100 p-2 flex-1 mx-5 relative border border-gray-300 rounded-lg border-30">
          <TbBulb className="mb-5 text-4xl absolute top-4 bottom-3 left-1/2 transform -translate-x-1/2" />

          <ul className="list-none mt-12">
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Pain Control
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Addiction - Drinking, Smoking, Drugs, Compulsive Behaviours
            </li>

            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Disconnection
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Feeling blocked
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Grief
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Finding Love
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Exams
            </li>
            <li className="mb-2">
              <TiTickOutline className="inline-block mr-2" />
              Sexual Problems
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default IssuesTreatedHomepage;
