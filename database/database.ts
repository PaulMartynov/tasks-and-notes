import * as SQLite from "expo-sqlite";
import { WebSQLDatabase } from "expo-sqlite";

class Database {
  db: WebSQLDatabase | null = null;

  constructor() {
    this.db = SQLite.openDatabase("db.tasksAndNotes");
    this.db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, color TEXT)"
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS notes (id TEXT PRIMARY KEY, title TEXT, text TEXT, category_id INTEGER)"
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tasks (id TEXT PRIMARY KEY, title TEXT, items TEXT, completed INTEGER, category_id INTEGER)"
      );
    });
  }
}

export default new Database();
