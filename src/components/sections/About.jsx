import { createElement } from "react";
import { skillsFramework, skillsLanguages, tools } from "../../data/SkillData";

function About() {
  return (
    <div id="#about" className="max-w-screen-2xl mx-auto my-10 font-pixelari">
      <h1 className="text-4xl underline text-txtlight-clr dark:text-txtclr-default px-16 pb-5">
        About me
      </h1>
      <div className="flex items-center">
        <div className="w-1/2 flex justify-normal px-16">
          <p className="text-xl text-txtlight-clr dark:text-txtclr-default font-medium">
            Hello!! My name is Chris Kokkalis. <br />
            I'm an undergraduate student at the University of West Attica, based
            in Athens, Greece. I am a Junior React Developer and have a passion
            for crafting intuitive and engaging user interfaces as a UI/UX
            designer. My focus is on blending creativity with technical
            expertise to create seamless web experiences.
          </p>
        </div>
        <div className="w-1/2">
          <div className="w-full border-1 p-5 border-divider-clr rounded-md space-y-5">
            <h1 className="text-2xl  text-txtlight-clr dark:text-txtclr-default">
              My Skills
            </h1>
            <div className="grid grid-rows-2 w-full gap-5">
              <div aria-label="div language">
                <h1>Languages</h1>
                <div className="flex flex-row space-x-5">
                  {skillsLanguages.map((skill, index) => (
                    <div key={index} className="flex items-center p-2">
                      {createElement(skill.icon, { className: "size-14" })}
                      <span className="ml-2 text-txtlight-clr dark:text-txtclr-default">
                        {skill.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div aria-label="div frame">
                <h1>Frameworks/Libraries</h1>
                <div className="flex flex-row space-x-5">
                  {skillsFramework.map((skill, index) => (
                    <div key={index} className="flex  items-center p-2">
                      {createElement(skill.icon, { className: "size-14" })}
                      <span className="ml-2 text-txtlight-clr dark:text-txtclr-default">
                        {skill.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div aria-label="div tools">
                <h1>Tools</h1>
                <div className="flex flex-row space-x-5">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex  items-center p-2">
                      {createElement(tool.icon, { className: "size-14" })}
                      <span className="ml-2 text-txtlight-clr dark:text-txtclr-default">
                        {tool.label}
                      </span>
                    </div>
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
