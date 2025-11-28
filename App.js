import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function todoInputHandler(enteredText) {
    setNewTodo(enteredText);
  }

  function addTodoHandler() {
    setTodos((currentTodos) => [...currentTodos, newTodo]);
    setNewTodo("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your To Do"
          onChangeText={todoInputHandler}
        />
        <Button title="Add Item" onPress={addTodoHandler}></Button>
      </View>
      <View style={styles.todosContainer}>
        {todos.map((todo, i) => (
          <Text key={`${todo}-${i}`}>{todo}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  todosContainer: {
    flex: 5,
  },
});
