import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, Users, ChevronRight } from 'lucide-react';

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const classes = {
  Monday: [
    { time: '06:00', name: 'HIIT', trainer: 'Pawan Chandila', spots: 5 },
    { time: '09:00', name: 'Yoga Flow', trainer: 'Prashant Singh', spots: 8 },
    { time: '18:00', name: 'Boxing', trainer: 'Rohit Jaglan', spots: 3 },
  ],
  Tuesday: [
    { time: '07:00', name: 'Strength Training', trainer: 'Neha Sharma', spots: 6 },
    { time: '10:00', name: 'Zumba', trainer: 'Shravan Chaudhary', spots: 10 },
    { time: '19:00', name: 'CrossFit', trainer: 'Rahul Vashisht', spots: 4 },
  ],
  // Add more days...
};

export default function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Class Schedule</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our expert-led classes designed to help you achieve your fitness goals.
            Book your spot today!
          </p>
        </motion.div>

        <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
          <div className="flex overflow-x-auto space-x-4 mb-8 pb-4">
            {weekDays.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-lg flex-shrink-0 transition ${
                  selectedDay === day
                    ? 'bg-[#116DEC] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {classes[selectedDay]?.map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#116DEC]/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-[#116DEC]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-[#116DEC] transition">
                        {classItem.name}
                      </h3>
                      <p className="text-gray-600">{classItem.trainer}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-[#116DEC] font-semibold">{classItem.time}</p>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{classItem.spots} spots left</span>
                      </div>
                    </div>
                    <button className="bg-[#116DEC] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
                      <span>Book</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}