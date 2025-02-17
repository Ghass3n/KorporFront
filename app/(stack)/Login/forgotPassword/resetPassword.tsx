import { View, Text, Image, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import { PasswordResetCard } from "@/components/architect/index";
import { router } from "expo-router";
import BackgroundImage from "../../../../assets/images/background.png";
import BackButton from "../../../../assets/images/back.png";
import Lock from "../../../../assets/images/lock.png";
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);
export default function ResetPassword() {
  return (
    <StyledView className="flex-1">
      <StyledView className="absolute top-0 left-0 right-0 bottom-0">
        <StyledImage source={BackgroundImage} className="h-1/2 w-[100%]" />
        <StyledView className="h-1/2 bg-[#F0F4FA]" />
      </StyledView>
      <StyledTouchableOpacity
        onPress={() => {
          router.back();
        }}
        className="mt-2"
      >
        <StyledImage source={BackButton} className="h-12 w-12" />
      </StyledTouchableOpacity>
      <StyledView className="flex-1 justify-center items-center">
        <StyledImage
          source={Lock}
          style={{ width: 80, height: 80, resizeMode: "contain" }}
          className="mb-6 mt-[-40%]"
        />
        <StyledText className="text-4xl font-bold text-center text-[#F0F4FA] w-[80%]">
          Create a strong Password
        </StyledText>
        <StyledText className="text-center text-[#F0F4FA] mb-6 text-xs w-[80%] italic">
          Use at least 8 characters, including one uppercase letter, one
          lowercase letter, one number, and one special character.
        </StyledText>
        <PasswordResetCard />
      </StyledView>
    </StyledView>
  );
}
