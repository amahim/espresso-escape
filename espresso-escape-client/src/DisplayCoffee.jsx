import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const DisplayCoffee = ({coffee}) => {

    const {_id,photo,name,chef,taste} = coffee;

    return (
        <div>
            <div className="flex md:flex-row flex-col items-center gap-4 bg-[#F5F4F1] shadow-xl md:h-56 p-4 rounded-md">
                <div className="">
                    <img
                    src={photo} className="md:w-36"/>
                </div>
                <div className="space-y-2 flex flex-col md:items-start items-center ">
                    <div className="text-center md:text-start">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Chef: {chef}</p>
                        <p>Taste: {taste}</p>
                    </div>
                    <div className="card-actions  ">
                    <button className="btn btn-info"><FaEye/></button>
                    <button className="btn btn-success"><FaPen/></button>
                    <button className="btn btn-error"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayCoffee;