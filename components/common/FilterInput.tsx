import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, StyleSheet, Pressable } from "react-native";
import { View } from "./Themed";

type FilterInputProps = {
  onChangeText: (t: string) => void;
};

export default function FilterInput({
  onChangeText,
}: FilterInputProps): JSX.Element {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
    null
  );

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        onChangeText(text);
      }, 300)
    );
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [text]);
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={24} color="gray" />
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(t) => setText(t)}
        autoCorrect={false}
        autoCapitalize={"none"}
      />
      {text && (
        <Pressable
          style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}
          onPress={() => setText("")}
        >
          <Ionicons name="close-outline" size={28} color="black" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    height: 42,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 5,
  },
});
