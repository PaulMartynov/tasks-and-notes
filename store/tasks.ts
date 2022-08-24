import { makeObservable, observable, action } from "mobx";

class Tasks {
  isNew = false;

  activeTask: Task | null = null;

  tasks: Task[] = [];

  constructor() {
    makeObservable(this, {
      activeTask: observable,
      tasks: observable,
      createTask: action,
      setActiveTask: action,
      deleteTask: action,
    });
  }

  createTask(task: Task) {
    this.tasks = [task, ...this.tasks];
  }

  setActiveTask(task: Task | null, isNew = false) {
    this.activeTask = task;
    this.isNew = isNew;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}

export default new Tasks();
