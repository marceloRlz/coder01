import { StyleSheet , Text , View , Modal , Button } from "react-native"

const ModalDeleteTask = ({

  taskSelected,
  deleteTask,
  onHandlerModaDelete,
  modalVisible
}) => {
  return (
    <Modal visible={modalVisible}  animationType="fade" onRequestClose={() => onHandlerModaDelete({})} >
      <View>
        <Text>Are you sure I want to delete the task? :{taskSelected.title}</Text>
        <Button title="Yes" onPress={deleteTask} />
        <Button title="no" onPress={() => onHandlerModaDelete({})} />

      </View>

    </Modal>
  )
}

export default ModalDeleteTask;

const styles = StyleSheet.create({})
