import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

const positions = [
  {
    title: "Personal Trainer",
    type: "Full-time",
    location: "Multiple Locations",
    description: "Join our team of expert trainers and help transform lives through fitness."
  },
  {
    title: "Yoga Instructor",
    type: "Part-time",
    location: "Downtown",
    description: "Lead yoga sessions and contribute to our members' wellness journey."
  },
  {
    title: "Fitness Manager",
    type: "Full-time",
    location: "Main Branch",
    description: "Oversee gym operations and lead our team of fitness professionals."
  }
];

export default function Careers() {
  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl">Build your career with the most dynamic fitness brand</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Current Openings</h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{position.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-600 mt-2">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {position.type}
                        </span>
                        <span>{position.location}</span>
                      </div>
                    </div>
                    <button className="bg-[#116DEC] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join DOPAMINE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth Opportunities",
                description: "Continuous learning and career advancement paths"
              },
              {
                title: "Competitive Benefits",
                description: "Health insurance, fitness perks, and wellness programs"
              },
              {
                title: "Amazing Culture",
                description: "Work with passionate people in an energetic environment"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <CheckCircle className="h-8 w-8 text-[#116DEC] mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}