import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(stack)" options={{ headerShown: false }} />
    </Stack>
  );
}
