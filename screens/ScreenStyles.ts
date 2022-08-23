import { StyleSheet } from "react-native";

export const TabStyles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#eee",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  addBtn: {
    width: 72,
    height: 72,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    position: 'absolute',
    bottom: 24,
    right: 24,
    elevation: 3,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2},
  }
});