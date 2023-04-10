import Layout from "../../comps/Layout";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Layout>
      <div className="bg-lime-100 pb-10">
        <div className="mb-10">
          <p className="text-xl mb-2 font-bold text-center p-8 text-teal-950">
            Testimonials <br />
            <br />
            <span className="text-xl mt-2 mb-1 font-normal text-center">
              Read what my former clients have to say
            </span>
            {/* <span className="pb-5">Issues treated</span> */}
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-10">
          <div className="card w-full md:w-96 glass h-full bg-white">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1618481187862-904021f56177?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwb3V0bGluZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dawn, Essex</h2>
              <p>One Session</p>
              <p>
                I have been working with Dee for a month now and I am very
                impressed and over the moon with the results.
                <br /> <br />
                My issues where the constant craving of food , big sleep issues
                and anxiety. In this time my sleep has improved greatly so much
                so , I am no longer clock watching until the early hours and I
                am waking up feeling far more refreshed. <br /> <br />I feel a
                lot calmer in general and my stress levels have reduced. Now ..
                the food cravings, considering I use to crave and graze, I am
                pleased to say that my mind set has improved.
                <br /> <br />
                My diet has improved greatly and I am learning to make healthy
                choices. <br /> <br />I will admit this nut has not been
                completely cracked yet, and I do have good and bad days still
                but its early days , that said I am pleased that I have lost
                5lbs so far.
              </p>
            </div>
          </div>
          <div className="card w-full md:w-96 glass h-full bg-white">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1663436288752-a194140d2fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="book!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Jayne, Suffolk</h2>
              <p>
                2 Sessions - Jayne is now happy with her weight loss journey and
                requires no further input.
              </p>
              <p>
                I would thoroughly recommend this form of therapy.  I
                wouldn&#39;t believe it until I tried it myself. Hearing Dee’s
                calming  voice listening to the recording every night as I go
                off to sleep has had a real strong impact on my life.
                <br /> <br />
                Who knew the subconscious mind controlled so much of our
                Behaviours! I&#39;m feeling so much more in control and losing
                weight now with my changed relationship with food. In such a
                short space of time too! I still listen from time to time but I
                religiously played the recording every night for 21 days. 
                <br /> <br />
                Dee has a way about her that makes you feel at ease when you
                meet her. She is calm, caring and speaks softly I instantly have
                felt relaxed. I am recommending her to everyone I know who has
                any issue they are struggling with as I know this works!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
