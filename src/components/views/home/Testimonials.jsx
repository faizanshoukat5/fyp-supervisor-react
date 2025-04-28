import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This app is amazing! It has completely changed the way I work.",
    },
    {
      name: "Jane Smith",
      feedback: "Highly recommend this app to anyone looking for efficiency.",
    },
    {
      name: "Sam Wilson",
      feedback: "A must-have tool for modern web development.",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Users Say</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-white"
          >
            <p className="italic">"{testimonial.feedback}"</p>
            <p className="mt-2 text-right font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;