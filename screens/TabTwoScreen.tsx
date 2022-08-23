import {FlatList, Pressable } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from "../types";
import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { TabStyles } from "./ScreenStyles";

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={TabStyles.container}>
      <FlatList data={[]} renderItem={(item) => <Text>{""}</Text>} />
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
