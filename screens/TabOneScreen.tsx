import { FlatList, Pressable } from 'react-native';
import { observer } from 'mobx-react-lite'

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { TabStyles } from "./ScreenStyles";
import store from "../store/store";
import TasksItem from "../components/TasksItem";

const TabOneScreen = observer(({ navigation }: RootTabScreenProps<'TabOne'>) => {
  const { tasks } = store;
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
          ...TabStyles.addBtn,
          opacity: pressed ? 0.85 : 1,
        })}>
        <MaterialIcons name="add" size={36} color="black" />
      </Pressable>
    </View>
  );
})

export default TabOneScreen;
