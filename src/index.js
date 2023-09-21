import {Profile} from './modules/profile.js'

import {Project} from './modules/projects.js'
import {Task} from './modules/tasks.js'

import { createProject } from "./modules/createProject.js";
import { createTask } from "./modules/createTask.js";

import { createModule } from './modules/createModule.js';

import { bindAddProject } from './modules/eventBinds.js';

const mainProfile = new Profile('blossm');
export {mainProfile};



bindAddProject(mainProfile);


console.log(mainProfile.projects)