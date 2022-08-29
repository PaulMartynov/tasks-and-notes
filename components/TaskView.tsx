import React, { useState } from "react";
import { Pressable, TextInput, Alert, FlatList } from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { Text, View } from "./common/Themed";
import { MonoText } from "./common/StyledText";
import { noteStyles } from "./Styles";
import CheckItem from "./CheckItem";

type TaskViewProps = {
  task: Task;
  save: (task: Task) => void;
  remove: (id: string) => void;
};

export default function TaskView({
  task,
  remove,
  save,
}: TaskViewProps): JSX.Element {
  const [title, setTitle] = useState(task.title);
  const [checkItemText, setCheckItemText] = useState("");
  const [checkList, setCheckList] = useState(task.checkList);
  const [completed, setCompleted] = useState(task.completed);

  const saveChanges = () => {
    save({ ...task, title, checkList, completed });
  };
  const deleteTask = () => {
    Alert.alert("Confirm", "Delete this task?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => remove(task.id) },
    ]);
  };

  const addCheckItem = () => {
    if (!checkItemText.trim()) {
      return;
    }
    if (checkItemText.includes("\n")) {
      const list: TaskItem[] = [];
      checkItemText.split("\n").forEach((st, i) => {
        list.push({ id: `${Date.now()}${i}`, name: st, checked: false });
      });
      setCheckList([...checkList, ...list]);
      setCheckItemText("");
      return;
    }
    setCheckList([
      ...checkList,
      { id: `${Date.now()}`, name: checkItemText, checked: false },
    ]);
    setCheckItemText("");
  };

  const deleteItem = (id: string) => {
    setCheckList(checkList.filter((ch) => ch.id !== id));
  };

  const checkItem = (id: string) => {
    setCheckList(
      checkList.map((ch) => {
        if (ch.id === id) {
          return { ...ch, checked: !ch.checked };
        }
        return ch;
      })
    );
  };

  return (
    <>
      <View style={noteStyles.subtitle}>
        <MonoText>{`#${task.id}`}</MonoText>
      </View>
      <View style={noteStyles.completeBox}>
        <Pressable
          style={({ pressed }) => ({
            ...noteStyles.completeBtn,
            opacity: pressed ? 0.75 : 1,
            backgroundColor: completed ? "#30ad54" : "#dcb91c",
          })}
          onPress={() => setCompleted(!completed)}
        >
          <Text style={noteStyles.completeBtnText}>
            {completed ? "completed" : "not completed"}
          </Text>
        </Pressable>
      </View>
      <TextInput
        style={noteStyles.title}
        value={title}
        onChangeText={(t) => setTitle(t)}
      />
      <View
        style={noteStyles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={noteStyles.textAreaContainer}>
        <View style={noteStyles.chekListAdd}>
          <TextInput
            multiline={true}
            style={noteStyles.chekListInput}
            value={checkItemText}
            onChangeText={(t) => setCheckItemText(t)}
          />
          <Pressable
            style={({ pressed }) => ({
              ...noteStyles.chekListBtn,
              opacity: pressed ? 0.85 : 1,
            })}
            onPress={addCheckItem}
          >
            <Entypo name="plus" size={28} color="#fff" />
          </Pressable>
        </View>
        <FlatList
          style={{ backgroundColor: "#eee" }}
          data={checkList}
          renderItem={({ item }) => (
            <CheckItem
              toggle={() => checkItem(item.id)}
              item={item}
              remove={() => deleteItem(item.id)}
            />
          )}
          keyExtractor={(item) => `check-${item.id}`}
        />
      </View>
      <View style={noteStyles.buttonsContainer}>
        <Pressable
          style={({ pressed }) => ({
            ...noteStyles.button,
            ...noteStyles.saveButton,
            opacity: pressed ? 0.75 : 1,
          })}
          onPress={saveChanges}
        >
          <FontAwesome name="save" size={36} color="#fff" />
        </Pressable>
        <Pressable
          style={({ pressed }) => ({
            ...noteStyles.button,
            opacity: pressed ? 0.75 : 1,
          })}
          onPress={deleteTask}
        >
          <AntDesign name="delete" size={36} color="#fff" />
        </Pressable>
      </View>
    </>
  );
}
