import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MetalCard({ data, loading, onPress }) {
  if (loading) {
    return (
      <View style={styles.card}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.card}>
        <Text style={{ color: "red" }}>Error loading data</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{data.metal}</Text>
      <Text style={styles.price}>₹ {data.price}</Text>
      <Text style={styles.time}>Updated: {data.time}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginVertical: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 22,
    color: "#2ecc71",
    marginVertical: 5,
  },
  time: {
    fontSize: 12,
    color: "#777",
  },
  loading: {
    textAlign: "center",
    color: "#999",
  },
});