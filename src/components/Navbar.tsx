import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About DOPAMINE' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-[#116DEC] text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-white" />
            <span className="text-xl font-bold">DOPAMINE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-gray-200 hover:underline hover:font-extrabold transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#116DEC] px-4 py-2 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-gray-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  navigate('/contact');
                  toggleMenu();
                }}
                className="bg-white text-[#116DEC] px-4 py-2 rounded-lg hover:bg-gray-100 transition font-semibold mt-2"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}