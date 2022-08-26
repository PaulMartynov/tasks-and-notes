import React, { useState } from "react";
import { Alert, Pressable, TextInput } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { View } from "./common/Themed";
import { MonoText } from "./common/StyledText";
import { noteStyles } from "./Styles";

type NoteViewProps = {
  note: Note;
  save: (note: Note) => void;
  remove: (id: string) => void;
};

export default function NoteView({
  note,
  remove,
  save,
}: NoteViewProps): JSX.Element {
  const [text, setText] = useState(note.text);
  const [title, setTitle] = useState(note.title);

  const saveChanges = () => {
    save({ ...note, title, text });
  };
  const deleteNote = () => {
    Alert.alert("Confirm", "Delete this note?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => remove(note.id) },
    ]);
  };

  return (
    <>
      <View style={noteStyles.subtitle}>
        <MonoText>{`#${note.id}`}</MonoText>
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
        <TextInput
          style={noteStyles.textArea}
          multiline={true}
          numberOfLines={10}
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
          value={text}
          onChangeText={(t) => setText(t)}
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
          onPress={deleteNote}
        >
          <AntDesign name="delete" size={36} color="#fff" />
        </Pressable>
      </View>
    </>
  );
}
