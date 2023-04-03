import Layout from "../comps/Layout";
import Image from "next/image";
import VimeoPlayer from "../comps/VimeoPlayer";

export default function Home() {
  return (
    <Layout>
      <div
        className="hero h-[74vh] sm:h-[50vh] md:h-[65vh] lg:h-[70vh]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80)`,
          backgroundPosition: "top 150%",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay hero-overlay-sm bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h4 className="mb-5 text-5.5vw sm:text-8vw lg:text-9.5vw xl:text-11vw font-bold">
              Welcome
            </h4>
            <p className="mb-5 text-2.5vw sm:text-4vw">
              Hello there, my name is Dee.
              <br /> Working together, we can use Rapid Transformational Therapy
              (RTT) to quickly identify and address the root cause of your
              psychological trauma. <br /> Email me at: Dee@gmail.com. <br /> I
              am looking forward to working together.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="text-center my-10 px-10 py-20">
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
        <p className="text-center my-4 pt-10 italic">
          ‘We want to know what is going on inside us, so we can know what to
          let go. Instead of hiding our pain, we can release it totally.’
          <br />
          <span className="font-bold">Louise Hay.</span>
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
      <div>
        <div className="cardGridMargin grid md:grid-cols-3 gap-4 space-x-2.5 m-10">
          <div
            className="card border-4"
            style={{
              borderColor: "#FAFAFA",
              borderWidth: "6px",
              backgroundColor: "#d6eadf",
            }}
          >
            <div className="card-body">
              <h2 className="card-title">What is RTT?</h2>
              <p>
                RTT stands for Rapid Transformational Therapy. It was developed
                by the British therapist Marisa Peer, which combines NLP,
                hypnotherapy, psychotherapy, and CBT.
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
              backgroundColor: "#d6eadf",
            }}
          >
            <div className="card-body">
              <h2 className="card-title">Who is it for?</h2>
              <p>
                RTT is targetting towards overcoming anxiety disorder,low
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
              backgroundColor: "#d6eadf",
            }}
          >
            <div className="card-body">
              <h2 className="card-title">How does the treatment work?</h2>
              <p>
                The therapy generally involves a one-on-one session with a
                qualified RTT therapist.They lead client into a hypnotic state
                to access their subconscious mind and help them understand and
                alter their damaging beliefs and resulting behaviors.
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
