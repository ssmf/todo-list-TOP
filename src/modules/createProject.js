import { mainProfile } from "../index.js";
import { Project } from "./projects.js";

export function createProject(name) {
    let newProject = new Project;
    newProject.name = name;
    mainProfile.projects.push(newProject);
};