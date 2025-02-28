import { View, Text, Alert } from "react-native";
import { SolidButton, PasswordBarInput } from "../ui";
import { useState } from "react";
import { useRouter } from "expo-router";
import { signupUser } from "@/api/signup";

interface PasswordCardProps {
  name: string;
  surname: string;
  email: string;
  birthdate: string;
}

export default function PasswordCard({
  name,
  surname,
  email,
  birthdate,
}: PasswordCardProps) {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      // We pass everything EXCEPT phone to the backend
      await signupUser({
        name,
        surname,
        email,
        birthdate,
        // phone is intentionally omitted
        password,
      });

      // If success, navigate to verification screen
      router.push({
        pathname: "/auth/Signup/verify",
        params: { email },
      });
    } catch (error: any) {
      console.error(error);
      Alert.alert("Sign Up Failed", error?.message || "Please try again.");
    }
  };

  return (
    <View className="w-[90%] h-auto bg-[#09090b] rounded-2xl border border-[#27272a] p-5">
      <Text className="text-4xl ml-1 font-bold text-[#F0F4FA] w-[80%]">
        Create a strong Password
      </Text>
      <Text className="text-[#F0F4FA] mb-6 ml-1 text-small w-[80%]">
        Use at least 8 characters, including one uppercase letter, one lowercase
        letter, one number, and one special character.
      </Text>
      <PasswordBarInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <PasswordBarInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <SolidButton title="Set Password & Continue" onPress={handleSignup} />
    </View>
  );
}
