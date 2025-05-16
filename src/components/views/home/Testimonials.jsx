import React from "react";

const testimonials = [
  {
    name: "Ali Raza",
    feedback: "This platform helped me find the perfect supervisor for my FYP. The process was smooth and efficient!",
    university: "UOL",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sara Khan",
    feedback: "I loved the advanced search and the communication tools. Highly recommended for all final year students.",
    university: "FAST",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Bilal Ahmed",
    feedback: "The supervisor matching feature is a game changer. I completed my project with great guidance.",
    university: "NUST",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

const Testimonials = () => (
  <div className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        What Students Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-blue-600 text-sm">{t.university}</div>
              </div>
            </div>
            <p className="text-gray-700 italic">"{t.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;