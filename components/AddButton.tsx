import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type AddButtonProps = {
  onPress: () => void;
};

export default function AddButton({ onPress }: AddButtonProps): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.addBtn,
        opacity: pressed ? 0.85 : 1,
      })}
    >
      <MaterialIcons name="add" size={36} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    width: 72,
    height: 72,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#eee",
    position: "absolute",
    bottom: 24,
    right: 24,
    elevation: 3,
    shadowColor: "black",
    shadowRadius: 50,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
  },
});
