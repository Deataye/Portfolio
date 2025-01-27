"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Edusity - University Website",
    description: "A fully responsive React-based university website offering seamless navigation for students and faculty.",
    image: "/images/projects/edusityss.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Deataye/edusity",
    previewUrl: "https://edusity-roan.vercel.app/",
  },
  {
    id: 2,
    title: "Car Renting Platform",
    description: "A dynamic car rental platform built with Next.js, featuring categories and advanced search options.",
    image: "/images/projects/carss.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Deataye/Car-rental",
    previewUrl: "https://car-rental-five-ivory.vercel.app/",
  },
  {
    id: 3,
    title: "NFT Website",
    description: "A multi-page NFT website built with React, focusing on interactive design and frontend development.",
    image: "/images/projects/nftss.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Deataye/NFT-website",
    previewUrl: "https://nft-website-lyart-three.vercel.app/",
  },
  {
    id: 4,
    title: "Solace",
    description: "A furniture e-commerce website built with React, showcasing elegant design and seamless user experience.",
    image: "/images/projects/solacee.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Deataye/Solace-repo",
    previewUrl: "https://solace-repo.vercel.app/",
  },
  {
    id: 5,
    title: "Auebe Bleue",
    description: "A massage service website designed with React, offering a calming and interactive user interface.",
    image: "/images/projects/auebe.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Deataye/Aube-Bleue",
    previewUrl: "https://aube-bleue.vercel.app/",
  },
  {
    id: 6,
    title: "Claspees",
    description: "An e-commerce platform for tiny accessories, developed with React for a responsive and engaging shopping experience.",
    image: "/images/projects/claspeess.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Deataye/claspees",
    previewUrl: "https://claspees.vercel.app/",
  },
  {
    id: 7,
    title: "Olive Driving School Website",
    description: "A professional driving school website designed for user-friendly navigation and showcasing services.",
    image: "/images/projects/olivess.png",
    tag: ["All", "Wordpress"],
    gitUrl: "https://olivedrivingschool.com.au/",
    previewUrl: "https://olivedrivingschool.com.au/",
  },
  {
    id: 8,
    title: "KKT Distributor Website",
    description: "An e-commerce website for electronics and gadgets, focusing on intuitive design and functionality.",
    image: "/images/projects/kktss.png",
    tag: ["All", "Wordpress"],
    gitUrl: "https://kktdistributor.com/",
    previewUrl: "https://kktdistributor.com/",
  },
  {
    id: 9,
    title: "Muneer Timber Mart Website",
    description: "A sleek and responsive website showcasing timber products and services with a modern design.",
    image: "/images/projects/muneerss.png",
    tag: ["All", "Wordpress"],
    gitUrl: "https://muneertimbermart.shop/",
    previewUrl: "https://muneertimbermart.shop/",
  },
  {
    id: 10,
    title: "Zeentac",
    description: "A sleek and responsive website showcasing timber products and services with a modern design.",
    image: "/images/projects/zeentacs.png",
    tag: ["All", "Wordpress"],
    gitUrl: "https://zeentec.com/",
    previewUrl: "https://zeentec.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Wordpress"
          isSelected={tag === "Wordpress"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
