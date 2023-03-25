import Layout from "../../comps/Layout";

const Testimonials = () => {
  return (
    <Layout>
      <div
        className="hero h-[60vh] bg-cover"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)`,
          // backgroundPosition: "top 100%",
          // backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay hero-overlay-sm bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div>
              <h5
                className="mb-5 text-5xl font-bold"
                style={{ fontSize: "35px" }}
              >
                FAQs
              </h5>
              <p style={{ fontSize: "22px" }}>How can I help you?</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "180px" }}>
          <input
            type="text"
            placeholder="Search here"
            className="input w-full max-w-xs"
            style={{ width: "290px" }}
          />
        </div>
      </div>
      <div>
        <div
          className="dropdown dropdown-hover"
          style={{
            height: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            tabIndex={0}
            className="btn m-3"
            style={{ backgroundColor: "#dde8d8", width: "270px" }}
          >
            Choose an option
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>What is the cost?</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "0px",
          padding: "40px",
          backgroundColor: "white",
        }}
      >
        <div></div>
        <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
          Frequently Asked Questions
          <br></br>
          <span style={{ fontWeight: "normal", fontSize: "20px" }}>
            Our first consultation is free
          </span>
          <br></br>
          <span style={{ fontSize: "17px", fontWeight: "normal" }}>
            Let us start your journey
          </span>
        </h1>
        <div className="stack">
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Image 1"
            className="rounded profile-image"
            style={{
              height: "170px",
              width: "200px",
              borderRadius: "50%",
              margin: "30px",
            }}
          />
        </div>
        <h1>FAQs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
      </div>
    </Layout>
  );
};

export default Testimonials;
