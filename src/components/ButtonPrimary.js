import { Pressable ,  StyleSheet , Text } from "react-native"



const ButtonPrimary = ({ title, onPress }) => {
  return (

    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title} </Text>
    </Pressable>

  )
}



export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 7,
    alignItems: "center",
    paddingHorizontal: 8,
    borderRadius: 4

  },
  text: {
    fontSize: 18

  },
})
