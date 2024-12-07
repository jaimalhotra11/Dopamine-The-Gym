import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Emily Thompson",
      role: "Member since 2024",
      image: "/images/emily-testimonial.jpg",
      quote: "DOPAMINE isn't just a gym - it's a transformative experience. The focus on both physical and mental wellness has completely changed my approach to fitness."
    },
    {
      name: "James Wilson",
      role: "Member since 2024",
      image: "/images/james-testimonial.jpg",
      quote: "The community here is incredible. Everyone from the trainers to fellow members is supportive and encouraging. It's like having a second family."
    },
    {
      name: "Maria Garcia",
      role: "Member since 2024",
      image: "/images/maria-testimonial.jpg",
      quote: "The facilities are top-notch, but what really sets DOPAMINE apart is their holistic approach to wellness. I've never felt better both physically and mentally."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="text-center">
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}