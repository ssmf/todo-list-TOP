import { Profile } from './modules/profile.js';
import { retrieveLocalData } from './modules/retrieveData.js';
import { bindAddProject } from './modules/eventBinds.js';

const mainProfile = new Profile('blossm');
export {mainProfile};
retrieveLocalData();

bindAddProject(mainProfile);