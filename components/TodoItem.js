import { Pressable, StyleSheet, Text, View } from "react-native";

function TodoItem({ id, text, onDelete }) {
  return (
    <Pressable onPress={onDelete.bind(this, id)}>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{text}</Text>
      </View>
    </Pressable>
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
