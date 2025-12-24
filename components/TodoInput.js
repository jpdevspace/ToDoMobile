import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

function TodoInput({ addTodo, visible }) {
  const [newTodo, setNewTodo] = useState("");

  function todoInputHandler(enteredText) {
    setNewTodo(enteredText);
  }

  function addTodoHandler() {
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your To Do"
          onChangeText={todoInputHandler}
          value={newTodo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Item" onPress={addTodoHandler}></Button>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
