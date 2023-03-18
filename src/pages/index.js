import Head from "next/head";
import Link from "next/link";
import Layout from "../comps/Layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card } from "daisyui";

export default function Home() {
  return (
    <Layout>
      <div
        className="hero h-[65vh]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80)`,
          backgroundPosition: "top 150%",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay hero-overlay-sm bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="mb-5 text-5xl font-bold">Welcome</h2>
            <p className="mb-5">
              Hello there, my name is Dee.<br></br> Working together, we can use
              Rapid Transformational Therapy (RTT) to quickly identify and
              address the root cause of your psychological trauma and set your
              mind to rest.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "70px", padding: "40px" }}>
        <h2>Dee Macey - How I can help</h2>
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
              <h2 className="card-title">Card 1</h2>
              <p>Some text here.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Action 1</button>
                <button className="btn btn-secondary">Action 2</button>
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
              <h2 className="card-title">Card 2</h2>
              <p>Some text here.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Action 1</button>
                <button className="btn btn-secondary">Action 2</button>
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
              <h2 className="card-title">Card 3</h2>
              <p>Some text here.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Action 1</button>
                <button className="btn btn-secondary">Action 2</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
