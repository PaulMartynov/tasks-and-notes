import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import CheckBox from "./common/CheckBox";
import { View } from "./common/Themed";

type CheckItemProps = {
  item: TaskItem;
  toggle: () => void;
  remove: () => void;
};

export default function CheckItem({
  item,
  toggle,
  remove,
}: CheckItemProps): JSX.Element {
  return (
    <View style={styles.itemContainer}>
      <CheckBox
        boxSize={26}
        checked={item.checked}
        label={item.name}
        textStyle={item.checked ? styles.itemTextChecked : styles.itemText}
        toggle={toggle}
      />
      <Pressable
        style={({ pressed }) => ({
          ...styles.itemDelete,
          opacity: pressed ? 0.75 : 1,
        })}
        onPress={() => remove()}
      >
        <Ionicons name="close" size={30} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    marginBottom: 3,
    marginHorizontal: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#eee",
  },
  itemText: {
    textAlign: "center",
    fontSize: 18,
    overflow: "hidden",
  },
  itemTextChecked: {
    textAlign: "center",
    fontSize: 18,
    fontStyle: "italic",
    textDecorationLine: "line-through",
    overflow: "hidden",
  },
  itemDelete: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
});
