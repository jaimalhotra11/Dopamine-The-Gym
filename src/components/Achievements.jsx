import React from 'react';
import { Trophy, Users, Star, Award } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      number: "50+",
      text: "Industry Awards"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "10,000+",
      text: "Happy Members"
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "4.9",
      text: "Average Rating"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "100+",
      text: "Certified Trainers"
    }
  ];

  return (
    <section className="bg-[#116DEC] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item) => (
            <div key={item.text} className="text-center">
              <div className="bg-white text-[#116DEC] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{item.number}</h3>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}