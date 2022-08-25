import { makeObservable, observable, action } from "mobx";

class Tasks {
  isNew = false;

  activeTask: Task | null = null;

  tasks: Task[] = [];

  constructor() {
    makeObservable(this, {
      activeTask: observable,
      tasks: observable,
      updateTask: action,
      setActiveTask: action,
      deleteTask: action,
    });
  }

  updateTask(task: Task) {
    if (this.isNew) {
      this.tasks = [task, ...this.tasks];
      return;
    }
    this.tasks = [task, ...this.tasks.filter((t) => t.id !== task.id)];
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
