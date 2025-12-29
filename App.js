import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, View } from "react-native";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddTodoHandler() {
    setModalIsVisible(true);
  }

  function endAddTodoHandler() {
    setModalIsVisible(false);
  }

  function addTodoHandler(newTodo) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: newTodo, key: Math.random().toString() },
    ]);
    endAddTodoHandler();
  }

  function deleteGoalHandler(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New goal"
          color="#a065ec"
          onPress={startAddTodoHandler}
        />
        <TodoInput
          visible={modalIsVisible}
          addTodo={addTodoHandler}
          onCancel={endAddTodoHandler}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  todosContainer: {
    flex: 5,
  },
});
