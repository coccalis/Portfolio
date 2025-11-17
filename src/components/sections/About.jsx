import { createElement } from "react";
import { skillsFramework, skillsLanguages, tools } from "../../data/SkillData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <div id="about" className="max-w-screen-2xl mx-auto my-10 font-pixelari">
      <h1 className="text-4xl text-center md:text-start underline text-txtlight-clr dark:text-txtclr-default px-16 pb-5">
        About me
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2  justify-normal px-16 mb-10">
          <p className="text-xl text-center md:text-start text-txtlight-clr dark:text-txtclr-default font-medium">
            Hello!! My name is Chris Kokkalis.
            <br />I am a graduate student from University of West Attica with a
            Master's degree in Informatics and Computer Engineering. Throughout
            my academic years, I discovered that I have a natural inclination
            toward front-end development and UI/UX design. My main goal is to
            solve complex problems that might occur and create-design engaging
            applications for the users. I am actively seeking new opportunities
            and challenges that will expand my skill set.
          </p>
          <div className="flex justify-center my-5">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => {}}
              type="button"
              className="bg-btn-default hover:bg-btn-hover transition w-full md:w-1/2 text-xl text-txtclr-default rounded-md p-2"
            >
              <a
                href="files/Chris_Kokkalis_CV.pdf"
                download="Chris_Kokkalis_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my CV
              </a>
            </motion.button>
          </div>
        </div>
        <div className="xsm:w-full sm:w-1/2 px-10  sm:px-5">
          <div className="w-full border-1 p-2 md:p-5 border-bg-primary dark:border-divider-clr  rounded-md space-y-5">
            <h1 className="text-2xl text-center md:text-start  text-txtlight-clr dark:text-txtclr-default">
              My Skills
            </h1>
            <div className="grid grid-rows-3 w-full gap-5 px-2">
              <div aria-label="div language">
                <h1 className="text-center md:text-start">Languages</h1>
                <div className="flex flex-wrap xsm:flex-col sm:flex-row items-center  justify-between">
                  {skillsLanguages.map((skill, index) => (
                    <motion.div
                      whileHover={{ scale: 1, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      key={index}
                      className="flex flex-col justify-center items-center p-2 cursor-pointer"
                    >
                      {createElement(skill.icon, { className: "size-14" })}
                      <span className="mt-2 text-txtlight-clr dark:text-txtclr-default">
                        {skill.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div aria-label="div frame">
                <h1 className="text-center md:text-start">
                  Frameworks/Libraries
                </h1>
                <div className="flex flex-wrap xsm:flex-col sm:flex-row items-center  xsm:space-y-5 sm:space-y-0 justify-center sm:justify-between">
                  {skillsFramework.map((skill, index) => (
                    <motion.div
                      whileHover={{ scale: 1, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      key={index}
                      className="flex flex-col justify-center items-center p-2 cursor-pointer"
                    >
                      {createElement(skill.icon, { className: "size-14" })}
                      <span className="mt-2 text-txtlight-clr dark:text-txtclr-default">
                        {skill.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div aria-label="div tools">
                <h1 className="text-center md:text-start">Tools</h1>
                <div className="flex  flex-wrap xsm:flex-col sm:flex-row items-center space-y-5">
                  {tools.map((tool, index) => (
                    <motion.div
                      whileHover={{ scale: 1, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      key={index}
                      className="flex flex-col justify-center items-center p-2 cursor-pointer"
                    >
                      {createElement(tool.icon, { className: "size-14" })}
                      <span className="mt-2 text-txtlight-clr dark:text-txtclr-default">
                        {tool.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
