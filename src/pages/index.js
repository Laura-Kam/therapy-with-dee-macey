import Layout from "../comps/Layout";
import Image from "next/image";
import VimeoPlayer from "../comps/VimeoPlayer";
import Link from "next/link";
import MarissaPeerContentHomepage from "@/comps/HomepageComponents/MarissaPeerContentHomepage";

export default function Home() {
  return (
    <Layout>
      <div
        className="hero h-[74vh] sm:h-[50vh] md:h-[65vh] lg:h-[70vh]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1464288550599-43d5a73451b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(110%)",
        }}
      >
        <div className="hero-overlay hero-overlay-sm bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content p-0 bg-white rounded-lg m-3 p-3">
          <div className="max-w-sm">
            <h1 className="mb-5 font-bold text-3xl">Welcome</h1>
            <p className="mb-5 text-2.5vw sm:text-4vw">
              <span className="text-lg"> How can I help? My name is Dee.</span>
              <br />
              <br /> I am a Certified Hypnotherapist, <br />
              Rapid Transformational Therapy Therapist <br></br>and a Registered
              Midwife. <br />
              <br></br> Email me at: DeeMaceyTherapy@gmail.com. <br /> I am
              looking forward to working together.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div class="text-center my-2 px-2 py-2 sm:py-7 mt-9">
        <h1 className="font-bold text-0.5xl sm:text-1xl md:text-2xl lg:text-3xl mb-10">
          How can I help?
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
          ‘We want to know what is going on inside us, so we can know what to
          let go. Instead of hiding our pain, we can release it totally.’
          <br />
          <span className="font-bold">Louise Hay.</span>
        </p>
        <p className="text-xl mt-16">
          I am a Certified Hypnotherapist, Rapid Transformational Therapy
          Therapist&#174; and a Registered Midwife. My specialist area is
          helping individuals through fears which may exist surrounding birth
          and assisting those who are experiencing birth trauma - when events
          haven’t gone quite as was anticipated. This support is extended to
          include all those affected by adverse experiences concerning birth.
          Please click here for more information{" "}
          <Link href="/about" className="link text-bold text-blue-500">
            About Me
          </Link>
          , for{" "}
          <Link href="/whatisrtt" className="link text-bold text-blue-500">
            What is RTT&#174;?,{" "}
          </Link>
          <Link href="/whatisrtt" className="link text-bold text-blue-500">
            Who is it for?{" "}
          </Link>{" "}
          and{" "}
          <Link href="/whatisrtt" className="link text-bold text-blue-500">
            What can RTT&#174; be used for?{" "}
          </Link>
          as well as{" "}
          <Link href="/faq" className="link text-bold text-blue-500">
            Frequently Asked Questions{" "}
          </Link>
          - especially useful when considering using hypnosis for the first
          time.
        </p>
        <p className="text-xl mt-16 font-bold text-center">
          Please click{" "}
          <Link href="/contact" className="link text-bold text-blue-500">
            here{" "}
          </Link>
          to schedule a free Discovery call.
        </p>
        <p className="text-xl mt-16">
          It is accepted that many people worldwide have utilized and realized
          the benefits of accessing therapy with the aim of changing what
          currently is. However which therapy and which therapist is right for
          you? Sometimes it as simple as what ‘feels right’, but perhaps it
          might be easier to consider what is it you want? What would you like
          to change? What would your better tomorrow look like? Have you ever
          considered something different?. . . Rapid Transformational
          Therapy&copy;.
        </p>
      </div>
      <div>
        <h2 className="flex justify-center items-center font-bold text-lg my-8">
          Watch the video to find out more
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* "https://vimeo.com/670217387" */}
        <VimeoPlayer videoId={"670217387"} />
      </div>
      <MarissaPeerContentHomepage />
      <div>
        <div className="cardGridMargin grid md:grid-cols-3 gap-4 space-x-2.5 m-10">
          <div
            className="card border-4"
            style={{
              borderColor: "#FAFAFA",
              borderWidth: "6px",
              backgroundColor: "#dbe8d7",
            }}
          >
            <div className="card-body">
              <h2 className="card-title">What is RTT?</h2>
              <p>
                RTT stands for Rapid Transformational Therapy&#174;. It was
                developed by the British therapist Marisa Peer, which combines
                NLP, hypnotherapy, psychotherapy, and CBT.
              </p>
              <div className="card-actions button-style">
                <button className="btn btn-primary">Find Out More</button>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{
              borderColor: "#FAFAFA",
              borderWidth: "6px",
              backgroundColor: "#dbe8d7",
            }}
          >
            <div className="card-body">
              <h2 className="card-title">Who is it for?</h2>
              <p>
                RTT&#174; is targetting towards overcoming anxiety disorder,low
                self-esteem, stress, depression, low self-esteem and panic
                attacks.
              </p>
              <div className="card-actions button-style">
                <button className="btn btn-primary">Find Out More</button>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              borderColor: "#FAFAFA",
              borderWidth: "6px",
              backgroundColor: "#dbe8d7",
            }}
          >
            <div className="card-body">
              <h2 className="card-title">How does the treatment work?</h2>
              <p>
                The therapy generally involves a one-on-one session with a
                qualified RTT&#174; therapist.They lead client into a hypnotic
                state to access their subconscious mind and help them understand
                and alter their damaging beliefs and resulting behaviors.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary button-style">
                  Find Out More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* video added, you need to style it */}
      </div>
    </Layout>
  );
}
