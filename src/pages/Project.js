import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "./data";
function Project() {
  const { id } = useParams();
  console.log(data.projects);
  let projects = data.projects;
  projects.forEach((project) => {
    if (project.pid == id) {
      console.log(project.pid)
      const { type, id, title, text, subtitle, yt } = project;
      
    }
  });
  return <h1>hello</h1> 
}

export default Project;
