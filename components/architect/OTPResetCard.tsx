import { View, Text } from "react-native";
import { styled } from "nativewind";
import { SolidButton, OTPInput, PressableText } from "../ui/index";
import { router } from "expo-router";
const StyledView = styled(View);
const StyledText = styled(Text);

export default function OTPResetCard() {
  return (
    <StyledView className="w-[90%] h-[200px] bg-[#F0F4FA] rounded-2xl shadow-2xl shadow-gray-400 p-6 justify-center">
      <StyledView className="items-center mb-3">
        <OTPInput />
      </StyledView>
      <SolidButton
        title="Verify & Continue"
        onPress={() => {
          console.log("verify button pressed");
          router.push("/Login/forgotPassword/resetPassword");
        }}
      />
      <StyledView className="flex-row justify-center items-center pt-4">
        <StyledText className="ml-2 text-gray-400 text-xs font-semibold">
          Didn't receive any code?{" "}
        </StyledText>
        <PressableText
          text="Resend Code"
          onPress={() => {
            console.log("Resend Code pressed");
          }}
        />
      </StyledView>
    </StyledView>
  );
}
