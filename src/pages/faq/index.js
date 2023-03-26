import Layout from "../../comps/Layout";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Layout>
      <div
        className="hero h-[70vh] bg-cover"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)`,
          backgroundPosition: "top 100%",
          backgroundSize: "cover",
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
          Click on the options below
        </h1>
        <div className="stack">
          <Image
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Image 1"
            className="rounded profile-image"
            height={170}
            width={200}
            style={{
              borderRadius: "50%",
              margin: "30px",
            }}
          />
        </div>
      </div>
      <div style={{ padding: "0 10px", fontSize: "20px" }}>
        <div
          className="collapse"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "950px",
            Height: "30px",

            lineHeight: "30px",
          }}
        >
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-box"
            style={{
              border: "solid 2px #dde8d8",
              // borderColor: "black",
              borderRadius: "50px",
              backgroundColor: "#dde8d8",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              height: "30px",
              marginBottom: "12px",
              lineHeight: "30px",
            }}
          >
            Click me to show/hide content
          </div>
          <div
            className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
            style={{ textAlign: "center" }}
          >
            <p>hello</p>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 10px", fontSize: "20px" }}>
        <div
          className="collapse"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "950px",
            Height: "30px",

            lineHeight: "30px",
          }}
        >
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-box"
            style={{
              border: "solid 2px #dde8d8",
              // borderColor: "black",
              borderRadius: "50px",
              backgroundColor: "#dde8d8",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              height: "30px",
              marginBottom: "12px",
              lineHeight: "30px",
            }}
          >
            Click me to show/hide content
          </div>
          <div
            className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
            style={{ textAlign: "center" }}
          >
            <p>hello</p>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 10px", fontSize: "20px" }}>
        <div
          className="collapse"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "950px",
            Height: "30px",

            lineHeight: "30px",
          }}
        >
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-box"
            style={{
              border: "solid 2px #dde8d8",
              // borderColor: "black",
              borderRadius: "50px",
              backgroundColor: "#dde8d8",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              height: "30px",
              marginBottom: "12px",
              lineHeight: "30px",
            }}
          >
            Click me to show/hide content
          </div>
          <div
            className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
            style={{ textAlign: "center" }}
          >
            <p>hello</p>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 10px", fontSize: "20px" }}>
        <div
          className="collapse"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "950px",
            Height: "30px",

            lineHeight: "30px",
          }}
        >
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-box"
            style={{
              border: "solid 2px #dde8d8",
              // borderColor: "black",
              borderRadius: "50px",
              backgroundColor: "#dde8d8",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              height: "30px",
              marginBottom: "12px",
              lineHeight: "30px",
            }}
          >
            Click me to show/hide content
          </div>
          <div
            className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
            style={{ textAlign: "center" }}
          >
            <p>hello</p>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 10px", fontSize: "20px" }}>
        <div
          className="collapse"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "950px",
            Height: "30px",

            lineHeight: "30px",
          }}
        >
          <input type="checkbox" className="peer" />
          <div
            className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-box"
            style={{
              border: "solid 2px #dde8d8",
              // borderColor: "black",
              borderRadius: "50px",
              backgroundColor: "#dde8d8",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              height: "30px",
              marginBottom: "12px",
              lineHeight: "30px",
            }}
          >
            Click me to show/hide content
          </div>
          <div
            className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
            style={{ textAlign: "center" }}
          >
            <p>hello</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
