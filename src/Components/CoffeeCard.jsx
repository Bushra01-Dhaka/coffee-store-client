import { FaEdit, FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo, quantity, taste, supplier, details, category } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#C08261",
      cancelButtonColor: "#9A3B3B",
      confirmButtonText: "Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");

              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }

          });
      }
    });
  };

  return (
    <div>
      <div className="card lg:card-side h-[400px] bg-base-100 shadow-xl w-full">
        <figure className="w-full mb-4 md:mb-0">
          <img
            className="h-full  object-cover rounded"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div
          className="flex justify-between items-center text-justify 
         w-full "
        >
          <div className="pl-4">
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="my-4">
              <p>
                <span className="font-bold text-yellow-800">Quantity: </span>
                {quantity}
              </p>
              <p>
                <span className="font-bold text-yellow-800">Taste:</span>{" "}
                {taste}
              </p>
            </div>
          </div>

          <div className="card-actions">
            <div className="btn-group btn-group-vertical space-y-4 text-2xl text-yellow-800">
              <button>
                <FaEye></FaEye>
              </button>
              <Link to={`/updateCoffee/${_id}`}>
                <button>
                  <FaEdit></FaEdit>
                </button>
              </Link>
              <button
                onClick={() => {
                  handleDelete(_id);
                }}
              >
                <AiFillDelete></AiFillDelete>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
