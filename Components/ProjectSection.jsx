import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const index = [1, 2, 3, 4, 5];

  return (
    <div className="mx-5">
      <h1 className="text-center text-[1.5em] font-[510] mb-[120px]">
        Projects
      </h1>
      {index?.map((i) => (
        <ProjectCard key={i} />
      ))}
    </div>
  );
};

export default ProjectSection;
