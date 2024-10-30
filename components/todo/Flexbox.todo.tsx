import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  item: {},
});
const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={(styles.item, { backgroundColor: "yellow", height: 50 })}>
        <Text>FlexBOx</Text>
      </View>
      <View style={(styles.item, { backgroundColor: "red", height: 50 })}>
        <Text>FlexBOx</Text>
      </View>
      <View style={(styles.item, { backgroundColor: "orange", height: 50 })}>
        <Text>FlexBOx</Text>
      </View>
      <View style={(styles.item, { backgroundColor: "green", height: 50 })}>
        <Text>FlexBOx</Text>
      </View>
    </View>
  );
};

export default FlexBox;
