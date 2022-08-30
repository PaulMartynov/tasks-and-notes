import React from "react";
import { Pressable, StyleSheet, Text as DefaultText } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View } from "./Themed";

type CheckBoxProps = {
  textStyle?: DefaultText["props"]["style"];
  boxSize: number;
  checked?: boolean;
  label?: string;
  toggle?: () => void;
};

export default function CheckBox(props: CheckBoxProps): JSX.Element {
  return (
    <View style={styles.boxContainer}>
      <Pressable onPress={props.toggle} style={{ flexDirection: "row" }}>
        <View
          style={{
            ...styles.boxStyle,
            width: props.boxSize,
            height: props.boxSize,
          }}
        >
          {props.checked && (
            <FontAwesome5
              name="check"
              size={props.boxSize - 8}
              color="#3c3c3c"
            />
          )}
        </View>
        {props.label && <Text style={props.textStyle}>{props.label}</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  boxStyle: {
    marginRight: 10,
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 3,
    borderColor: "#3c3c3c",
    justifyContent: "center",
    alignItems: "center",
  },
});
