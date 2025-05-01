import React from "react";
import TestimonialBox from "./TestimonialBox";

const StudentFeedback = () => {
  const feedbacks = [
    { name: "Alice Johnson", feedback: "This platform made finding a supervisor so easy and efficient!" },
    { name: "Mark Lee", feedback: "I found the perfect supervisor for my AI project in minutes." },
    { name: "Sophia Brown", feedback: "Highly recommend this app to all final year students." },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">What Students Say</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {feedbacks.map((feedback, index) => (
          <TestimonialBox key={index} name={feedback.name} feedback={feedback.feedback} />
        ))}
      </div>
    </section>
  );
};

export default StudentFeedback;