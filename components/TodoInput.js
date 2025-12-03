import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function TodoInput({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function todoInputHandler(enteredText) {
    setNewTodo(enteredText);
  }

  function addTodoHandler() {
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Type your To Do"
        onChangeText={todoInputHandler}
        value={newTodo}
      />
      <Button title="Add Item" onPress={addTodoHandler}></Button>
    </View>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
