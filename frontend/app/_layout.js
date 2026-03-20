import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Stack.Screen
        name="details"
        options={{
          title: "Details",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}