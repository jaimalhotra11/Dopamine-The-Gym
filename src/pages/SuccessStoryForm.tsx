import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function SuccessStoryForm() {
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Share Your Success Story</h1>
          <p className="text-xl">Inspire others with your fitness journey</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Age</label>
              <input
                type="number"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Your Achievement</label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                placeholder="e.g., Lost 30kg in 6 months"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Your Story</label>
              <textarea
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC] h-32"
                placeholder="Share your fitness journey..."
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Your Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Rate Your Experience</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-8 w-8 cursor-pointer ${
                      star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#116DEC] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Your Story
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}