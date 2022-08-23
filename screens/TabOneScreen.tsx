import { FlatList, Pressable } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { TabStyles } from "./ScreenStyles";
import {useState} from "react";
import TasksItem from "../components/TasksItem";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [tasks, setTasks] = useState([
    { id: "1", title: "---" },
    { id: "2", title: "---" },
    { id: "3", title: "---" },
    { id: "4", title: "---" },
    { id: "5", title: "---" },
    { id: "6", title: "---" },
    { id: "7", title: "---" },
    { id: "8", title: "---" },
    { id: "9", title: "---" },
    { id: "10", title: "---" },
    { id: "11", title: "---" },
    { id: "12", title: "---" },
    { id: "13", title: "---" },
    { id: "14", title: "---" },
    { id: "15", title: "---" },
    { id: "16", title: "---" },
    { id: "17", title: "---" },
    { id: "18", title: "---" },
    { id: "19", title: "---" },
  ]);

  return (
    <View style={TabStyles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <TasksItem id={item.id} title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <Pressable
        onPress={() => navigation.navigate('Modal')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.85 : 1,
        })}>
        <View style={TabStyles.addBtn}>
          <MaterialIcons name="add" size={36} color="black" />
        </View>
      </Pressable>
    </View>
  );
}
