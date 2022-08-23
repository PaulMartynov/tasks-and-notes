import { StyleSheet } from "react-native";

import React from "react";
import { Text, View } from './Themed';


type TasksItemProps = {
  id: string;
  title: string;
};

export default function TasksItem({ id, title }: TasksItemProps): JSX.Element {
  return (
    <View style={styles.itemContainer}>
      <Text>{`task #${id} ${title}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    padding: 10,
    height: 72,
    marginVertical: 2,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: 3,
  }
});