import { makeObservable, observable, action } from "mobx";
import { SQLError, SQLTransaction } from "expo-sqlite";
import database from "../database/database";

class Tasks {
  isNew = false;

  filterText = "";

  activeTask: Task | null = null;

  tasks: Task[] = [];

  currentTasks: Task[] = [];

  error = "";

  constructor() {
    makeObservable(this, {
      activeTask: observable,
      currentTasks: observable,
      updateTask: action,
      setActiveTask: action,
      deleteTask: action,
      setFilterText: action,
      filterTask: action,
    });
    this.fetchTasks();
  }

  onError(txObj: SQLTransaction, error: SQLError) {
    this.error = error.message;
    console.log("Error ", error);
    return true;
  }

  fetchTasks() {
    database.db?.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tasks ORDER BY id DESC",
        undefined,
        (txObj, { rows: { _array } }) => {
          const taskList: Task[] = [];
          _array.forEach((t) => {
            taskList.push({
              id: t.id,
              title: t.title,
              checkList: JSON.parse(t.items),
              completed: t.completed === 1,
              categoryId: t.categoryId,
            });
          });
          this.tasks = taskList;
          this.filterTask(taskList);
        },
        this.onError
      );
    });
  }

  filterTask(tasks: Task[]) {
    if (!this.filterText.trim()) {
      this.currentTasks = tasks;
      return;
    }
    const text = this.filterText.toLowerCase();
    this.currentTasks = tasks.filter((t) =>
      t.title.toLowerCase().includes(text)
    );
  }

  setFilterText(text: string) {
    this.filterText = text;
    this.filterTask(this.tasks);
  }

  updateTask(task: Task) {
    const { id, title, checkList, completed, categoryId } = task;
    if (this.isNew) {
      database.db?.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO tasks (id, title, items, completed, category_id) values (?, ?, ?, ?, ?)",
          [id, title, JSON.stringify(checkList), completed ? 1 : 0, categoryId],
          () => {
            this.isNew = false;
            this.fetchTasks();
          },
          this.onError
        );
      });
      return;
    }
    database.db?.transaction((tx) => {
      tx.executeSql(
        `UPDATE tasks SET title='${title}', items='${JSON.stringify(
          checkList
        )}', completed='${
          completed ? 1 : 0
        }', category_id='${categoryId}' WHERE id='${id}'`,
        undefined,
        () => {
          this.fetchTasks();
        },
        this.onError
      );
    });
  }

  setActiveTask(task: Task | null, isNew = false) {
    this.activeTask = task;
    this.isNew = isNew;
  }

  deleteTask(id: string) {
    if (this.isNew) {
      this.activeTask = null;
      this.isNew = false;
      return;
    }
    database.db?.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM tasks WHERE id='${id}'`,
        undefined,
        () => {
          this.fetchTasks();
        },
        this.onError
      );
    });
  }
}

export default new Tasks();
