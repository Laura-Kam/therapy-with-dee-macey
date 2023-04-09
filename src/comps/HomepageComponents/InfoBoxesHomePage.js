import Link from "next/link";
import Image from "next/image";

const InfoBoxesHomepage = () => {
  return (
    <div className="outer-div bg-sky-200 mb-18">
      <div className="">
        <p className="text-xl mb-2 font-bold text-center p-8">
          What are the benefits of RTT for you? <br />
          <br />
          <p className="text-xl mt-2 mb-1 font-normal text-center">
            Please take a moment to consider what it is you want from your life
            – what would you love to change?
            <br /> What brought you to this page? Some examples . . .
          </p>
          {/* <span className="pb-5">Issues treated</span> */}
        </p>
      </div>
      <div className="">
        <div className="flex flex-wrap justify-center p-5">
          <div className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 bg-base-100 shadow-xl mx-2 my-2 bg-slate-50">
            <figure className="px-10 pt-5">
              <img
                src="https://images.unsplash.com/photo-1559724087-a45f6a7a35d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80"
                alt="Shoes"
                className="rounded-xl h-45 sm:h-45 md:h-50 lg:h-50 xl:h-50 w-auto sm:w-55 md:w-60 lg:w-65 xl:w-60"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Weight</h2>
              <p className="text-sm">
                What weight would you like to be to feel healthy?
              </p>
            </div>
          </div>

          <div className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 bg-base-100 shadow-xl mx-2 my-2 bg-slate-50">
            <figure className="px-10 pt-5">
              <img
                src="https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Shoes"
                className="rounded-xl h-45 sm:h-45 md:h-50 lg:h-50 xl:h-50 w-auto sm:w-55 md:w-60 lg:w-65 xl:w-60"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Motivation</h2>
              <p className="text-sm">
                I.e. to be more motivated to study, to get that job you have
                always wanted or to go to the gym or a dance class
              </p>
            </div>
          </div>

          <div className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 bg-base-100 shadow-xl mx-2 my-2 bg-slate-50">
            <figure className="px-10 pt-5">
              <img
                src="https://images.unsplash.com/photo-1465658428880-830aab5e4e30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Shoes"
                className="rounded-xl h-45 sm:h-45 md:h-50 lg:h-50 xl:h-50 w-auto sm:w-55 md:w-60 lg:w-65 xl:w-60"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">An addiction</h2>
              <p className="text-sm">
                An addiction. Would you like to stop smoking once and for all?
              </p>
            </div>
          </div>
          <div className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 bg-base-100 shadow-xl mx-2 my-2 bg-slate-50">
            <figure className="px-10 pt-5">
              <img
                src="https://images.unsplash.com/photo-1499171138085-a60c4e752ff7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                alt="Shoes"
                className="rounded-xl h-45 sm:h-45 md:h-50 lg:h-50 xl:h-50 w-auto sm:w-55 md:w-60 lg:w-65 xl:w-60"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Guilt</h2>
              <p className="text-sm">
                Finally put down that heavy burden you have been carrying for so
                long it feels like it’s a part of you.
              </p>
            </div>
          </div>
          <div className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 bg-base-100 shadow-xl mx-2 my-2 bg-slate-50">
            <figure className="px-10 pt-5">
              <img
                src="https://images.unsplash.com/photo-1618616191524-a9721186cbe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                alt="Shoes"
                className="rounded-xl h-45 sm:h-45 md:h-50 lg:h-50 xl:h-50 w-auto sm:w-55 md:w-60 lg:w-65 xl:w-60"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Anxiety</h2>
              <p className="text-sm">
                To have the opportunity to understand why you feel anxious. What
                is driving it?
              </p>
            </div>
          </div>
          <div className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 bg-base-100 shadow-xl mx-2 my-2 bg-slate-50">
            <figure className="px-10 pt-5">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Shoes"
                className="rounded-xl h-45 sm:h-45 md:h-50 lg:h-50 xl:h-50 w-auto sm:w-55 md:w-60 lg:w-65 xl:w-60"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Money Blocks</h2>
              <p className="text-sm">
                dig deep to discover why you believe money is not for you and
                how this has influenced your life
              </p>
            </div>
          </div>
          <div className="card w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 bg-base-100 shadow-xl mx-2 my-2 bg-slate-50">
            <figure className="px-10 pt-5">
              <img
                src="https://images.unsplash.com/photo-1604031187853-ceda1f4a446c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Shoes"
                className="rounded-xl h-45 sm:h-45 md:h-50 lg:h-50 xl:h-50 w-auto sm:w-55 md:w-60 lg:w-65 xl:w-60"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Negative Repetitive Thoughts</h2>
              <p className="text-sm">
                ‘Relationships don’t work for me and it will always be this
                way’.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxesHomepage;
