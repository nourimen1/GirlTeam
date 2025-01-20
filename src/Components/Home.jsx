import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for routing

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white">
      {/* Container for Logo and Buttons in a row */}
      <div className="flex flex-row items-center justify-center space-x-8">
        {/* Buttons */}
        <div className="flex space-x-4">
          <Link to="/explore">
            <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
              Explore Program
            </button>
          </Link>
        </div>
      </div>

      {/* Container for Text Description */}
      <div className="mt-8 px-4 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-black"> {/* Change here */}
          Welcome to Our Amazing Platform
        </h2>
        <p className="text-lg mt-4 text-white">
          Our platform allows you to explore exciting features and learn new programs.
          Join us to unlock your potential and be a part of a thriving community.
        </p>
      </div>
    </div>
  );
}
