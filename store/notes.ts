import { makeObservable, observable, action } from "mobx";
import { SQLError, SQLTransaction } from "expo-sqlite";
import database from "../database/database";

class Notes {
  isNew = false;

  filterText = "";

  activeNote: Note | null = null;

  notes: Note[] = [];

  currentNotes: Note[] = [];

  error = "";

  constructor() {
    makeObservable(this, {
      activeNote: observable,
      currentNotes: observable,
      updateNote: action,
      setActiveNote: action,
      deleteNote: action,
      setFilterText: action,
      filterNotes: action,
    });
    this.fetchNotes();
  }

  onError(txObj: SQLTransaction, error: SQLError) {
    this.error = error.message;
    console.log("Error ", error);
    return true;
  }

  fetchNotes() {
    database.db?.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM notes ORDER BY id DESC",
        undefined,
        (txObj, { rows: { _array } }) => {
          this.notes = _array;
          this.filterNotes(_array);
        },
        this.onError
      );
    });
  }

  filterNotes(notes: Note[]) {
    if (!this.filterText.trim()) {
      this.currentNotes = notes;
      return;
    }
    const text = this.filterText.toLowerCase();
    this.currentNotes = notes.filter(
      (t) =>
        t.title.toLowerCase().includes(text) ||
        t.text.toLowerCase().includes(text)
    );
  }

  setFilterText(text: string) {
    this.filterText = text;
    this.filterNotes(this.notes);
  }

  updateNote(note: Note) {
    const { id, title, text, categoryId } = note;
    if (this.isNew) {
      database.db?.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO notes (id, title, text, category_id) values (?, ?, ?, ?)",
          [id, title, text, categoryId],
          () => {
            this.isNew = false;
            this.fetchNotes();
          },
          this.onError
        );
      });
      return;
    }
    database.db?.transaction((tx) => {
      tx.executeSql(
        `UPDATE notes SET title='${title}', text='${text}', category_id='${categoryId}' WHERE id='${id}'`,
        undefined,
        () => {
          this.fetchNotes();
        },
        this.onError
      );
    });
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
    database.db?.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM notes WHERE id='${id}'`,
        undefined,
        () => {
          this.fetchNotes();
        },
        this.onError
      );
    });
  }
}

export default new Notes();
