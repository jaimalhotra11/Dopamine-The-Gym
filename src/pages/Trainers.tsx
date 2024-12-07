import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: "John Smith",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "10+ years of experience in professional training and athletic development."
  },
  {
    name: "Sarah Johnson",
    specialty: "Yoga & Mindfulness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Certified yoga instructor with expertise in meditation and stress management."
  },
  {
    name: "Mike Williams",
    specialty: "Boxing & Kickboxing",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Former professional boxer with a passion for teaching martial arts."
  },
  {
    name: "Emma Davis",
    specialty: "Nutrition & Weight Loss",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Certified nutritionist specializing in sustainable weight loss programs."
  }
];

export default function Trainers() {
  return (
    <div className="pt-16">
      <div className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Expert Trainers</h1>
          <p className="text-xl">Meet the professionals who will guide you to success</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{trainer.specialty}</p>
                  <p className="text-gray-600 mb-4">{trainer.bio}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-purple-600 transition">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-600 transition">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-600 transition">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book a Session</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Select Trainer</label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500">
                  {trainers.map((trainer, index) => (
                    <option key={index} value={trainer.name}>{trainer.name} - {trainer.specialty}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Session Type</label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500">
                  <option>One-on-One Training</option>
                  <option>Group Session</option>
                  <option>Consultation</option>
                </select>
              </div>
              <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                Book Session
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}