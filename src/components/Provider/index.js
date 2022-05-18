import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

import { elevation } from "../../common/styles"

const Provider = ({ provider = "NA", setSelectedProvider }) => {
  console.log(provider)
  return (
    <TouchableOpacity onPress={() => setSelectedProvider(provider)}>
      <View style={[styles.container, elevation]}>
        <Text>{provider}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Provider

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginHorizontal: 25,
    width: 180,
    height: 40,
    borderRadius: 30,
    marginVertical: 15,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
})
