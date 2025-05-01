import React from "react";

const SupervisorCard = ({ name, expertise, location }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white text-center">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600">{expertise}</p>
      <p className="text-gray-500 text-sm">{location}</p>
    </div>
  );
};

export default SupervisorCard;