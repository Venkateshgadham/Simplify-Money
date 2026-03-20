import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import MetalCard from "../components/MetalCard";
import { fetchMetalPrice } from "../services/api";

const metals = ["Gold", "Silver", "Platinum", "Palladium"];

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    metals.forEach((metal) => {
      setLoading((prev) => ({ ...prev, [metal]: true }));

      fetchMetalPrice(metal).then((res) => {
        setData((prev) => ({ ...prev, [metal]: res }));
        setLoading((prev) => ({ ...prev, [metal]: false }));
      });
    });
  }, []);

  return (
    <View>
      <FlatList
        data={metals}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <MetalCard
            data={data[item]}
            loading={loading[item]}
            onPress={() =>
              navigation.navigate("Details", { metalData: data[item] })
            }
          />
        )}
      />
    </View>
  );
}