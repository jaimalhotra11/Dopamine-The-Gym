import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Twitter, Linkedin, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const trainers = [
  {
    name: "John Smith",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "10+ years of experience in professional training and athletic development.",
    rating: 4.9,
    reviews: 120
  },
  {
    name: "Sarah Johnson",
    specialty: "Yoga & Mindfulness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Certified yoga instructor with expertise in meditation and stress management.",
    rating: 4.8,
    reviews: 95
  },
  {
    name: "Mike Williams",
    specialty: "Boxing & Kickboxing",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Former professional boxer with a passion for teaching martial arts.",
    rating: 4.9,
    reviews: 150
  },
  {
    name: "Emma Davis",
    specialty: "Nutrition & Weight Loss",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Certified nutritionist specializing in sustainable weight loss programs.",
    rating: 4.7,
    reviews: 88
  }
];

const TrainerCard = ({ trainer }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="relative">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{trainer.name}</h3>
            <p className="text-[#116DEC] font-semibold">{trainer.specialty}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{trainer.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({trainer.reviews})</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{trainer.bio}</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-[#116DEC] transition">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#116DEC] transition">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#116DEC] transition">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Trainers() {
  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Expert Trainers</h1>
          <p className="text-xl">Meet the professionals who will guide you to success</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {trainers.map((trainer, index) => (
              <SwiperSlide key={index}>
                <TrainerCard trainer={trainer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Rest of the component remains the same */}
    </div>
  );
}