import Link from "next/link";
import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";

const IssuesTreatedHomepage = () => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-xl font-bold mb-2 text-center">
        Can RTT work for me?
      </h1>
      <p className="mb-4 text-center ">
        If your heart’s desire is for change, then RTT can definitely work for
        you. This will be dependent on you listening to your bespoke audio for
        at least 21 days and for you to be willing to enter into a ‘hypnosis
        contract’. This is your willingness to go into hypnosis with your
        therapist.
      </p>
      <h1 className="text-xl font-bold mb-2 text-center text-teal-950">
        What can RTT be used for?
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="bg-gray-100 p-4 flex-1 mx-20 sm:w-1/3">
          <h2 className="text-lg font-bold mb-2 text-center">List 1</h2>
          <ul className="list-disc">
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
        <div className="bg-gray-100 p-4 flex-1 mx-20 sm:w-1/3">
          <h2 className="text-lg font-bold mb-2 text-center">List 2</h2>
          <ul className="list-none">
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
              PTSD
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
        <div className="bg-gray-100 p-4 flex-1 mx-20 sm:w-1/3">
          <h2 className="text-lg font-bold mb-2 text-center">List 2</h2>
          <ul className="list-none">
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
