import { FlatList } from "react-native";
import { observer } from "mobx-react-lite";

import * as React from "react";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { TabStyles } from "./ScreenStyles";
import tasksStore from "../store/tasks";
import notesStore from "../store/notes";
import NoteItem from "../components/NoteItem";
import AddButton from "../components/AddButton";

const TabOneScreen = observer(
  ({ navigation }: RootTabScreenProps<"TabOne">) => {
    const selectTask = (id: string) => {
      const task = tasksStore.tasks.find((t) => t.id === id);
      if (task) {
        notesStore.setActiveNote(null);
        tasksStore.setActiveTask(task);
        navigation.navigate("Modal");
      }
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
    return (
      <View style={TabStyles.container}>
        <FlatList
          data={tasksStore.tasks}
          renderItem={({ item }) => (
            <NoteItem id={item.id} title={item.title} onPress={selectTask} />
          )}
          keyExtractor={(item) => item.id}
        />
        <AddButton onPress={addTask} />
      </View>
    );
  }
);

export default TabOneScreen;
