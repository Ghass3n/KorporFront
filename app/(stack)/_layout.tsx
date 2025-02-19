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
        name="Signup/password"
        options={{ title: "PasswordSignup", headerShown: false }}
      />
      <Stack.Screen
        name="Signup/verify"
        options={{ title: "VerificationScreen", headerShown: false }}
      />
      <Stack.Screen
        name="Login/forgotPassword/forgotPassword"
        options={{ title: "ForgotPassword", headerShown: false }}
      />
      <Stack.Screen
        name="Login/forgotPassword/OTPReset"
        options={{ title: "Profile", headerShown: false }}
      />
      <Stack.Screen
        name="Login/forgotPassword/resetPassword"
        options={{ title: "ResetPassword", headerShown: false }}
      />
      <Stack.Screen
        name="Login/forgotPassword/resetDone"
        options={{ title: "ResetDone", headerShown: false }}
      />
      <Stack.Screen
        name="onboarding/onboarding"
        options={{ title: "onboarding", headerShown: false }}
      />
    </Stack>
  );
}
