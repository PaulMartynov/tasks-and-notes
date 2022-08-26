import { makeObservable, observable, action } from "mobx";

class Notes {
  isNew = false;

  activeNote: Note | null = null;

  notes: Note[] = [];

  constructor() {
    makeObservable(this, {
      activeNote: observable,
      notes: observable,
      updateNote: action,
      setActiveNote: action,
      deleteNote: action,
    });
  }

  updateNote(note: Note) {
    if (this.isNew) {
      this.notes = [note, ...this.notes];
      return;
    }
    this.notes = [note, ...this.notes.filter((n) => n.id !== note.id)];
  }

  setActiveNote(note: Note | null, isNew = false) {
    this.activeNote = note;
    this.isNew = isNew;
  }

  deleteNote(id: string) {
    if (this.isNew) {
      this.activeNote = null;
      this.isNew = false;
      return;
    }
    this.notes = this.notes.filter((n) => n.id !== id);
  }
}

export default new Notes();
