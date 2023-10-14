import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = e => 
    {
       e.preventDefault();
       const form = e.target;
       const name = form.name.value;
       const quantity = form.quantity.value;
       const supplier = form.supplier.value;
       const taste = form.taste.value;
       const category = form.category.value;
       const details = form.details.value;
       const photo = form.photo.value;
       const newAddCoffeeInfo = {name,quantity, supplier, taste, category, details, photo};
       console.log(newAddCoffeeInfo);

       //send data to server
       fetch('http://localhost:5000/coffee', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newAddCoffeeInfo)

       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
       if(data.insertedId)
       {
        Swal.fire({
          title: 'Success!',
          text: 'Coffee added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
       }

       })
    }


  return (

    <div>
     {/* navbar */}
     <div className="bg-yellow-800">
     <div className="navbar bg-yellow-800 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-700  rounded-box w-52"
            >
              <li>
              <Link to='/'>
                Home
              </Link>
              </li>
              <li>
              <Link to='/addCoffee'>
                Add Coffee
              </Link>
              </li>
              <li>
              <Link to='/'>
               Contact
              </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost normal-case text-2xl">Cafe D’Bolla</a>
        </div>
       
      </div>
     </div>



      <div className="container mx-auto bg-[#F4F3F0] p-8">
        <div>
          <h2 className="text-3xl md:text-4xl text-[#37415] font-bold my-6">
            Add New Coffee
          </h2>
          <form onSubmit={handleAddCoffee}>
            {/* form row name & quantity */}
            <div className="md:flex gap-4 mb-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Coffee Name"
                    className="input input-bordered w-full rounded"
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="input input-bordered w-full rounded"
                  />
                </label>
              </div>
            </div>

            {/* form row Supplier & taste */}
            <div className="md:flex gap-4 mb-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Supplier Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier Name"
                    className="input input-bordered w-full rounded"
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="taste"
                    placeholder="Taste"
                    className="input input-bordered w-full rounded"
                  />
                </label>
              </div>
            </div>

            {/* form row category & details */}
            <div className="md:flex gap-4 mb-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="input input-bordered w-full rounded"
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    placeholder="Details"
                    className="input input-bordered w-full rounded"
                  />
                </label>
              </div>
            </div>

            {/* form row photo URL */}
            <div className="mb-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered w-full rounded"
                  />
                </label>
              </div>

            </div>
      
          {/* button */}
          <input type="submit" value="Add Coffee" className="btn btn-block bg-yellow-800 text-white hover:bg-yellow-700" />

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
