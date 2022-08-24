import { Pressable, StyleSheet } from "react-native";

import React from "react";
import { Text } from "./Themed";

type TasksItemProps = {
  id: string;
  title: string;
  onPress: (id: string) => void;
};

export default function TasksItem({
  id,
  title,
  onPress,
}: TasksItemProps): JSX.Element {
  const selectItem = () => {
    onPress(id);
  };
  return (
    <Pressable
      onPress={selectItem}
      style={({ pressed }) => ({
        ...styles.itemContainer,
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Text>{`#${id} ${title}`}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    height: 72,
    marginVertical: 2,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: 3,
  },
});
