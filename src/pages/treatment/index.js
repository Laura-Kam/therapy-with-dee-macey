import Layout from "../../comps/Layout";
import Image from "next/image";
import Link from "next/link";

const Treatment = () => {
  return (
    <Layout>
      <div className="text-center my-2 px-2 py-2 sm:py-7 mt-9">
        <h1 className="font-bold text-0.5xl sm:text-1xl md:text-2xl lg:text-3xl mb-10">
          Specialist Area - RTT&#174; for Birth, Birth Fears and Anxieties
          (Tocophobia) <br /> and Post-Birth Trauma
        </h1>
        <div className="mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="profile picture of therapist smiling with a green background"
            className="rounded profile-image"
            height={170}
            width={200}
            layout="fixed"
            objectFit="cover"
            style={{
              borderRadius: "50%",
              margin: "20px auto",
            }}
          />
        </div>
      </div>
      <div className="mx-8 sm:mx-32 text-lg">
        <p className="text-center my-4 pt-4 italic">
           ‘A feeling will continue until it no longer needs to be felt’
          <br />
          <span className="font-bold not-italic"> Marisa Peer - copyright</span>
        </p>
        <p className="text-xl font-bold text-center mt-16">
          Trauma in Pregnancy
        </p>
        <p className="text-xl mt-16 bg-gray-100 p-10">
          It is a truth that pregnancy and birth on occasion, can leave
          individuals with feelings that are so hard to put into words – either
          to ourselves, or to our partners and our families. Some experience a
          disconnect from self and from those who should be closest to us at a
          time, we are told, which should be the happiest in our lives. This is
          where Rapid Transformational Therapy&#174; steps into its power to
          assist you to make sense of these events and feelings.ssget back to
          you.
        </p>
        <p className="text-xl font-bold text-center mt-16">
          How treatment works
        </p>
        <p className="text-xl mt-16 bg-gray-100 p-10">
          As a midwife with many years’ experience, I possess the skills,
          knowledge and experience to talk through events as they continue to
          appear to you and as they continue to be felt. We then explore them on
          a very practical level in an environment that is safe, completely
          confidential and where time pressure is not a consideration. When we
          have reached agreement about what is ‘blocking you’ from moving
          forwards, we then access the life-changing process that is Rapid
          Transformational Therapy .
        </p>
        <p className="text-xl font-bold text-center mt-16">
          Hypnotherapy for birth trauma
        </p>
        <p className="text-xl mt-16 bg-gray-100 p-10">
          Traditional therapy can involve many sessions, at not inconsiderable
          expense (time, money and emotional cost at being required to relive
          and retell events). By carefully accessing the subconscious mind –
          where events and experiences are ‘laid down’ as they were perceived at
          the time; embedded with the feelings and the meanings attributed at
          that space in time. RTT&#174; moves straight to the heart of the
          issue, taking you safely back, to the root, the reason, the cause of
          your disquiet and /or unhappiness or unwanted behaviour and
          facilitates a review of these scenes. This gives us the amazing
          opportunity to successfully alter our feelings and our perspectives.
          With me by your side, the episode is viewed from the standpoint of
          what you know now - from the knowledge you have gained since, and
          without the contributing effects of all that was going on at the time.
          All of the ‘white-noise’ which surrounds a trauma event - the
          emotions, the unknowns and corresponding power imbalance, the time
          pressures, the unfamiliar environment, jargon, the people, and of
          course, the fears.
        </p>
        <p className="text-xl mt-16 bg-gray-100 p-10">
          This enables us to work together to move through these events from a
          completely different position of understanding and empowerment –
          allowing you to see these events through a different lens, to feel
          these events differently and to give you understanding and closure and
          a way to move forwards.
        </p>
        <p className="text-xl mt-16 bg-gray-100 p-10">
          Rapid Transformational Therapy&#174; is used worldwide for the
          effective treatment of trauma and post-traumatic stress disorder
          (PTSD) and loss.
        </p>
        <p className="text-xl mt-16 bg-gray-100 p-10">
          It is used successfully for the treatment of anxiety, flash-backs and
          unresolved situations where ‘powerlessness’ has been at the very
          centre of the individual’s experience.
        </p>

        <p className="text-xl font-bold text-center mt-16">
          Let us Start Your Journey
        </p>

        <p className="text-xl mt-16">
          Marisa Peer  ‘A feeling will continue until it no longer needs to be
          felt’. So join with me to move those feelings out into the light where
          they can be safely seen, heard, understood and altered forever so they
          no longer need to be felt by you. <br /> <br />
          Rapid Transformational Therapy&#174; is used worldwide for the
          effective treatment of trauma and post-traumatic stress disorder
          (PTSD) and loss.
        </p>

        <p className="text-xl mt-16 text-center">
          Release them, and let them go. <br /> <br />
          A better tomorrow is achievable. <br /> <br />
        </p>
        <div className="flex items-center justify-center h-full p-10">
          <Link
            href="/contact"
            className="btn bg-amber-50 hover:bg-amber-200 font-extrabold"
          >
            Click here for a free discovery call
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Treatment;

import React from "react";
// import 'daisyui/dist/daisyui.css';
