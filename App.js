import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { useState } from "react"

import Email from "./src/components/Email"
import Header from "./src/components/Header"
import Provider from "./src/components/Provider"

export default function App() {
  const [providers, setProviders] = useState([
    { name: "IMG" },
    { name: "AIG" },
    { name: "Seven Corners" },
    { name: "Travelex" },
  ])

  const [showSelectedProvider, setSelectedProvider] = useState("IMG")
  return (
    <View>
      <Header />
      <Email />
      <FlatList
        data={providers}
        renderItem={({ item }) => (
          <Provider
            provider={item.name}
            setSelectedProvider={setSelectedProvider}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(provider) => provider.name}
      />

      <Text style={styles.selectedProvider}>{showSelectedProvider}</Text>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  selectedProvider: {
    fontSize: 35,
    marginTop: 25,
    marginHorizontal: 25,
  },
})
