import { mainProfile } from "../index.js";

export class Task {
    constructor() {
        this.title = 'boilerPlateTitle';
        this.description = 'boilerPlateDescription'
        this.dueDate = new Date(2007, 'January', 12);
        this.priority = 1;
        this.ifDone = false;
    }
}
