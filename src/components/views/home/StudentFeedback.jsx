import React from "react";

const StudentFeedback = () => {
  const feedbacks = [
    {
      name: "Alice Johnson",
      feedback: "This platform made finding a supervisor so easy and efficient!",
    },
    {
      name: "Mark Lee",
      feedback: "I found the perfect supervisor for my AI project in minutes.",
    },
    {
      name: "Sophia Brown",
      feedback: "Highly recommend this app to all final year students.",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">What Students Say</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-white"
          >
            <p className="italic">"{feedback.feedback}"</p>
            <p className="mt-2 text-right font-bold">- {feedback.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentFeedback;