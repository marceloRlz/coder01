import { StyleSheet , TextInput , View } from "react-native"
import ButtonPrimary from "./ButtonPrimary"

const AddTask = ({
  taskTitle,
  onHandlerTitle,
  taskDescripcion,
  onHandlerDescription,
  addTask
}) => {


  return (

    <View style={styles.container}>

      <TextInput
        value={taskTitle}
        onChangeText={onHandlerTitle}
        placeholder="Enter title"
        placeholderTextColor="white"
        maxLength={18}
        style={styles.input}
      />

      <TextInput
        value={taskDescripcion}
        onChangeText={onHandlerDescription}
        placeholder="Enter Description"
        placeholderTextColor="white"
        multiline
        numberOfLines={5}
        maxLength={120}
        style={styles.input}
      />

      <ButtonPrimary title="Add Task" onPress={addTask} />

    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#3349FF",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 12
  },

  input: {
    width: "100",
    borderWidth: 4,
    borderColor: "white",
    marginHorizontal: 10,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderRadius: 4,
    color: "white",
    fontSize: 17,
    textAlignVertical: "top"

  },
})
