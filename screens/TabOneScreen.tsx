import { Alert, FlatList } from "react-native";
import { observer } from "mobx-react-lite";

import * as React from "react";
import { View } from "../components/common/Themed";
import { RootTabScreenProps } from "../types";
import { TabStyles } from "./ScreenStyles";
import tasksStore from "../store/tasks";
import notesStore from "../store/notes";
import AddButton from "../components/AddButton";
import TaskItem from "../components/TaskItem";
import FilterInput from "../components/common/FilterInput";

const TabOneScreen = observer(
  ({ navigation }: RootTabScreenProps<"TabOne">) => {
    const selectTask = (task: Task) => {
      notesStore.setActiveNote(null);
      tasksStore.setActiveTask(task);
      navigation.navigate("Modal");
    };
    const addTask = () => {
      notesStore.setActiveNote(null);
      tasksStore.setActiveTask(
        {
          id: `${Date.now()}`,
          title: "New task",
          checkList: [],
          completed: false,
        },
        true
      );
      navigation.navigate("Modal");
    };
    const completeTask = (task: Task) => {
      Alert.alert("Action", "What to do with this task?", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => tasksStore.deleteTask(task.id),
        },
        {
          text: task.completed ? "uncompleted" : "Complete",
          onPress: () =>
            tasksStore.updateTask({ ...task, completed: !task.completed }),
        },
      ]);
    };

    return (
      <View style={TabStyles.container}>
        <FilterInput onChangeText={(t) => tasksStore.setFilterText(t)} />
        <FlatList
          data={tasksStore.currentTasks}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onPress={selectTask}
              onLongPress={completeTask}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <AddButton onPress={addTask} />
      </View>
    );
  }
);

export default TabOneScreen;
