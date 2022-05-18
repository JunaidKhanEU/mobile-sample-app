import { Text, View, StyleSheet } from "react-native"

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Compare the USA's Leading </Text>
      <Text style={styles.boldHeader}>Travel Insurance Providers.</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 20,
  },
  boldHeader: {
    fontSize: 25,
  },
})
