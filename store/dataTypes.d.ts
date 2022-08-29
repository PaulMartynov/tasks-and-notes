interface ListItem {
  id: string;
  title: string;
}

interface TaskItem {
  id: string;
  name: string;
  checked: boolean;
}

interface Task extends ListItem {
  checkList: TaskItem[];
  completed: boolean;
}

interface Note extends ListItem {
  text: string;
}
