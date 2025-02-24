import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { router } from "expo-router";

import {
  EmailInput,
  PasswordInput,
  SolidButton,
  GoogleButton,
  DividerWithText,
  RememberMeCheckbox,
  PressableText,
} from "../ui";
import { signin } from "../../data/api/signin";

export default function LoginCard(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignin = async (): Promise<void> => {
    try {
      const responseData = await signin({ email, password });
      console.log("Sign-in successful:", responseData);
      // You can navigate after sign-in:
      // router.replace("/Home/home");
    } catch (error: any) {
      Alert.alert("Sign-in Error", error.message || "Unable to sign in");
    }
  };

  return (
    <View className="w-[90%] h-[400px] bg-[#F0F4FA] rounded-2xl shadow-2xl shadow-gray-400 p-6">
      <GoogleButton
        text="Continue with Google"
        onPress={() => {
          console.log("Google button pressed");
        }}
      />

      <DividerWithText text="Or login with" />

      {/* Email Input */}
      <EmailInput
        placeholder="Email"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />

      {/* Password Input */}
      <PasswordInput
        placeholder="Password"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
      />

      {/* Login Button */}
      <SolidButton title="Log in" onPress={handleSignin} />

      <View className="flex-row items-center pt-1 justify-between mx-1">
        <RememberMeCheckbox />
        <PressableText
          text="Forgot password?"
          onPress={() => {
            router.push("/Login/forgotPassword/forgotPassword");
          }}
        />
      </View>

      <View className="flex-row justify-center items-center pt-4">
        <Text className="ml-2 text-gray-400 text-xs font-semibold">
          Don't have an account?{" "}
        </Text>
        <PressableText
          text="Sign up"
          onPress={() => {
            router.push("/Signup/signup");
          }}
        />
      </View>
    </View>
  );
}
