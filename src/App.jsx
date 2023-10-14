import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);
  return (
    <div className="min-w-6xl">

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



      <div className="container mx-auto">
      <h1 className="text-4xl lg:text-5xl text-center font-bold my-20">
        Coffee Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
     </div>
    </div>
  );
}

export default App;
