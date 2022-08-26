import { Pressable } from "react-native";

import React from "react";
import { listItemStyles } from "./Styles";
import CheckBox from "./common/CheckBox";
import { Text } from "./common/Themed";

type TaskItemProps = {
  task: Task;
  onPress: (task: Task) => void;
  onLongPress: (task: Task) => void;
};

export default function TaskItem({
  task,
  onPress,
  onLongPress,
}: TaskItemProps): JSX.Element {
  return (
    <Pressable
      onPress={() => onPress(task)}
      onLongPress={() => onLongPress(task)}
      style={({ pressed }) => ({
        ...listItemStyles.itemContainer,
        opacity: pressed ? 0.75 : 1,
      })}
    >
      <Text
        style={
          task.completed ? listItemStyles.checkedText : listItemStyles.itemText
        }
      >
        {task.title}
      </Text>
    </Pressable>
  );
}
