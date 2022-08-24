import { makeObservable, observable, action } from "mobx";

class Store {
  activeTask: Task | null = null;

  activeNote: Note | null = null;

  notes: Note[] = [];

  tasks: Task[] = [
    { id: "1", title: "---", checkList: [] },
    { id: "2", title: "---", checkList: [] },
    { id: "3", title: "---", checkList: [] },
    { id: "4", title: "---", checkList: [] },
    { id: "5", title: "---", checkList: [] },
    { id: "6", title: "---", checkList: [] },
    { id: "7", title: "---", checkList: [] },
    { id: "8", title: "---", checkList: [] },
    { id: "9", title: "---", checkList: [] },
    { id: "10", title: "---", checkList: [] },
    { id: "11", title: "---", checkList: [] },
    { id: "12", title: "---", checkList: [] },
    { id: "13", title: "---", checkList: [] },
    { id: "14", title: "---", checkList: [] },
    { id: "15", title: "---", checkList: [] },
    { id: "16", title: "---", checkList: [] },
    { id: "17", title: "---", checkList: [] },
    { id: "18", title: "---", checkList: [] },
    { id: "19", title: "-8-", checkList: [] },
  ];

  constructor() {
    makeObservable(this, {
      activeTask: observable,
      activeNote: observable,
      notes: observable,
      tasks: observable,
      setActiveTask: action,
      setActiveNote: action,
      deleteTask: action,
      deleteNote: action,
    });
  }

  setActiveTask(task: Task) {
    this.activeTask = task;
  }

  setActiveNote(note: Note) {
    this.activeNote = note;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((n) => n.id !== id);
  }
}

export default new Store();
