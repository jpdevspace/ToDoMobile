import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddTodoHandler() {
    setModalIsVisible(true);
  }

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
      <Button
        title="Add New goal"
        color="#5e0acc"
        onPress={startAddTodoHandler}
      />
      <TodoInput visible={modalIsVisible} addTodo={addTodoHandler} />
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
