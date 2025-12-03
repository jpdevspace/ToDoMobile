import { useState } from "react";
import { FlatList, StyleSheet, TextInput, Button, View } from "react-native";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(newTodo) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: newTodo, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <TodoInput addTodo={addTodoHandler} />
      <View style={styles.todosContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem text={item.text} />}
        />
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

  todosContainer: {
    flex: 5,
  },
});
