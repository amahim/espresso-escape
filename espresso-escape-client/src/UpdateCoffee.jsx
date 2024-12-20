import { FaArrowCircleLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import "../src/Coffee.css";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  console.log("Loaded coffee data:", coffee);

  const handleUpdateCoffee = (e) => {
    console.log("Form submitted!");
    e.preventDefault();

    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // send data to the server and database
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/");
        }
      });
  };

  const navigate = useNavigate();

  return (
    <div className="add-coffee-css py-10 ">
      <div className="w-4/5 mx-auto ">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-rancho text-[#331a15] text-xl md:text-2xl px-4 py-2 rounded-md"
          >
            <FaArrowCircleLeft /> Back to Home
          </button>
        </div>
        <div className="bg-[#F4F3F0] rounded-md mt-5 mb-10">
          <div className="text-center space-y-4 py-10">
            <h1 className="text-[#331a15] text-2xl md:text-3xl font-rancho font-bold">
              Update Coffee Details
            </h1>
            <p className="text-[#1B1A1AB3] w-4/5 text-center mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, et
              harum? Cum quisquam, facere esse quasi ratione illo molestiae
              natus?
            </p>
          </div>
          <form className="card-body" onSubmit={handleUpdateCoffee}>
            {/* form first row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  defaultValue={name}
                  type="text"
                  name="name"
                  placeholder="coffee name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  defaultValue={chef}
                  type="text"
                  name="chef"
                  placeholder="chef name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* form second row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  defaultValue={supplier}
                  type="text"
                  name="supplier"
                  placeholder="coffee supplier"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  defaultValue={taste}
                  type="text"
                  name="taste"
                  placeholder="taste name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* form third row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  defaultValue={category}
                  type="text"
                  name="category"
                  placeholder="coffee Category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  defaultValue={details}
                  type="text"
                  name="details"
                  placeholder="Coffee Details"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                defaultValue={photo}
                type="text"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="bg-[#E3B577] text-[#331a15]
                                rounded-md text-2xl font-rancho border-2 border-[#331a15be] py-2"
              >
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
