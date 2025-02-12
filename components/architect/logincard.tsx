import { View, Text } from "react-native";
import { styled } from "nativewind";
import {
  GoogleButton,
  DividerWithText,
  Input,
  PasswordInput,
  SolidButton,
  RememberMeCheckbox,
  PressableText,
  EmailInput,
} from "../ui/index";
import { router } from "expo-router";
const StyledView = styled(View);
const StyledText = styled(Text);
export default function LoginCard() {
  return (
    <StyledView className="w-[80%] h-[400px] bg-[#F0F4FA] rounded-2xl shadow-2xl shadow-gray-400 p-6">
      <GoogleButton
        text="Continue with Google"
        onPress={() => {
          console.log("google button pressed");
        }}
      />
      <DividerWithText text="Or login with" />
      <EmailInput placeholder="email" />
      <PasswordInput placeholder="password" />
      <SolidButton
        title="Log in"
        onPress={() => {
          console.log("login button pressed");
        }}
      />
      <StyledView className="flex-row items-center pt-1 justify-between mx-1">
        <RememberMeCheckbox />
        <PressableText
          text="Forgot password?"
          onPress={() => {
            console.log("forgot password pressed");
          }}
        />
      </StyledView>
      <StyledView className="flex-row justify-center items-center pt-4">
        <StyledText className="ml-2 text-gray-400 text-xs font-semibold">
          Don't have an account?{" "}
        </StyledText>
        <PressableText
          text="Sign up"
          onPress={() => {
            router.push("/Signup/signup");
          }}
        />
      </StyledView>
    </StyledView>
  );
}
