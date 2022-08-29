import { makeObservable, observable, action } from "mobx";

class Tasks {
  isNew = false;

  filterText = "";

  activeTask: Task | null = null;

  tasks: Task[] = [];

  currentTasks: Task[] = [];

  constructor() {
    makeObservable(this, {
      activeTask: observable,
      currentTasks: observable,
      updateTask: action,
      setActiveTask: action,
      deleteTask: action,
      setFilterText: action,
    });
  }

  filterTask() {
    if (!this.filterText.trim()) {
      this.currentTasks = this.tasks;
      return;
    }
    const text = this.filterText.toLowerCase();
    this.currentTasks = this.tasks.filter((t) =>
      t.title.toLowerCase().includes(text)
    );
  }

  setFilterText(text: string) {
    this.filterText = text;
    this.filterTask();
  }

  updateTask(task: Task) {
    if (this.isNew) {
      this.tasks = [task, ...this.tasks];
      this.isNew = false;
      this.filterTask();
      return;
    }
    this.tasks = this.tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    this.filterTask();
  }

  setActiveTask(task: Task | null, isNew = false) {
    this.activeTask = task;
    this.isNew = isNew;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.filterTask();
  }
}

export default new Tasks();
