import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { metalData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{metalData.metal}</Text>
      <Text>Price: ₹ {metalData.price}</Text>
      <Text>Open: ₹ {metalData.open}</Text>
      <Text>Close: ₹ {metalData.close}</Text>
      <Text>Time: {metalData.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
});