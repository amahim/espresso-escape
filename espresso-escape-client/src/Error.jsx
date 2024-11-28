import { Link } from "react-router-dom";
import error from "../src/assets/images/404/404.gif";
import { FaArrowCircleLeft } from "react-icons/fa";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div>
        <Link
          to="/"
          className="flex items-center gap-2 font-rancho text-[#331a15] text-xl md:text-2xl px-4 py-2 rounded-md"
        >
          <FaArrowCircleLeft /> Back to Home
        </Link>
      </div>

      <img src={error} alt="" />
    </div>
  );
};

export default Error;
