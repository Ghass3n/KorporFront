import { View, Text } from "react-native";
import { styled } from "nativewind";
import { SolidButton, PasswordBarInput } from "../ui/index";
import { router } from "expo-router";

const StyledView = styled(View);

export default function PasswordResetCard() {
  return (
    <StyledView className="w-[90%] h-[230px] bg-[#F0F4FA] rounded-2xl shadow-2xl shadow-gray-400 p-6">
      <PasswordBarInput placeholder="password" />
      <PasswordBarInput placeholder="confirm password" />
      <SolidButton
        title="Update Password"
        onPress={() => {
          console.log("next button pressed");
          router.push("/Login/forgotPassword/resetDone");
        }}
      />
    </StyledView>
  );
}
