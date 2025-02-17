import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="Login/login"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="Signup/signup"
        options={{ title: "Signup", headerShown: false }}
      />
      <Stack.Screen
        name="onboarding/onboarding"
        options={{ title: "onboarding", headerShown: false }}
      />
    </Stack>
  );
}
