import "../src/Banner.css";
const Banner = () => {
  return (
    // pt-20 pb-52 pr-20 pl-60
    <div className="banner-css md:py-52 py-48 md:h-auto h-[100px] ">
      <div className="pl-5 flex flex-col justify-center gap-4 w-full md:w-2/4 md:pl-10 mx-auto ">
        <h1 className="text-white text-2xl font-medium  font-rancho md:text-5xl">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="md:w-4/5 text-white md:text-base text-[12px]">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable
        </p>
        <button className="w-36 bg-[#E3B577] py-2 px-6 rounded-md font-rancho text-[#331a15]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
