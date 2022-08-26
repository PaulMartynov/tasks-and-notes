import { StyleSheet } from "react-native";

export const noteStyles = StyleSheet.create({
  title: {
    marginTop: 20,
    paddingBottom: 5,
    marginHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
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
  chekListAdd: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  chekListInput: {
    fontSize: 18,
    width: "85%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginRight: 5,
    backgroundColor: "#eee",
  },
  chekListBtn: {
    backgroundColor: "#30ad54",
    borderRadius: 3,
    height: 36,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const listItemStyles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    height: 72,
    marginVertical: 2,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "solid",
    borderRadius: 3,
    overflow: "hidden",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  checkedText: {
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontSize: 18,
    color: "gray",
  },
});
