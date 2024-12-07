import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: "Sarah Johnson",
    age: 28,
    achievement: "Lost 30kg in 6 months",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    quote: "DOPAMINE changed my life. The trainers here don't just focus on physical fitness, they help you build mental strength too."
  },
  {
    name: "Michael Chen",
    age: 35,
    achievement: "Completed first marathon",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    quote: "The supportive community and expert guidance helped me achieve what I thought was impossible."
  },
  {
    name: "Emma Davis",
    age: 42,
    achievement: "Recovered from injury",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    quote: "The therapy room and rehabilitation programs here are exceptional. I'm back to my peak performance."
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition relative"
    >
      <Quote className="absolute top-4 right-4 h-8 w-8 text-[#116DEC]/20" />
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg">{testimonial.name}</h3>
          <p className="text-[#116DEC]">{testimonial.achievement}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{testimonial.quote}</p>
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
    </motion.div>
  );
};

export default function SuccessStories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real people, real transformations. See how DOPAMINE has helped transform lives
            through fitness and wellness.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => navigate('/share-story')}
            className="bg-[#116DEC] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Start Your Success Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}