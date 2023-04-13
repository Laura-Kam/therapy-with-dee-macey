import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* meta tag and keywords */}
        <meta
          name="description"
          content="Certified Hypnotherapist, Rapid Transformational Therapy® Therapist, and Registered Midwife specializing in birth-related fears and trauma. Change your life in as little as one session."
        />
        <meta
          name="keywords"
          content="Rapid Transformational Therapy, RTT, Dee Macey, Marisa Peer, Hypnosis, Hypnotherapy, Birth Trauma, Anxiety, Depression, Fear, Suffolk, Essex, Colchester, Sidbury, Ipswich, Weight Loss, Therapy, Stop Smoking, Compulsive Behaviour, Compulsions, Psychotherapy, CBT, Cognitive Behavioural Therapy, General Hypnotherapy Register, Natural Healthcare Council, subconscious mind, rewire, sessions, addiction, motivation, guilt, negative repetitive thoughts, stress, sexual problems, disconnection, phobia, phobias, social anxiety, public speaking, grief, addict, addiction to drugs"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
