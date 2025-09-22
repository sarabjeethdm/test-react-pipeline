import { useState } from "react";
import Card from "../Card/Card";
import "./ProjectGrid.css";
import ecommerce from "../../assets/ecommerce.png";
import moodmate from "../../assets/moodmate.png";
import kanban from "../../assets/kanban.png";
import qtile from "../../assets/qtile.jpg";
import pdfview from "../../assets/pdfview.png";
import youtube from "../../assets/youtube.png";
import estate from "../../assets/estate.png";
import fluttertodo from "../../assets/fluttertodo.png";
import musicapp from "../../assets/musicapp.png";

const projects = [
  {
    image: kanban,
    title: "KanBan Board",
    description: "Web development",
    category: "web",
    link: "https://github.com/Linux-DEX/Kanban_Board_project.git",
  },
  {
    image: qtile,
    title: "Arch Linux",
    description: "Custom Linux Configuration",
    category: "linux",
    link: "https://github.com/Linux-DEX/Qtile.git",
  },
  {
    image: youtube,
    title: "YouTube Clone",
    description: "Web development",
    category: "web",
    link: "https://github.com/Linux-DEX/youtube_clone-main.git",
  },
  {
    image: ecommerce,
    title: "E-Commerce Website",
    description: "Web development",
    category: "web",
    link: "https://github.com/Linux-DEX/MERN-E-Commerce-fullstack.git",
  },
  {
    image: pdfview,
    title: "PDF Viewer App",
    description: "Web development",
    category: "web",
    link: "https://github.com/Linux-DEX/extract-pdf-mern.git",
  },
  {
    image: estate,
    title: "Real Estate Website",
    description: "Web development",
    category: "web",
    link: "https://github.com/Linux-DEX/real-estate-website.git",
  },
  {
    image: fluttertodo,
    title: "Todo App",
    description: "App development",
    category: "app",
    link: "https://github.com/Linux-DEX/TODO-app-flutter.git",
  },
  {
    image: moodmate,
    title: "Mental Health App",
    description: "App development",
    category: "app",
    link: "https://github.com/Linux-DEX/moodmate.git",
  },
  {
    image: musicapp,
    title: "Music Player App",
    description: "App development",
    category: "app",
    link: "https://github.com/Linux-DEX/MusicApp-Android.git",
  },
];

const ProjectGrid = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    return filter === "all" || project.category === filter;
  });

  return (
    <div>
      <div className="filter-buttons">
        <p>Filter by:</p>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("web")}>Web</button>
        <button onClick={() => setFilter("app")}>App</button>
        <button onClick={() => setFilter("linux")}>Linux</button>
      </div>

      <div className="ProjectGrid">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={project.link}
          >
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
