import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

interface IProps {
  addToDo: (v: string) => void;
}
const InputTodo = (props: IProps) => {
  const { addToDo } = props;
  const [todo, setTodo] = useState("");
  const addNewToDo = () => {
    if (!todo) {
      Alert.alert("Tiêu đề không hợp lệ", "Không hợp lệ", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK"),
          style: "default",
        },
      ]);
      return;
    }
    addToDo(todo);
    setTodo("");
  };
  return (
    <View
      style={{
        marginTop: 30,
        paddingTop: 10,
        width: "100%",
      }}
    >
      <TextInput
        autoCapitalize="characters"
        style={{
          borderColor: "blue",
          borderWidth: 2,
          width: "100%",
          padding: 10,
          height: 100,
        }}
        value={todo}
        onChangeText={(v) => setTodo(v)}
      ></TextInput>
      <Button
        title="add news"
        color={"green"}
        // onPress={() => Alert.alert("Hello")}
        // onPress={() => {
        //   setTodoList(...todoList, { id: 3, title: todo });
        // }}
        onPress={addNewToDo}
      />
    </View>
  );
};

export default InputTodo;
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
