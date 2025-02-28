import { View, Text, Alert } from "react-native";
import { SolidButton, OTPInput, PressableText } from "../ui";
import { useRouter } from "expo-router";
import { verifySignUp } from "@/api/signup";
import { useState } from "react";

interface OTPCardProps {
  email: string;
}

export default function OTPCard({ email }: OTPCardProps) {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleVerify = async () => {
    const code = otp.join(""); // e.g. ["1","2","3","4"] => "1234"
    if (code.length < 4) {
      Alert.alert("Invalid Code", "Please enter the 4-digit code.");
      return;
    }

    try {
      await verifySignUp(email, code);
      Alert.alert("Success", "Account verified!", [
        {
          text: "OK",
          onPress: () => {
            // Route to login screen or wherever you want
            router.replace("/Login/login");
          },
        },
      ]);
    } catch (error: any) {
      console.error(error);
      Alert.alert("Verification Failed", error?.message || "Try again.");
    }
  };

  return (
    <View className="w-[90%] h-[200px] bg-[#F0F4FA] rounded-2xl shadow-2xl shadow-gray-400 p-6 justify-center">
      <View className="items-center mb-3">
        {/* The OTPInput can accept a callback to update the state array */}
        <OTPInput otp={otp} setOtp={setOtp} />
      </View>
      <SolidButton title="Verify & Continue" onPress={handleVerify} />
      <View className="flex-row justify-center items-center pt-4">
        <Text className="ml-2 text-gray-400 text-xs font-semibold">
          Didn't receive any code?
        </Text>
        <PressableText
          text=" Resend Code"
          onPress={() => {
            console.log("Resend Code pressed");
            // Optionally call an endpoint to resend the code
          }}
        />
      </View>
    </View>
  );
}
