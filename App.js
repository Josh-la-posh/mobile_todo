import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInputs from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function deleteGoalHandler(id) {
    setCourseGoals(prev => {
      return prev.filter((goal) => goal.id !== id);
    })
  }
  
      function closeModal () {
        setModalIsVisible(false);
      }

  return (
    <View style={styles.appContainer}>
      <Button title="Tap Me" onPress={() => setModalIsVisible(true)} />
      {modalIsVisible && <GoalInputs closeModal={closeModal} setCourseGoals={setCourseGoals}/>}
      <View style={styles.goalContainer}>
        {courseGoals.map((goal) => {
          return <GoalItem onDelete={deleteGoalHandler} id={goal.id} key={goal.id} goal={goal.text} />;        
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
  },
});
