import Link from "next/link";

const HeroImageAboutMe = () => {
  return (
    <div className="bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="m-12">
          <h1 className="text-3xl font-bold">Who am I?</h1>
          <p className="py-6">
            I have been involved in care since 1996 and put simply, I wish to
            continue. <br />
            <br />
            Dee Macey BSc. (Hons). Registered Midwife. PG Dip. Leadership in
            Healthcare. <br /> Hypnobirthing Teacher and Practitioner, Rapid
            Transformational Therapy&#174; Therapist and Certified
            Hypnotherapist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImageAboutMe;
