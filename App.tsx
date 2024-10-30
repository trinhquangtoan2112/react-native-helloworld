import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import InputTodo from "./components/todo/Input.todo";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ListTodo from "./components/todo/List.todo";
import FlexBox from "./components/todo/Flexbox.todo";
const item = () => {};
export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Hỏi Dân IT :v" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7" },
    { id: 8, title: "Tony Kroos" },
    { id: 9, title: "Nine" },
    { id: 10, title: "M10" },
  ]);
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const addToDo = (title: string) => {
    const todo = { id: getRandomArbitrary(1, 10000), title };
    setTodoList([...todoList, todo]);
  };
  const deleteToDo = (id: number) => {
    const newToDo = todoList.filter((item) => item.id !== id);
    setTodoList(newToDo);
  };
  return (
    <View>
      <InputTodo addToDo={addToDo}></InputTodo>
      {/* <ScrollView>
        {todoList.map((item) => {
          return (
            <Text style={styles.todo} key={item.id}>
              {item.title}
            </Text>
          );
        })}
      </ScrollView> */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ListTodo todoList={todoList} deleteToDo={deleteToDo}></ListTodo>
      </TouchableWithoutFeedback>
      {/* <FlexBox></FlexBox>*/}
    </View>
  );
}

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
