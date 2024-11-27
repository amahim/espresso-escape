import { FaCoffee } from "react-icons/fa";
import '../src/Coffee.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DisplayCoffee from "./DisplayCoffee";

const CoffeesHome = () => {

    const [coffees,setCoffees]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/coffees')
        .then(res=> res.json())
        .then(data => setCoffees(data))
    },[])

    return (
        <div className=" coffee-css my-10">
            <div className='text-center flex-col flex items-center gap-4 w-4/5 mx-auto'>
                <h1 className="text-[#331a15] text-2xl font-semibold font-rancho md:text-4xl">Checkout Our Coffees</h1>
                <Link to="/add-coffee" className="w-[150px] bg-[#E3B577] text-white
                 rounded-md font-rancho border-2 border-[#331a15] flex items-center gap-2 text-2xl justify-center py-2">Add Coffee <FaCoffee className='text-[#331a15]'/></Link>
            </div>


            {/* cups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 w-4/5 mx-auto">
                {
                    coffees.map(coffee=> <DisplayCoffee key={coffees._id} coffee={coffee}/>)
                }
            </div>
        </div>
    );
};

export default CoffeesHome;