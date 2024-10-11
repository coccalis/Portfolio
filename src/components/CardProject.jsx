import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createElement } from "react";
import { motion } from "framer-motion";

function CardProject({ image, title, description, roles, gh, tech }) {
  return (
    <motion.div
      className="relative flex flex-col justify-between rounded-md m-5 border-1 border-bg-primary dark:border-bg-light shadow-xl h-full"
      whileHover={{ scale: 1, y: -15 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <div className="relative">
        <img
          src={image}
          className="w-full h-80 object-cover rounded-t-md border-b-1 border-bg-primary dark:border-bg-light"
          alt="bg-prev"
        />

        <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-md shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <a
            href={gh}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row space-x-2"
          >
            <FontAwesomeIcon icon={faGithub} className="size-5" />
            &nbsp; GitHub
          </a>
        </div>
      </div>

      <div className="p-4 flex-grow">
        <div className="space-y-3">
          <h1 className="text-2xl">{title}</h1>
          {description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <p className="text-lg">My Role for this project:</p>
          <p>{roles}</p>
        </div>
      </div>

      <div className="px-4 py-2">
        <p className="text-lg">Tech:</p>
        <div className="flex flex-wrap">
          {tech.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-2 m-1 border-1 rounded-md border-bg-primary dark:border-bg-light cursor-pointer hover:bg-gray-200 hover:dark:bg-violet-50/40 transition"
            >
              {typeof item.logo === "string" ? (
                <img src={item.logo} alt={item.label} className="h-6 w-6" />
              ) : (
                createElement(item.logo, { className: "h-6 w-6" })
              )}
              <span className="ml-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default CardProject;
