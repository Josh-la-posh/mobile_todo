import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

export default function App(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function addGoalHandler() {
    props.setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    props.closeModal();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/adaptive-icon.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          value={enteredGoalText}
          onChangeText={(enterGoal) => setEnteredGoalText(enterGoal)}
        />
        <View style={styles.btnContainier}>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={props.closeModal} color={"#f31282"} />
          </View>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={addGoalHandler} color={"#b180f0"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 13,
    backgroundColor: '#fff',
  },
  btnContainier: {
    flexDirection: "row",
    marginTop: 16,
  },
  btn: {
    width: 100,
    marginHorizontal: 8,
  },
});
