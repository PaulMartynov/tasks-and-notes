interface ListItem {
  id: string;
  title: string;
}

interface TaskItem {
  name: string;
  done: boolean;
}

interface Task extends ListItem {
  checkList: TaskItem[];
}

interface Note extends ListItem {
  text: string;
}
