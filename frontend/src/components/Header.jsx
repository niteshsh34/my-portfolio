import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 border-b border-gray-700 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 animate-pulse"></div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
            N
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nitesh Sharma
            </h1>
            <p className="text-xs text-gray-400">
              {currentTime.toLocaleTimeString()} • {currentTime.toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>+91-6376772434</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <a href="mailto:niteshsh34@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">niteshsh34@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/niteshsh34/" className="flex flex-col items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-4 h-4" />
              <span className="text-xs text-gray-300">LinkedIn</span>
            </a>
            <a href="https://github.com/niteshsh34" className="flex flex-col items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-4 h-4" />
              <span className="text-xs text-gray-300">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </header>
  );
};

export default Header;
