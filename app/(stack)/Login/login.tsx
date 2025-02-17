import { View, Text, Image } from "react-native";
import { styled } from "nativewind";
import { LoginCard } from "@/components/architect";
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
import BackgroundImage from "../../../assets/images/background.png";
import Logo from "../../../assets/images/logo.png";
export default function Login() {
  return (
    <StyledView className="flex-1">
      <StyledView className="absolute top-0 left-0 right-0 bottom-0">
        <StyledImage source={BackgroundImage} className="h-1/2 w-[100%]" />
        <StyledView className="h-1/2 bg-[#F0F4FA]" />
      </StyledView>
      <StyledView className="flex-1 justify-center items-center">
        <StyledImage
          source={Logo}
          style={{ width: 80, height: 80, resizeMode: "contain" }}
          className="mb-6 mt-[-25%]"
        />
        <StyledText className="text-4xl font-bold text-center text-[#F0F4FA] mb-2 w-[80%]">
          Sign in to your Account
        </StyledText>
        <StyledText className="text-center text-[#F0F4FA] mb-6 text-xs italic">
          Enter your email and password to log in
        </StyledText>
        <LoginCard />
      </StyledView>
    </StyledView>
  );
}
