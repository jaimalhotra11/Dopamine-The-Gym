import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      <div className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl">Get in touch with us for any inquiries or support.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 h-32"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">204 second floor, vipul plaza, Sector 81, Faridabad, Haryana 121004</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98765-43210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@dopaminegym.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600">Open 24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Find Us On Map</h3>
                <div className="h-[300px] bg-gray-200 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.810730698317!2d77.34623757382545!3d28.388817195109382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddeee2ae7687%3A0x6702bf0dbc46a8fe!2sDopamine%20Feel%20Good%20Gym!5e1!3m2!1sen!2sin!4v1733299707386!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}