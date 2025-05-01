import React from "react";
import CardLayout from "../../layouts/CardLayout";

const InfoSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <CardLayout>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg">
            Our platform connects students with supervisors seamlessly, ensuring
            successful FYP collaborations with expert guidance.
          </p>
        </CardLayout>
      </div>
    </section>
  );
};

export default InfoSection;