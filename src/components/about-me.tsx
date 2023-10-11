"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "@/components/tab-button";
import { TAB_DATA } from "@/data/tab-data";

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/desk-labtop.jpg"
          alt="labtop-img"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            accusamus culpa maxime nisi odio cupiditate ut inventore repellat
            perspiciatis ad necessitatibus nostrum aperiam error maiores,
            voluptate quia facilis rerum quas.
          </p>

          <div className="flex flex-rows mt-8">
            <TabButton
              active={tab === `skills`}
              selectTab={() => handleTabChange("skills")}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              active={tab === `education`}
              selectTab={() => handleTabChange("education")}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              active={tab === `experience`}
              selectTab={() => handleTabChange("experience")}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>

          <div className="mt-4">
            {TAB_DATA.find((item) => item.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
