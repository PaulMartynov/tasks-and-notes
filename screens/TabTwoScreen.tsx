import { FlatList } from "react-native";
import { observer } from "mobx-react-lite";

import * as React from "react";
import { View } from "../components/common/Themed";
import { RootTabScreenProps } from "../types";
import { TabStyles } from "./ScreenStyles";
import notesStore from "../store/notes";
import tasksStore from "../store/tasks";
import NoteItem from "../components/NoteItem";
import AddButton from "../components/AddButton";

const TabTwoScreen = observer(
  ({ navigation }: RootTabScreenProps<"TabOne">) => {
    const selectNote = (id: string) => {
      const note = notesStore.notes.find((n) => n.id === id);
      if (note) {
        tasksStore.setActiveTask(null);
        notesStore.setActiveNote(note);
        navigation.navigate("Modal");
      }
    };
    const addNote = () => {
      tasksStore.setActiveTask(null);
      notesStore.setActiveNote(
        {
          id: `${Date.now()}`,
          title: "New note",
          text: "",
        },
        true
      );
      navigation.navigate("Modal");
    };
    return (
      <View style={TabStyles.container}>
        <FlatList
          data={notesStore.notes}
          renderItem={({ item }) => (
            <NoteItem id={item.id} title={item.title} onPress={selectNote} />
          )}
          keyExtractor={(item) => item.id}
        />
        <AddButton onPress={addNote} />
      </View>
    );
  }
);

export default TabTwoScreen;
