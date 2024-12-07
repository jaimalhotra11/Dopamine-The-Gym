import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, ArrowRight } from 'lucide-react';

export default function VirtualTour() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Virtual Tour</h1>
          <p className="text-xl">Experience our world-class facilities from anywhere</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Experience DOPAMINE</h2>
              <p className="text-gray-600 mb-8">
                Take a virtual journey through our world-class facilities. Explore our premium 
                equipment, specialized training zones, and luxurious amenities from the comfort 
                of your home.
              </p>
              <div className="space-y-4">
                {[
                  "State-of-the-art Equipment",
                  "Specialized Training Zones",
                  "Therapy & Relaxation Areas",
                  "Premium Locker Rooms"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ArrowRight className="h-5 w-5 text-[#116DEC]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative aspect-video group"
            >
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Gym Interior"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/90 p-4 rounded-full cursor-pointer hover:bg-white transition"
                >
                  <Play className="h-12 w-12 text-[#116DEC]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Training Zones",
                description: "Explore our specialized workout areas"
              },
              {
                title: "Recovery Center",
                description: "State-of-the-art recovery facilities"
              },
              {
                title: "Amenities",
                description: "Premium locker rooms and facilities"
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}