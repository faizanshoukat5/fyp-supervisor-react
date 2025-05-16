import React from "react";

const SupervisorCard = ({ name, expertise, location }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white text-center hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-xl font-bold text-blue-600">{name.charAt(0)}</span>
      </div>
      <h3 className="font-bold text-xl text-gray-900 mb-2">{name}</h3>
      <p className="text-blue-600 font-medium mb-2">{expertise}</p>
      <p className="text-gray-600">{location}</p>
    </div>
  );
};

export default SupervisorCard;