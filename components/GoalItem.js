import { View, Text, StyleSheet, Button, Image } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <View style={styles.goalDisplay}>
        <Image
          style={styles.image}
          source={require("../assets/images/adaptive-icon.png")}
        />
        <Text style={styles.goalText}>{props.goal}</Text>
      </View>
      <Button
        onPress={props.onDelete.bind(this, props.id)}
        color={"#fff"}
        title="X"
      />
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 8,
    padding: 8,
    botderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },
  goalDisplay: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  goalText: {
    color: "#fff",
  },
});
