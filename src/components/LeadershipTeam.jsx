import React from 'react';

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Michael Anderson",
      role: "Founder & CEO",
      image: "/images/michael-anderson.jpg",
      bio: "With over 15 years of experience in fitness and wellness, Michael founded DOPAMINE with a vision to revolutionize the gym experience. His background in sports psychology and personal training has shaped our unique approach to holistic fitness.",
      certifications: ["NASM Certified Personal Trainer", "Sports Psychology Ph.D.", "Nutrition Specialist"]
    },
    {
      name: "Sarah Chen",
      role: "Head of Training",
      image: "/images/sarah-chen.jpg",
      bio: "Sarah brings 10 years of elite athletic training experience to DOPAMINE. Her innovative training methodologies have helped countless members achieve their fitness goals.",
      certifications: ["Elite Trainer Certification", "CrossFit Level 3", "Rehabilitation Specialist"]
    },
    {
      name: "David Rodriguez",
      role: "Wellness Director",
      image: "/images/david-rodriguez.jpg",
      bio: "David's expertise in mental health and fitness integration has been instrumental in developing our unique wellness programs that address both body and mind.",
      certifications: ["Mental Health Counselor", "Wellness Coach", "Meditation Instructor"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leaders.map((leader) => (
            <div key={leader.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={leader.image} 
                alt={leader.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                <p className="text-[#116DEC] font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600 mb-4">{leader.bio}</p>
                <div>
                  <h4 className="font-semibold mb-2">Certifications:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {leader.certifications.map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}