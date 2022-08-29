import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
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
        boxSize={24}
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
        <FontAwesome name="close" size={24} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    marginVertical: 3,
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
    fontSize: 16,
    overflow: "hidden",
  },
  itemTextChecked: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    textDecorationLine: "line-through",
    overflow: "hidden",
  },
  itemDelete: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b93f3f",
    width: 36,
    height: 36,
    borderRadius: 100,
  },
});
