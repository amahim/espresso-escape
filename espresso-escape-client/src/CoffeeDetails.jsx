import { Link, useLoaderData } from "react-router-dom";
import "../src/Coffee.css";
import { FaArrowCircleLeft } from "react-icons/fa";
const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="add-coffee-css py-10">
      <div className="w-4/5 mx-auto py-5">
        <Link
          to="/"
          className="flex items-center gap-2 font-rancho text-[#331a15] text-xl md:text-2xl px-4 py-2 rounded-md"
        >
          <FaArrowCircleLeft /> Back to Home
        </Link>
      </div>
      <div className="w-4/5 mx-auto flex flex-col  items-center md:flex-row gap-4 py-10 bg-[#e9e8e88e] justify-around">
        {/* img div */}
        <div>
          <img src={photo} alt="" className="md:w-64" />
        </div>
        {/* details div */}
        <div className="space-y-2 md:space-y-4 text-center md:text-start">
          <p>
            <span className="font-medium text-xl text-black">Name: </span>
            {name}
          </p>
          <p>
            <span className="font-medium text-xl text-black">Chef: </span>
            {chef}
          </p>
          <p>
            <span className="font-medium text-xl text-black">Supplier: </span>
            {supplier}
          </p>
          <p>
            <span className="font-medium text-xl text-black">Taste: </span>
            {taste}
          </p>
          <p>
            <span className="font-medium text-xl text-black">Category: </span>
            {category}
          </p>
          <p>
            <span className="font-medium text-xl text-black">Details: </span>
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
