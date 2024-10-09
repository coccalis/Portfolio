import CardProject from "../CardProject";
import bgimg from "../../assets/images/apointly-prev.png";
import { ProjectData } from "../../data/ProjectData";

function Projects() {
  return (
    <div className="max-w-screen-2xl mx-auto my-10 font-pixelari">
      <h1 className="text-txtlight-clr dark:text-txtclr-default px-16 text-3xl underline">
        My Projects
      </h1>
      <div className="grid grid-cols-2 gap-5 px-10">
        {ProjectData.map((project, index) => (
          <CardProject
            key={index}
            image={project.img}
            title={project.title}
            description={project.des}
            gh={project.gh}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
