import Head from "next/head";
import Link from "next/link";
import Layout from "../comps/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        {/* check how these two classes are working correctly */}
        <h1 className="font-bold text-9xl">Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <Link href="/treatment">Click here to learn how RTT works</Link>
      </div>
    </Layout>
  );
}
