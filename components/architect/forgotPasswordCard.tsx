import { View } from "react-native";
import { styled } from "nativewind";
import { SolidButton, EmailInput } from "../ui/index";
import { router } from "expo-router";

const StyledView = styled(View);

export default function ForgotPasswordCard() {
  return (
    <StyledView className="w-[90%] h-[170px] bg-[#F0F4FA] rounded-2xl shadow-2xl shadow-gray-400 p-6">
      <EmailInput placeholder="email" />
      <SolidButton
        title="Send Reset Link"
        onPress={() => {
          console.log("next button pressed");
          router.push("/Login/forgotPassword/OTPReset");
        }}
      />
    </StyledView>
  );
}
