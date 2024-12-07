import React from 'react';
import { Dumbbell, Brain, Music, Users, Heart } from 'lucide-react';

const facilities = [
  {
    name: "State-of-the-art Gym",
    description: "Premium equipment for strength and cardio training",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Therapy Room",
    description: "Dedicated space for mental wellness and relaxation",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Combat Zone",
    description: "Fully equipped area for boxing and martial arts",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Dance Studio",
    description: "Spacious studios for Zumba and dance fitness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

export default function Facilities() {
  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Facilities</h1>
          <p className="text-xl">Experience premium fitness amenities designed for your success</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg h-[400px]">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors">
                  <div className="absolute bottom-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{facility.name}</h3>
                    <p className="text-gray-200">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Locker Rooms",
                description: "Modern locker rooms with showers and amenities"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Recovery Zone",
                description: "Dedicated area for post-workout recovery"
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Meditation Space",
                description: "Quiet area for mindfulness and meditation"
              }
            ].map((amenity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-[#116DEC] flex justify-center mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}