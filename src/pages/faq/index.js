import Layout from "../../comps/Layout";
import Image from "next/image";

const FAQs = () => {
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
              <p className="text-2xl">How can I help you?</p>
            </div>
          </div>
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
      {/* FAQ questions outer div */}
      <div className="faqQuestions">
        <div className="p-10 pt-1 pb-1 text-xl">
          {/* mx means margin left and right - all relative to rem  will only work with given values i.e not mx-50*/}
          <div className="collapse mx-full md:mx-28 lg:mx-40 w-auto h-30">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content border rounded-full text-center flex justify-center mb-3 h-8"
              style={{
                backgroundColor: "#dde8d8",
              }}
            >
              Can hypnosis work for everyone?
            </div>
            <div
              className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
              style={{ textAlign: "left" }}
            >
              <p>
                If you are able to relax, and agree to be hypnotised then yes.
                However, there are certain medical/mental health conditions
                which would prohibit accessing this therapy i.e. schizophrenia.{" "}
                <br />
                <br />
                If you currently find yourself in a state of hyper-vigilance,
                then it may be that getting you to relax will be the first stage
                of your journey. Hypnosis is actually a part of everyday life –
                when we day dream, get lost in a film or experience the
                sensation of having driven somewhere but cannot remember the
                journey . . . that’s hypnosis. <br /> It’s the alteration in
                brain-wave ‘cycles’ from Beta (alert and engaged) to the
                Alpha-Theta border, a slower cycle where you are still conscious
                of your surroundings but your body is in deep relaxation.
                Hypnosis feels like the point, just before sleep, when you are
                completely aware of everything (so still in control) but
                detached and deeply relaxed.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 pt-1 pb-1 text-xl">
          {/* mx means margin left and right - all relative to rem  will only work with given values i.e not mx-50*/}
          <div className="collapse mx-full md:mx-28 lg:mx-40 w-auto h-30">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content border rounded-full text-center flex justify-center mb-3 h-8"
              style={{
                backgroundColor: "#dde8d8",
              }}
            >
              How will I feel after a session?
            </div>
            <div className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content text-left">
              <p>
                Relieved. Calm. Like a weight has been lifted. Sometimes
                excited. Some feel surprised that they can remember everything –
                there is a common misconception that you won’t remember – but
                you do. The mind operates in complete clarity in hypnosis.
                However you feel, it’s good to stay with these positive
                feelings, giving the mind the opportunity to process new
                thoughts and to discard old and limiting beliefs.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 pt-1 pb-1 text-xl">
          {/* mx means margin left and right - all relative to rem  will only work with given values i.e not mx-50*/}
          <div className="collapse mx-full md:mx-28 lg:mx-40 w-auto h-30">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content border rounded-full text-center flex justify-center mb-3 h-8"
              style={{
                backgroundColor: "#dde8d8",
              }}
            >
              How can this work with only one or two sessions?
            </div>
            <div
              className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
              style={{ textAlign: "left" }}
            >
              <p>
                RTT&#174; works differently to conventional therapies, as less
                time is spent on ‘what you don’t want’. The focus is always on
                how you would like your tomorrow to look and feel. Using
                regression under hypnosis affords the therapist the opportunity
                through understanding to erase and eradicate thoughts and
                beliefs that have been holding you back. <br />
                <br />
                Because these thoughts and beliefs are embedded in our
                subconscious, sometimes we are completely unaware that these are
                controlling and dictating our life choices. Hypnosis and
                RTT&#174; enables the recoding and rewiring of the subconscious
                mind with your chosen desires and wishes for your future firmly
                in the line of sight. Each session will require you to listen to
                your bespoke audio (max. 20 minutes) each day for 21 days. It
                takes 21 days to create new neural pathways within the brain. 21
                days to recode, rewrite and rewire your subconscious with new
                positive, constructive and restorative beliefs.
                <br />
                <br />
                21 days for a better tomorrow.
                <br />
                <br />
                A therapy session is approximately 90 minutes.
                <br />
                <br />
                Each audio is bespoke. Made especially for you following your
                therapy session.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 pt-1 pb-1 text-xl">
          {/* mx means margin left and right - all relative to rem  will only work with given values i.e not mx-50*/}
          <div className="collapse mx-full md:mx-28 lg:mx-40 w-auto h-30">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content border rounded-full text-center flex justify-center mb-3 h-8"
              style={{
                backgroundColor: "#dde8d8",
              }}
            >
              Do I need to be face-face?
            </div>
            <div
              className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
              style={{ textAlign: "left" }}
            >
              <p>
                No. We care happy to do sessions virtually – whatever will work
                best for you.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 pt-1 pb-1 text-xl">
          {/* mx means margin left and right - all relative to rem  will only work with given values i.e not mx-50*/}
          <div className="collapse mx-full md:mx-28 lg:mx-40 w-auto h-30">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content border rounded-full text-center flex justify-center mb-3 h-8"
              style={{
                backgroundColor: "#dde8d8",
              }}
            >
              Will the hypnotherapist be able to control me?
            </div>
            <div
              className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
              style={{ textAlign: "left" }}
            >
              <p>
                No, absolutely not. When you are in hypnosis you are not asleep.
                You are completely aware and in control at all times. No
                therapist will be able to ‘make’ you do anything you choose not
                to. i.e. divulge your bank account and personal identification
                number (PIN)! Nor will you share anything you do not wish to
                whilst in hypnosis. You remain in control of you, at all times.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 pt-1 pb-1 text-xl">
          {/* mx means margin left and right - all relative to rem  will only work with given values i.e not mx-50*/}
          <div className="collapse mx-full md:mx-28 lg:mx-40 w-auto h-30">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content border rounded-full text-center flex justify-center mb-3 h-8"
              style={{
                backgroundColor: "#dde8d8",
              }}
            >
              If I’m coming to you for trauma – will I be scared?
            </div>
            <div
              className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
              style={{ textAlign: "left" }}
            >
              <p>
                In hypnosis, events can only be reviewed and not relived. You
                will see past events as if you are watching from a distance so
                you will feel safe. You may well feel emotion(s) but this should
                be seen as a positive as these are the emotions which may be
                driving a feeling and/or a behaviour you wish to change. Feeling
                these emotions is short-lived, just while a scene or memory is
                reviewed and it is during this review that healing begins.
                <br /> <br />
                Your amazing mind will be choosing your memories to be reviewed
                – the therapist will have no prior knowledge of where your mind
                will take you but please be assured that if your mind is taking
                you there – it will be for a reason. Something in that memory
                still needs to be seen and/or felt and ultimately understood. It
                is this understanding that you will take forward out of the
                session and is an integral part of healing. ‘Ah, so that’s why I
                feel this way’, ‘Wow – I had no idea that I still carried this
                with me’ are frequent comments.
                <br /> <br />
                ‘Enlightenment’ is a good word to describe this process and
                consequent feelings.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 pt-1 pb-1 text-xl">
          {/* mx means margin left and right - all relative to rem  will only work with given values i.e not mx-50*/}
          <div className="collapse mx-full md:mx-28 lg:mx-40 w-auto h-30">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content border rounded-full text-center flex justify-center mb-3 h-8"
              style={{
                backgroundColor: "#dde8d8",
              }}
            >
              Can RTT&#174; work for me?
            </div>
            <div
              className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
              style={{ textAlign: "left" }}
            >
              <p>
                If your heart’s desire is for change, then RTT&#174;can
                definitely work for you. This will be dependent on you listening
                to your bespoke audio for at least 21 days and for you to be
                willing to enter into a ‘hypnosis contract’. This is your
                willingness to go into hypnosis with your therapist.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 pt-1 pb-1 text-xl">
          {/* mx means margin left and right - all relative to rem  will only work with given values i.e not mx-50*/}
          <div className="collapse mx-full md:mx-28 lg:mx-40 w-auto h-30">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content border rounded-full text-center flex justify-center mb-3 h-8"
              style={{
                backgroundColor: "#dde8d8",
              }}
            >
              What can RTT&#174; be used for?
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
              <div className="divide-y divide-gray-200">
                <ul className="list-disc pl-4">
                  <li>Anxiety</li>
                  <li>Phobias</li>
                  <li>Weight Issues</li>
                  <li>Food / Diet</li>
                  <li>Anorexia</li>
                  <li>Bulimia</li>
                  <li>Confidence</li>
                </ul>
              </div>
               Interview skills  Money blocks  Trauma  Stress  Panic
              Attacks  Depression  Guilt  PTSD  Birth  Birth Trauma  Pain
              control
              <div className="divide-y divide-gray-200">
                <ul className="list-disc pl-4">
                  <li>Self-Esteem</li>
                  <li>Motivation</li>
                  <li>Interview Skills</li>
                  <li>Money blocks</li>
                  <li>Trauma</li>
                  <li>Stress</li>
                  <li>Panic Attacks</li>
                  <li>Depression</li>
                  <li>Guilt</li>
                </ul>
              </div>
              <div className="divide-y divide-gray-200">
                <ul className="list-disc pl-4">
                  <li>PTSD</li>
                  <li>Birth</li>
                  <li>Birth Trauma</li>
                  <li>Pain Control</li>
                </ul>
              </div>
              <div className="divide-y divide-gray-200">
                <ul className="list-disc pl-4">
                  <li>Addictions</li>
                  <li>Drinking</li>
                  <li>Smoking</li>
                  <li>Drugs</li>
                  <li>Disconnection</li>
                  <li>Feeling blocked</li>
                  <li>Grief</li>
                  <li>Finding love</li>
                  <li>Exams</li>
                  <li>Sexual Problems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 pt-1 pb-1 text-xl">
          {/* mx means margin left and right - all relative to rem  will only work with given values i.e not mx-50*/}
          <div className="collapse mx-full md:mx-28 lg:mx-40 w-auto h-30">
            <input type="checkbox" className="peer" />
            <div
              className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content border rounded-full text-center flex justify-center mb-3 h-8"
              style={{
                backgroundColor: "#dde8d8",
              }}
            >
              Will the hypnotherapist be able to control me?
            </div>
            <div
              className="collapse-content bg-grey-100 text-primary-content peer-checked:bg-white peer-checked:text-secondary-content"
              style={{ textAlign: "left" }}
            >
              <p>
                No, absolutely not. When you are in hypnosis you are not asleep.
                You are completely aware and in control at all times. No
                therapist will be able to ‘make’ you do anything you choose not
                to. i.e. divulge your bank account and personal identification
                number (PIN)! Nor will you share anything you do not wish to
                whilst in hypnosis. You remain in control of you, at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
