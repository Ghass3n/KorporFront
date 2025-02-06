import { View, Text } from "react-native";
import { styled } from "nativewind";
import { LoginCard } from "@/components/ui";
const StyledView = styled(View);
const StyledText = styled(Text);


export default function Login() {
  return (
    <StyledView className="flex-1">
      <StyledView className="absolute top-0 left-0 right-0 bottom-0">
        <StyledView className="h-1/2 bg-[#0366FF]" />
        <StyledView className="h-1/2 bg-[#F0F4FA]" />
      </StyledView>
      <StyledView className="flex-1 justify-center items-center">
        <StyledText className="text-4xl font-bold text-center text-[#F0F4FA] mb-2 w-[80%]">Sign in to your Account</StyledText>
        <StyledText className="text-center text-[#F0F4FA] mb-6">Enter your email and password to log in</StyledText>
        <LoginCard />
      </StyledView>
    </StyledView>
  );
};


