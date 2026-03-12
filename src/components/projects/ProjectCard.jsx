import React from "react";

const Projects = () => {
  const projects = [
    { image: "https://devverx.com/wp-content/uploads/2022/08/EVERATICS.png", link: "#" },
    { image: "https://devverx.com/wp-content/uploads/2022/08/TAPAS.png", link: "#" },
    { image: "https://devverx.com/wp-content/uploads/2022/08/DESERT-SAFARI-TOURS.jpg", link: "#" },
    { image: "https://devverx.com/wp-content/uploads/2022/08/VOUKELATOS.jpg", link: "#" },
    { image: "https://devverx.com/wp-content/uploads/2022/08/REVERSE-IMAGE.jpg", link: "#" },
    { image: "https://devverx.com/wp-content/uploads/2022/08/EVERATICS.png", link: "#" },
    { image: "https://devverx.com/wp-content/uploads/2022/08/TAPAS.png", link: "#" },
    { image: "https://devverx.com/wp-content/uploads/2022/08/DESERT-SAFARI-TOURS.jpg", link: "#" },
    { image: "https://devverx.com/wp-content/uploads/2022/08/VOUKELATOS.jpg", link: "#" },
    { image: "https://devverx.com/wp-content/uploads/2022/08/REVERSE-IMAGE.jpg", link: "#" },
  ];

  return (
    <div className="py-20 px-4 md:p-30  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center mb-8">
            <img
              src={project.image}
              alt={`project ${index + 1}`}
              className="w-[80%] "
            />
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-8 py-3 rounded-lg flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg shadow-indigo-900/30 hover:shadow-indigo-700/50 transition-all duration-300"
            >
              Visit Website <span>➜</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;