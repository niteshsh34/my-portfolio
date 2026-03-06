import React, { useState } from 'react';

const Achievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const achievements = [
    {
      title: 'Problem-Solving & DSA by PW',
      description: 'Strengthened algorithmic thinking through competitive programming.',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      emoji: '🚀',
      funFact: 'Became a code ninja! 🥷'
    },
    {
      title: 'Competitive Programming',
      description: 'Solved more than 600 problems on platforms such as LeetCode and GFG. Ranked under 200,000 globally and in the top 29% in contests on LeetCode.',
      icon: '🏆',
      color: 'from-yellow-500 to-orange-500',
      emoji: '💪',
      funFact: 'Code warrior level: Expert! ⚔️'
    },
    {
      title: 'Code Red 4.0 Triathlon',
      description: 'Ranked in the Top 10 at the 2024 Code Red 4.0 Triathlon organized by ACIC VGU.',
      icon: '🎯',
      color: 'from-green-500 to-teal-500',
      emoji: '🏃‍♂️',
      funFact: 'Triathlon champion! 🏅'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating achievement badges */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              fontSize: `${20 + Math.random() * 20}px`
            }}
          >
            {['🏆', '🎯', '⭐', '🚀', '💎', '🔥', '⚡', '🌟'][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent mb-4 animate-fade-in-up flex items-center justify-center">
            <span className="mr-4">🎉</span>
            Achievement Unlocked!
            <span className="ml-4">🏆</span>
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in-up animation-delay-500">
            Celebrating the wins that made me who I am today! 🎊✨
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                hoveredIndex === index ? 'animate-glow' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Achievement badge */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl animate-bounce">{achievement.icon}</span>
              </div>

              {/* Floating particles on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-70"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 0.5}s`,
                        animationDuration: `${1 + Math.random() * 1}s`
                      }}
                    ></div>
                  ))}
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3 group-hover:animate-bounce">{achievement.emoji}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {achievement.description}
                </p>

                {/* Fun fact reveal */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3 mt-4 border border-yellow-500/30">
                    <p className="text-yellow-300 font-semibold text-sm animate-pulse">
                      🎯 {achievement.funFact}
                    </p>
                  </div>
                </div>

                {/* Achievement level indicator */}
                <div className="mt-4 flex justify-center space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i < (index + 1) ? `bg-gradient-to-r ${achievement.color} animate-pulse` : 'bg-gray-600'
                      }`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Fun stats section */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1000">
          <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center">
              <span className="mr-3">📊</span>
              Achievement Stats
              <span className="ml-3">📈</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  300+
                </div>
                <div className="text-gray-300 text-sm">Problems Solved</div>
                <div className="text-yellow-400 text-xs mt-1">🚀</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  200K
                </div>
                <div className="text-gray-300 text-sm">Global Rank</div>
                <div className="text-yellow-400 text-xs mt-1">⭐</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  Top 10
                </div>
                <div className="text-gray-300 text-sm">Triathlon Rank</div>
                <div className="text-yellow-400 text-xs mt-1">🏅</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  29%
                </div>
                <div className="text-gray-300 text-sm">Contest Performance</div>
                <div className="text-yellow-400 text-xs mt-1">💪</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
