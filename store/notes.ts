import { makeObservable, observable, action } from "mobx";

class Notes {
  isNew = false;

  filterText = "";

  activeNote: Note | null = null;

  notes: Note[] = [];

  currentNotes: Note[] = [];

  constructor() {
    makeObservable(this, {
      activeNote: observable,
      currentNotes: observable,
      updateNote: action,
      setActiveNote: action,
      deleteNote: action,
      setFilterText: action,
    });
  }

  filterNotes() {
    if (!this.filterText.trim()) {
      this.currentNotes = this.notes;
      return;
    }
    const text = this.filterText.toLowerCase();
    this.currentNotes = this.notes.filter(
      (t) =>
        t.title.toLowerCase().includes(text) ||
        t.text.toLowerCase().includes(text)
    );
  }

  setFilterText(text: string) {
    this.filterText = text;
    this.filterNotes();
  }

  updateNote(note: Note) {
    if (this.isNew) {
      this.notes = [note, ...this.notes];
      this.filterNotes();
      return;
    }
    this.notes = [note, ...this.notes.filter((n) => n.id !== note.id)];
    this.filterNotes();
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
    this.filterNotes();
  }
}

export default new Notes();
