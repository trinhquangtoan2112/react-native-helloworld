import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  TouchableWithoutFeedback,
} from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "red",
    paddingTop: "10%",
  },
  todo: {
    padding: 30,
    fontSize: 30,
  },
});
interface IProps {
  todoList: ITodo[];
  deleteToDo: (v: number) => void;
}
const ListTodo = (props: IProps) => {
  const { todoList, deleteToDo } = props;
  return (
    <FlatList
      data={todoList}
      keyExtractor={(item) => item.id + ""}
      renderItem={({ item }) => {
        return (
          <TouchableWithoutFeedback
            style={styles.todo}
            key={item.id}
            onPress={() => {
              deleteToDo(item.id);
            }}
          >
            <Text>{item.title}</Text>
          </TouchableWithoutFeedback>
        );
      }}
    />
  );
};

export default ListTodo;
