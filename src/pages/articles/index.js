import Layout from "../../comps/Layout";
import Image from "next/image";
import Link from "next/link";
import { HiHandRaised } from "react-icons/hi";

const Articles = () => {
  return (
    <Layout>
      <div className="text-center my-3 px-2 py-2 sm:py-7 mt-9">
        <h1 className="font-bold text-0.5xl sm:text-1xl md:text-2xl lg:text-3xl mb-10">
          Addressing Common Misconceptions about RTT and Hypnotherapy
        </h1>
        <div className="mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1523537444585-432d2bacc10d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="profile picture of therapist smiling with a green background"
            className="rounded profile-image"
            height={180}
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
          In this article, I’d love to shatter some general misconceptions about
          hypnotherapy that quite frankly drive me up the wall.
        </p>
        <p className="text-xl font-bold text-center mt-16 text-green-900">
          &#39;RTT is just like traditional hypnotherapy&#39;
        </p>
        {/* <p className="text-xl font-bold text-center mt-16">
          How is RTT different to traditional hypnotherapy?
        </p> */}
        <p className="text-xl mt-16 bg-lime-50 p-10">
          I am Licensed Rapid Transformational Therapy&#174; Practitioner. Rapid
          Transformational Therapy or RTT is a modality created by UK&#39;s top
          therapist Marisa Peer and combines the best from hypnotherapy, NLP,
          and traditional psychotherapy. That in essence means that, unlike
          traditional hypnotherapy, I won&#39;t just be giving you suggestions
          but actually finding the root cause of the issue.
        </p>

        <p className="text-xl font-bold text-center mt-16  text-green-900">
          &#39;Hypnotherapy in RTT is trying to control my mind&#39;
        </p>
        <p className="text-xl mt-16 bg-lime-50 p-10">
          1. Hypnotherapy is NOTHING BUT a way to tap into your subconscious
          mind. We can then access some memories and emotions that your
          conscious mind may have suppressed, and indeed those very memories or
          emotions may be holding you back.
        </p>
        <p className="text-xl font-bold text-center mt-16  text-green-900">
          &#39;RTT is a so-called &#39;woo-woo&#39; science&#39;
        </p>
        <p className="text-xl mt-16 bg-lime-50 p-10">
          2. It’s not woo-woo science and scientific research is abundant.
          Hypnobirth, for example, is becoming more and more popular these days.
          Some approaches based on hypnotherapy such as EMDR have been accepted
          by the WHO for decades, and are - for all of you science- lovers - an
          evidence-based approach.
        </p>
        <p className="text-xl font-bold text-center mt-16  text-green-900">
          &#39;I have never experienced a hypnotic state before&#39;
        </p>
        <p className="text-xl mt-16 bg-lime-50 p-10">
          3. Hypnosis is just a light state of trance or relaxation, very
          similar to mediation which I am sure 99% of you have done at least
          once, your brain goes in alpha brain wave (or theta in deeper states),
          that&#39;s pretty much it.
        </p>
        <p className="text-xl mt-16 bg-lime-50 p-10">
          4. I cannot make you moo like a cow or quack like a duck - of course,
          you want me to, of course, then we can give it a go, and results are
          not guaranteed but I, for one, am bound to have some fun! In other
          words, there&#39;s nothing that I cannot make you do unless you
          already want to do it.
        </p>
        <p className="text-xl mt-16 bg-lime-50 p-10">
          5. Related to point 3, you don&#39;t &quot;feel&quot; hypnotised. In
          fact, the most you feel is relaxation, potentially some fluttering of
          your eyelids, called REM, the same state as when you are asleep, only
          you are awake during hypnosis. Again, it&#39;s very similar to a
          meditative state. So feeling like &quot;it&#39;s not working&quot; is
          quite normal. Your mind doesn&#39;t GO anywhere, you are simply
          relaxed.
        </p>
        <p className="text-xl font-bold text-center mt-16 mb-12  text-green-900">
          &#39;I have seen stage hypnotists, so I do not trust a
          hypnotherapist&#39;
        </p>
        <div className="mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1592947945242-69312358628b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGh5cG5vc2lzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="profile picture of therapist smiling with a green background"
            className="rounded profile-image"
            height={180}
            width={200}
            layout="fixed"
            objectFit="cover"
            style={{
              borderRadius: "50%",
              margin: "20px auto",
            }}
          />
        </div>
        <p className="text-xl mt-16 bg-lime-50 p-10">
          Unfortunately, many stage hypnotists have tainted the reputation of
          hypnosis (Darren Brown, for one, is very popular in the UK), and by
          the association of hypnotherapy, making it even harder to explain to
          folks how and why it works, and why we can&#39;t make you moo or quack
          unless you want to. And making it seem like the best use of it - and
          guess what those people that go on stage to be hypnotised and quack,
          do it because they want to!
        </p>
        <p className="text-xl mt-16 bg-bg-lime-50 p-10">
          They have indeed allowed themselves to tap into their subconscious...
        </p>
        <p className="text-xl mt-16 bg-sky-50 p-10">
          And isn’t it ironic how our so-called conscious mind is actually the
          most unconscious thing there is sometimes? We go to work, we live in
          our little box, we raise kids, and then we wonder where life has gone!
          We have no conscious recollection of most things that happened to us,
          of where most of our habits came from, or how we became exactly like -
          or the complete opposite of - those who raised us? Or we cannot lose
          weight, handle relationships or stop drinking?
        </p>

        <p className="text-xl font-bold text-center mt-16">
          Let&#39;s Start Your Journey
        </p>
        <div className="mx-auto m-10">
          <Image
            src="https://images.unsplash.com/photo-1456894332557-b03dc5cf60d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            alt="profile picture of therapist smiling with a green background"
            className="rounded profile-image"
            height={180}
            width={200}
            layout="fixed"
            objectFit="cover"
            style={{
              borderRadius: "50%",
              margin: "20px auto",
            }}
          />
        </div>
        <p className="text-xl mt-16 bg-sky-50 p-10">
          On the contrary, the subconscious mind is where all your life
          experience is stored, all of the answers to all of your fears,
          questions and doubts can be found too. And all infinite wisdom too.
        </p>
        <p className="text-xl mt-16 bg-sky-50 p-10">
          So can it be that the subconscious is actually the source of true
          consciousness and the conscious mind is, well, not so conscious at
          all? Just a brain twister to think about as you go to sleep tonight...
        </p>
        <p className="text-xl mt-16 bg-sky-50 p-10">
          One thing is certain: your subconscious truly has all the answers, to
          every area, every goal, every problem you ever had, so isn&#39;t it
          about time we brought made those a little more conscious?
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

export default Articles;
