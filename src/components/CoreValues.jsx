import React from 'react';
import { Target, Heart, Users } from 'lucide-react';

export default function CoreValues() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Target className="h-12 w-12 mx-auto mb-4 text-[#116DEC]" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To create an inclusive environment where fitness meets mental wellness,
              helping every member achieve their personal best.
            </p>
          </div>
          <div className="text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 text-[#116DEC]" />
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600">
              We believe in fostering a supportive community, promoting holistic
              wellness, and celebrating every achievement.
            </p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-[#116DEC]" />
            <h3 className="text-2xl font-bold mb-4">Our Community</h3>
            <p className="text-gray-600">
              Join a diverse family of fitness enthusiasts who support and inspire
              each other every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}