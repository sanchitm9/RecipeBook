import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">Recipe Book</span>
          </Link>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}