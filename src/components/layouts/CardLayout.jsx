import React from "react";

const CardLayout = ({ children }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
      {children}
    </div>
  );
};

export default CardLayout;