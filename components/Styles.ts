import { StyleSheet } from "react-native";

export const noteStyles = StyleSheet.create({
  title: {
    padding: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    padding: 10,
    textAlign: "center",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
  textAreaContainer: {
    flex: 1,
  },
  textArea: {
    height: "100%",
    padding: 10,
    marginHorizontal: 5,
    borderColor: "#eee",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginBottom: 5,
    borderRadius: 3,
    overflow: "hidden",
  },
  button: {
    width: "50%",
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b93f3f",
  },
  saveButton: {
    backgroundColor: "#365d91",
  },
});
