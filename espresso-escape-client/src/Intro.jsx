import intro1 from "../src/assets/images/icons/1.png";
import intro2 from "../src/assets/images/icons/2.png";
import intro3 from "../src/assets/images/icons/3.png";
import intro4 from "../src/assets/images/icons/4.png";
const Intro = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="w-4/5 mx-auto flex py-10 flex-col md:justify-between justify-center md:flex-row gap-4">
        {/* inn-div */}
        <div className="flex flex-col gap-3">
          <img src={intro1} alt="" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-[#331a15]  text-xl md:text-2xl">Awesome Aroma</h1>
          <p className="text-[#1B1A1A] text-[16px]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        {/* inn-div */}
        <div className="flex flex-col gap-3">
          <img src={intro2} alt="" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-[#331a15]  text-xl md:text-2xl">High Quality</h1>
          <p className="text-[#1B1A1A] text-[16px]">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        {/* inn-div */}
        <div className="flex flex-col gap-3">
          <img src={intro3} alt="" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-[#331a15]  text-xl md:text-2xl">Pure Grades</h1>
          <p className="text-[#1B1A1A] text-[16px]">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        {/* inn-div */}
        <div className="flex flex-col gap-3">
          <img src={intro4} alt="" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-[#331a15]  text-xl md:text-2xl">
            Proper Roasting
          </h1>
          <p className="text-[#1B1A1A]  text-[16px]">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
