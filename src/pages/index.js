import ReactPlayer from "react-player/vimeo";
import Layout from "../comps/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div
        className="hero h-[74vh]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80)`,
          backgroundPosition: "top 150%",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay hero-overlay-sm bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h4 className="mb-5 text-5xl font-bold">Welcome</h4>
            <p className="mb-5">
              Hello there, my name is Dee.<br></br> Working together, we can use
              Rapid Transformational Therapy (RTT) to quickly identify and
              address the root cause of your psychological trauma. <br></br>{" "}
              Email me at: Dee@gmail.com. <br></br> I am looking forward to
              working together.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "70px", padding: "40px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
          How can I help?
        </h1>
        <div className="stack">
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
              margin: "30px",
            }}
          />
        </div>
        <p style={{ textAlign: "center", margin: "25px", padding: "20px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
      </div>
      <div>
        <div className="cardGridMargin grid grid-cols-3 gap-4 space-x-2.5 m-10">
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
        <div>
          <p>Video</p>
          <ReactPlayer
            url="https://vimeo.com/670217387"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
          />
        </div>
      </div>
    </Layout>
  );
}
