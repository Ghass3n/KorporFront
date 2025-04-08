import { View } from "react-native";
import { router } from "expo-router";
import { SolidButton, EmailInput } from "../ui/index";

export default function ForgotPasswordCard() {
  return (
    <View className="w-[90%] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md p-6">
      <View className="mb-4">
        <EmailInput placeholder="Email" />
      </View>
      <SolidButton
        title="Send Reset Link"
        onPress={() => {
          console.log("next button pressed");
          router.push("auth/Login/forgotPassword/OTPReset");
        }}
      />
    </View>
  );
}
