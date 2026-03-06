import React, { useState, useEffect } from "react";
import MemoryGame from "../components/MemoryGame.jsx";
import NumberGuessingGame from "../components/NumberGuessingGame.jsx";

const Home = () => {
  // Typing effect states
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Full Stack Developer";

  // Quote states
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loadingQuote, setLoadingQuote] = useState(false);

  // Local quotes array as fallback
  const localQuotes = [
    {
      q: "The only way to do great work is to love what you do.",
      a: "Steve Jobs",
    },
    { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" },
    {
      q: "The future belongs to those who believe in the beauty of their dreams.",
      a: "Eleanor Roosevelt",
    },
    { q: "You miss 100% of the shots you don't take.", a: "Wayne Gretzky" },
    {
      q: "The best way to predict the future is to create it.",
      a: "Peter Drucker",
    },
    {
      q: "Don't watch the clock; do what it does. Keep going.",
      a: "Sam Levenson",
    },
    {
      q: "The only limit to our realization of tomorrow will be our doubts of today.",
      a: "Franklin D. Roosevelt",
    },
    {
      q: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      a: "Walt Whitman",
    },
    {
      q: "The way to get started is to quit talking and begin doing.",
      a: "Walt Disney",
    },
    {
      q: "Your time is limited, so don't waste it living someone else's life.",
      a: "Steve Jobs",
    },
  ];

  /* -------------------- Typing Effect -------------------- */
  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (currentIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + fullText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => setIsTyping(true), 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping]);

  /* -------------------- Quote API -------------------- */
  const fetchQuote = async () => {
    try {
      setLoadingQuote(true);
      const res = await fetch(
        `https://api.quotable.io/random?timestamp=${new Date().getTime()}&random=${Math.random()}`,
        {
          method: "GET",
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      // Fallback to local quotes if API fails
      const randomIndex = Math.floor(Math.random() * localQuotes.length);
      const randomQuote = localQuotes[randomIndex];
      setQuote(randomQuote.q);
      setAuthor(randomQuote.a);
    } finally {
      setLoadingQuote(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-90"></div>

      {/* Animated blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Intro */}
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
          Nitesh Sharma
        </h1>

        <div className="text-2xl md:text-3xl text-blue-300 mb-8 h-12">
          <span className="border-r-2 border-blue-300 pr-1">{displayText}</span>
        </div>

        <p className="text-lg text-gray-300 mb-2 max-w-2xl mx-auto">
          Passionate about creating innovative web applications and solving
          complex problems.
        </p>
        <p>
          I am a Full-Stack Developer focused on building scalable,
          high-performance web applications using modern technologies. I
          specialize in crafting clean, intuitive user interfaces and designing
          robust backend systems that power reliable, production-ready products.
          With strong expertise in JavaScript, React, Node.js, and
          database-driven architectures, I deliver end-to-end solutions with an
          emphasis on performance, security, and maintainability. I bring a
          problem-solving mindset backed by solid foundations in data
          structures, algorithms, and core computer science principles.
          Currently working as a Full-Stack Developer, I collaborate with
          cross-functional teams to build real-world applications and
          continuously refine systems that scale with business needs.
        </p>

        {/* Quote Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Daily Inspiration
          </h2>

          <div className="bg-white/10 rounded-xl p-8 border border-gray-600 max-w-2xl mx-auto">
            <blockquote className="text-xl text-gray-300 italic mb-4">
              {loadingQuote ? "Loading quote..." : `“${quote}”`}
            </blockquote>
            <cite className="text-lg text-purple-300">— {author}</cite>

            <button
              onClick={fetchQuote}
              className="mt-6 px-6 ml-10 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition"
            >
              Next Quote →
            </button>
          </div>
        </div>

        {/* Games */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Mind Games</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6 border border-gray-600">
              <h3 className="text-xl font-semibold text-white mb-4">
                🧠 Memory Match
              </h3>
              <MemoryGame />
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-gray-600">
              <h3 className="text-xl font-semibold text-white mb-4">
                🎯 Guess the Number
              </h3>
              <NumberGuessingGame />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
