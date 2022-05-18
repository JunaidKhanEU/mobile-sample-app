import { View, TextInput, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { elevation } from "../../common/styles"
const Email = () => {
  return (
    <View style={[styles.container, elevation]}>
      <FontAwesome name="envelope" size={25} />
      <TextInput style={styles.input} placeholder="Email Address" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  input: {
    fontSize: 14,
    marginLeft: 10,
  },
})

export default Email
