import React, { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { View } from "./Themed";
import { MonoText } from "./StyledText";
import { noteStyles } from "./Styles";

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
  const saveChanges = () => {
    save({ ...task, title });
  };

  return (
    <>
      <View style={noteStyles.subtitle}>
        <MonoText>{`#${task.id}`}</MonoText>
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
        <></>
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
          onPress={() => remove(task.id)}
        >
          <AntDesign name="delete" size={36} color="#fff" />
        </Pressable>
      </View>
    </>
  );
}
