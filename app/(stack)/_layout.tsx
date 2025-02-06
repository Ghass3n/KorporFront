import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="Login/login" options={{ title: "Login", headerShown: false }} />
    </Stack>
  );
}

