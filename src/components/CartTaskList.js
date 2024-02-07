import { StyleSheet , Text , View , Switch } from "react-native"
import React from "react"
import ButtonPrimary from "./ButtonPrimary"


const CartTaskList = ({
  item,
  onHandlerModaDelete,
  screenWidth,
  updateTaskCompleted,
}) => {

  return (
    <View style={[styles.taskCard ,  { width: screenWidth - 62 }]}>
      <Text style={styles.text}>Creation:{item.createAt} </Text>
      <Text style={styles.text}>update:{item.updateAt} </Text>
      <Text style={styles.text}>Title:{item.title} </Text>
      <Text style={styles.text}>Description:{item.description} </Text>

      <View style={styles.completedContanier}>
        <Switch
          value={item.completed}
          onValueChange={() => updateTaskCompleted(item.id)}
        />
        <Text style={styles.textCompleted}>
          {item.completed ? "Complete" : "pending"}
        </Text>
      </View>
      <ButtonPrimary title="DELETLE" onPress={() => onHandlerModaDelete(item)} />
    </View>
  )


}

export default CartTaskList;

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: "#3349FF",
    padding: 18,
    marginHorizontal: 12,
    marginVertical: 12,
    alignItems: "flex-start",
    gap: 25,
    borderRadius: 4
  },
  text: {
    width: "100%",
    color: "white",
    fontSize: 18
  },
  completedContanier: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15
  },
  textCompleted: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
});
