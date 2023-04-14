import Layout from "../../comps/Layout";
import styles from "../../styles/About.module.css";
import HeroImageAboutMe from "@/comps/HeroImageAboutMe";
import Link from "next/link";
import Head from "next/head";

const About = () => {
  return (
    <div>
      {/* key words needed */}
      <Head>
        <title>About Me</title>
        <meta name="description" content="Dee Macey " />
        <meta name="keywords" content="next.js, keywords, search" />
      </Head>
      <Layout>
        <HeroImageAboutMe />
        <div className="bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://images.unsplash.com/photo-1574706472790-f24ebe0510ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="m-12">
              <h1 className="text-2xl font-bold">Where It All Began</h1>
              <p className="py-6">
                I started my Midwifery training in 1996, qualifying in 1999. I
                have experience right across the care continuum of pregnancy,
                birth and the postnatal period, finishing my career within the
                NHS as a senior midwife in 2023. <br />
                <br />I was inspired to change as I have reached a point in my
                life and my career where this ‘just feels right’. So, I did it –
                I retrained because I have been truly inspired by changes I have
                experienced for myself using RTT&#174; and have been privileged
                to witness first-hand whilst training alongside Marisa Peer.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://images.unsplash.com/photo-1589733126193-a91e19b91ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3ViY29uc2Npb3VzJTIwJTIwbWluZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="m-12">
              <h1 className="text-2xl font-bold">
                I Discovered the Subconscious Mind
              </h1>
              <p className="py-6">
                The power of the subconscious mind will never cease to amaze me
                – how we think we’re in control but actually our subconscious
                mind is in the driving seat. A little like when you learn to
                drive and your Instructor has a set of controls all their own,
                so if they feel the need to take-over, because they don’t feel
                ‘safe’, then they do. <br />
                <br />
                <p>
                  For example: Why do I repeatedly get to my goal weight, only
                  to regain all that was lost and some? Well, the key will be in
                  your subconscious mind. Why do I find interviews so
                  challenging or exams, or why do I have a fear of cotton wool?
                  Again – all of these answers are stored in your subconscious
                  mind, and as its job is to keep you safe (or its
                  interpretation and belief about what constitutes ‘safe’), it
                  will continue to keep you ‘safe’ until those beliefs are
                  overlayed, re-wired or re-coded. As far as the subconscious
                  mind is concerned – it knows best. It knows what works for
                  you. The truth is, it may have worked for you when you were 4
                  or 6 or 10, but at 54? Or 32? Those same rules quite probably
                  don’t apply but the subconscious mind believes they do.
                  RTT&#174; recodes and rewrites the subconscious mind - it is
                  the tool for the job. And this is why RTT for me is so
                  amazing and has been so worth the personal time and financial
                  investment.
                </p>
                <p>
                  <br /> I have been involved in care since 1996 and put simply,
                  I wish to continue.
                </p>
                <br />
                <span className="italic">
                  ‘As one person I cannot change the world, but I can change the
                  world of one person’.{" "}
                </span>
                <span className="not-italic">Paul Shane Spear</span>
                <p>
                  <span className="italic">
                    To be able to change one person’s world – what a gift; a
                    privilege . . . an opportunity.
                  </span>{" "}
                  <span className="not-italic">Tony Robinson?</span>
                </p>
              </p>
              <Link
                href="/contact"
                className="btn bg-amber-50 hover:bg-amber-200 font-extrabold"
              >
                Try a discovery call
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
