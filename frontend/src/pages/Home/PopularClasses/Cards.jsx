import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  // console.log(item)
  const { _id, name, image, availableSeats, price, totalEnrolled } = item;
//   console.log(_id);
  return (
    <div className="shadow-lg rounded-lg p-3 flex flex-col justify-between border border-secondary overflow-hidden m-4 transition-all duration-300  hover:scale-110 hover:shadow-md hover:shadow-blue-700">
      <img src={image} className=" rounded-2xl"  />
      <div className="p-4 ">
        <h2 className="text-xl font-semibold mb-2 dark:text-white ">{name}</h2>
        <p className="text-gray-600 mb-2 "> available Seats: {availableSeats}</p>
        <p className="text-gray-600 mb-2 "> Price: {price}</p>
        <p className="text-gray-600 mb-2 "> Total Students: {totalEnrolled}</p>
        <Link to={`class/${_id}`} className="text-center mt-2">

            <button className=" px-2 w-full py-1 bg-secondary rounded-xl text-white font-bold mt-2"> Select</button>
        </Link>



      </div>
    </div>
  );
}

export default Cards;
