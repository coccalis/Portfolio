import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createElement } from "react";
import { motion } from "framer-motion";

function CardProject({ image, title, description, gh, tech }) {
  return (
    <motion.div
      className="relative rounded-md m-5 border-1 border-bg-primary dark:border-bg-light shadow-xl"
      whileHover={{ scale: 1, y: -15 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <div className="relative">
        <img
          src={image}
          className="w-fit h-fit rounded-t-md border-b-1 border-bg-primary dark:border-bg-light"
          alt="bg-prev"
        />

        <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded-md shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <a
            href={gh}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex flex-row space-x-2 "
          >
            <FontAwesomeIcon icon={faGithub} className="size-5" />
            &nbsp; GitHub
          </a>
        </div>
      </div>
      <div className="p-2">
        <div className="space-y-3">
          <h1 className="text-2xl">{title}</h1>
          <p>{description}</p>
          <p className="text-lg">Tech:</p>
        </div>
        <div className="flex flex-wrap mt-2">
          {tech.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-2 m-2 border-1 rounded-md border-bg-primary dark:border-bg-light cursor-pointer hover:bg-gray-200 hover:dark:bg-violet-50/40 transition"
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
