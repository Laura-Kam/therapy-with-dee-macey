import Link from "next/link";
import Image from "next/image";

const InfoBoxesHomepage = () => {
  return (
    <div>
      <div className="cardGridMargin grid md:grid-cols-3 gap-4 space-x-2.5 m-10">
        <div
          className="card border-4"
          style={{
            borderColor: "#FAFAFA",
            borderWidth: "6px",
            backgroundColor: "#dbe8d7",
          }}
        >
          <div className="card-body">
            <h2 className="card-title">
              What do you want to change in your life?
            </h2>
            <p>
              Please take a moment to consider what it is you want from your
              life – what would you love to change? What brought you to this
              page? Some examples . . . - Something physical i.e. Weight -
              Motivation i.e. to be more motivated to study, to get that job you
              have always wanted or to go to the gym or a dance class - An
              addiction. Would you like to stop smoking once and for all? -
              Guilt – finally put down that heavy burden you have been carrying
              for so long it feels like it’s a part of you. - Anxiety – to have
              the opportunity to understand why you feel anxious. What is
              driving it? - Money blocks – dig deep to discover why you believe
              money is not for you and how this has influenced your life -
              Remove those ‘looping thoughts’
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
            backgroundColor: "#dbe8d7",
          }}
        >
          <div className="card-body">
            <h2 className="card-title">Who is it for?</h2>
            <p>
              RTT&#174; is targetting towards overcoming anxiety disorder,low
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
            backgroundColor: "#dbe8d7",
          }}
        >
          <div className="card-body">
            <h2 className="card-title">How does the treatment work?</h2>
            <p>
              The therapy generally involves a one-on-one session with a
              qualified RTT&#174; therapist.They lead client into a hypnotic
              state to access their subconscious mind and help them understand
              and alter their damaging beliefs and resulting behaviors.
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
  );
};

export default InfoBoxesHomepage;
