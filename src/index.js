import {Profile} from './modules/profile.js'

import {Project} from './modules/projects.js'
import {Task} from './modules/tasks.js'

import { createProject } from "./modules/createProject.js";
import { createTask } from "./modules/createTask.js";

const mainProfile = new Profile('blossm');
createProject('Daily routine');
createProject('Daily routine');
createTask('Daily routine', '2 odin lessons', 'very important, your main task of the day', new Date("2023-09-22"), 3, false);

console.log(mainProfile.projects)

export {mainProfile}