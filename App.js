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

  function deleteGoalHandler(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <TodoInput addTodo={addTodoHandler} />
      <View style={styles.todosContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              id={item.id}
              text={item.text}
              onDelete={deleteGoalHandler}
            />
          )}
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
