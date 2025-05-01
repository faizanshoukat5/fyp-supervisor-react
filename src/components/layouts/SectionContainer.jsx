import React from "react";

const SectionContainer = ({ children, className }) => {
  return <section className={`py-10 ${className}`}>{children}</section>;
};

export default SectionContainer;