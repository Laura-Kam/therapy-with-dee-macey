import Layout from "../comps/Layout";
import Image from "next/image";
import VimeoPlayer from "../comps/VimeoPlayer";

export default function Home() {
  return (
    <Layout>
      <div
        // the sm: set's it to a smaller percentage of viewport on mobile
        className="hero h-[74vh] sm:[h-50vh]"
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
      <div style={{ textAlign: "center", margin: "10px", padding: "40px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "22px", margin: "30px" }}>
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
              margin: "20px",
            }}
          />
        </div>
      </div>
      <div
        style={{ marginLeft: "230px", marginRight: "230px", fontSize: "21px" }}
      >
        <p
          style={{
            textAlign: "center",
            margin: "14px",
            marginTop: "0px",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <span style={{ fontStyle: "italic" }}>
            ‘We want to know what is going on inside us, so we can know what to
            let go.<br></br> Instead of hiding our pain, we can release it
            totally.’
          </span>{" "}
          Louise Hay.<br></br>
        </p>
        <p
          style={{
            fontSize: "20px",
            display: "flex",
            marginTop: "40px",
          }}
        >
          It is accepted that many people worldwide have utilized and realized
          the benefits of accessing therapy with the aim of changing what
          currently is. <br></br>
          <br></br>However which therapy and which therapist is right for you?
          Sometimes it as simple as what ‘feels right’, but perhaps it might be
          easier to consider what is it you want? What would you like to change?
          What would your better tomorrow look like? Have you ever considered
          something different?. . . Rapid Transformational Therapy&copy;.{" "}
        </p>
      </div>
      <div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
            fontWeight: "bold",
            fontSize: "21px",
          }}
        >
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
