import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DisplayCoffee = ({coffee,coffees,setCoffees}) => {

    const {_id,photo,name,chef,taste} = coffee;

    const handleDelete = _id =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your Coffee has been deleted.",
                                "success"
                              );
                              const remaining = coffees.filter(cof => cof._id !== _id);
                              setCoffees(remaining)
                        }
                    })
            }
          });

    }

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
                    <button className="btn bg-[#D2B48C] border-none text-white text-xl"><FaEye/></button>
                    <Link to={`update-coffee/${_id}`}>
                        <button className="btn bg-[#3C393B] border-none text-white text-xl"><FaPen/></button></Link>
                    <button  onClick={()=> handleDelete(_id)} className="btn btn-error text-xl text-white"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayCoffee;