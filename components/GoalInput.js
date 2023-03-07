import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Modal,
  Image,
  Alert,
} from "react-native";

export default function App(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [errMsg, setErrMsg] = useState("");

  function addGoalHandler() {
    {
      enteredGoalText.length > 2
        ? (props.setCourseGoals((prev) => [
            ...prev,
            { text: enteredGoalText, id: Math.random().toString() },
          ]),
          setEnteredGoalText(""),
          props.closeModal())
        : enteredGoalText.length === 0
        ? (setErrMsg("Enter a value!!!"),
          setTimeout(() => {
            setErrMsg("");
          }, 2000))
        : setErrMsg(`Value must be greater than ${enteredGoalText.length}`);
    }
  }

  function errHandlerMsg() {    
    //   enteredGoalText.length < 3 &&
        setErrMsg(`Value must be greater than ${enteredGoalText.length}`);    
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.errMsg}>{errMsg}</Text>
        </View>
        <View style={styles.validContent}>
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
              <Button
                title="Cancel"
                onPress={props.closeModal}
                color={"#f31282"}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Add Goal"
                onPress={addGoalHandler}
                color={"#b180f0"}
              />
            </View>
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
    paddingTop: -100,
    backgroundColor: "#311b6b",
    flexDirection: "column",
  },
  errMsg: {
    color: "red",
    fontSize: 16,
  },
  validContent: {
    width: "100%",
    alignItems: "center",
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
    backgroundColor: "#fff",
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
