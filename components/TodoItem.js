import { StyleSheet, Text, View } from "react-native";

function TodoItem({ text }) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{text}</Text>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  todoText: {
    color: "white",
  },
});
