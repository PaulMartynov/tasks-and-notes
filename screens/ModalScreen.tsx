import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import notes from "../store/notes";
import tasks from "../store/tasks";
import NoteView from "../components/NoteView";
import TaskView from "../components/TaskView";

const ModalScreen = observer(({ navigation }: RootTabScreenProps<"Modal">) => {
  const saveNote = (note: Note) => {
    notes.updateNote(note);
    navigation.navigate("TabTwo");
  };
  const deleteNote = (id: string) => {
    notes.deleteNote(id);
    navigation.navigate("TabTwo");
  };

  const saveTask = (task: Task) => {
    tasks.updateTask(task);
    navigation.navigate("TabOne");
  };
  const deleteTask = (id: string) => {
    tasks.deleteTask(id);
    navigation.navigate("TabOne");
  };

  return (
    <View style={styles.container}>
      {notes.activeNote && (
        <NoteView note={notes.activeNote} save={saveNote} remove={deleteNote} />
      )}
      {tasks.activeTask && (
        <TaskView task={tasks.activeTask} save={saveTask} remove={deleteTask} />
      )}
      {!notes.activeNote && !tasks.activeTask && (
        <>
          <Text style={styles.title}>Error</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text
            style={styles.errorText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Task or note not selected!
          </Text>
        </>
      )}
      {/* Use a light status bar on iOS toj account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    padding: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    padding: 10,
    textAlign: "center",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
  errorText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});

export default ModalScreen;
