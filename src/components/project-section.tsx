"use client";

import ProjectCard from "@/components/project-card";
import { useState } from "react";
import ProjectTags from "@/components/project-tags";

interface ProjectData {
  id: number;
  title: string;
  descripton: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectData: ProjectData[] = [
  {
    id: 1,
    title: `API`,
    descripton: `testing`,
    image: `/images/projects/api_1.jpeg`,
    tag: ["All"],
    gitUrl: `/`,
    previewUrl: `/`,
  },
  {
    id: 2,
    title: `Kafka`,
    descripton: `testing`,
    image: `/images/projects/kafka_2.png`,
    tag: ["Web"],
    gitUrl: `/`,
    previewUrl: `/`,
  },
  {
    id: 3,
    title: `Kafka`,
    descripton: `testing`,
    image: `/images/projects/kafka_2.png`,
    tag: ["Web"],
    gitUrl: `/`,
    previewUrl: `/`,
  },
];

const ProjectSection = () => {
  //
  const [tag, setTag] = useState("All");
  const handleTag = (newTag: string) => setTag(newTag);

  return (
    <>
      <h2 className=" text-center text-4xl font-bold text-white mt-4 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTags
          onClick={handleTag}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTags
          onClick={handleTag}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((item) => {
          return (
            item.tag.includes(tag) && (
              <ProjectCard
                key={item.id}
                imgUrl={item.image}
                title={item.title}
                description={item.descripton}
                gitUrl={item.gitUrl}
                previewUrl={item.previewUrl}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default ProjectSection;
