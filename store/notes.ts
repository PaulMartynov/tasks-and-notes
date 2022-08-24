import { makeObservable, observable, action } from "mobx";

class Notes {
  isNew = false;

  activeNote: Note | null = null;

  notes: Note[] = [];

  constructor() {
    makeObservable(this, {
      activeNote: observable,
      notes: observable,
      createNote: action,
      setActiveNote: action,
      deleteNote: action,
    });
  }

  createNote(note: Note) {
    this.notes = [note, ...this.notes];
  }

  setActiveNote(note: Note | null, isNew = false) {
    this.activeNote = note;
    this.isNew = isNew;
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((n) => n.id !== id);
  }
}

export default new Notes();
