import React, { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [flippedCards, setFlippedCards] = useState({});

  const projectsData = [
    {
      title: "REST Countries Application",
      tech: "ReactJS, JavaScript",
      period: "March 2025 – July 2025",
      category: "Frontend",
      github: "https://github.com/niteshsh34",
      description: [
        "Developed a responsive React application using the REST Countries API to display country data dynamically.",
        "Implemented features including dark mode, search and filter, and dynamic data fetching for seamless user experience.",
        "Built a clean component structure with effective state management for scalability and maintainability.",
      ],
    },
    {
      title: "Job Portal Web Application",
      tech: "MERN Stack",
      period: "December 2024 – March 2025",
      category: "Full Stack",
      live: "https://job-portal-jp6z.onrender.com/",
      github: "https://github.com/niteshsh34/job-portal",
      description: [
        "Developed a full-stack Job Portal to connect job seekers and recruiters.",
        "Implemented user authentication and authorization using JWT.",
        "Enabled job posting, search, and application tracking with dynamic filtering.",
        "Integrated RESTful APIs with CRUD operations.",
        "Designed a responsive UI ensuring smooth performance across all devices.",
      ],
    },
    {
      title: "Full Stack Text-to-Image Generator AI SaaS Application",
      tech: "MERN Stack",
      period: "December 2025 – Present",
      category: "Full Stack",
      live: "https://text-to-image-generator-j81w.onrender.com/",
      github: "https://github.com/niteshsh34/imagAI",
      description: [
        "Developed a full-stack AI-driven web application using MongoDB, Express.js, ReactJS, and Node.js.",
        "Implemented secure authentication and authorization.",
        "Integrated AI image generation API to convert text into visual content.",
        "Built a credit-based usage system with payment gateway integration.",
      ],
    },
  ];

  const categories = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const handleCardFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="perspective-1000 cursor-pointer"
            onClick={() => handleCardFlip(index)}
          >
            <div
              className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                flippedCards[index] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-sm opacity-90">{project.tech}</p>
                <p className="text-xs opacity-75 mt-2">{project.period}</p>

                {/* Links */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-green-500 rounded text-sm hover:bg-green-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-gray-700 rounded text-sm hover:bg-gray-800"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                </div>

                <div className="mt-4 text-4xl">🔄</div>
                <p className="text-xs mt-2">Click to flip</p>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-800 rounded-lg p-6 flex flex-col overflow-y-auto">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4">
                    {project.tech} | {project.period}
                  </p>

                  <ul className="text-gray-300 text-sm space-y-1 pr-2">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-gray-500 mt-4 text-center">
                  Click to flip back
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;