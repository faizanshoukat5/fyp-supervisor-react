import React from "react";

const TestimonialBox = ({ name, feedback }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <p className="italic">"{feedback}"</p>
      <p className="mt-2 text-right font-bold">- {name}</p>
    </div>
  );
};

export default TestimonialBox;