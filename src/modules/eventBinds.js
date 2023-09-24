import { createProject } from "./createProject";
import { mainProfile } from "../index.js";

export function bindAddProject() {
    document.getElementById('add-project-button').addEventListener('click', () => {
        createProject('CHANGE ME!', false);
    });
};