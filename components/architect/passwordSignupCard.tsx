import { View, Text } from "react-native";
import { styled } from "nativewind";
import { SolidButton, PasswordBarInput } from "../ui/index";
import { router } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function PasswordCard() {
  return (
    <StyledView className="w-[90%] h-[230px] bg-[#F0F4FA] rounded-2xl shadow-2xl shadow-gray-400 p-6">
      <PasswordBarInput placeholder="password" />
      <PasswordBarInput placeholder="confirm password" />
      <SolidButton
        title="Set Password & Continue"
        onPress={() => {
          console.log("next button pressed");
          router.push("/Signup/verify");
        }}
      />
    </StyledView>
  );
}
