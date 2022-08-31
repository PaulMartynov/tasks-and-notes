import { Pressable } from "react-native";

import React from "react";
import { Text } from "./common/Themed";
import { listItemStyles } from "./Styles";

type NoteItemProps = {
  id: string;
  title: string;
  onPress: (id: string) => void;
};

export default function NoteItem({
  id,
  title,
  onPress,
}: NoteItemProps): JSX.Element {
  const selectItem = () => {
    onPress(id);
  };
  return (
    <Pressable
      onPress={selectItem}
      style={({ pressed }) => ({
        ...listItemStyles.itemContainer,
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Text style={listItemStyles.itemText}>{`${title}`}</Text>
    </Pressable>
  );
}
