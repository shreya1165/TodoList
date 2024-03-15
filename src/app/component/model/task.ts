export class Task {
    id: number;
    task_name: string;
   
    constructor(id: number = 0, task_name: string = '') {
  this.id = id;
      this.task_name = task_name;
    }
  }