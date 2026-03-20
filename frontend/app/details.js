import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
  const params = useLocalSearchParams();

  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.metal}</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Price: ₹{params.price}</Text>
        <Text style={styles.text}>Previous Open: ₹{params.open}</Text>
        <Text style={styles.text}>Previous Close: ₹{params.close}</Text>
        <Text style={styles.text}>Date: {formattedDate}</Text>
        <Text style={styles.text}>Time: {formattedTime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f7fa",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});