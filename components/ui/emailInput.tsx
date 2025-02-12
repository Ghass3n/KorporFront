import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

export default function Input({ placeholder }: { placeholder: string }) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (text: string) => {
    // Regex to check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(text === "" || emailRegex.test(text)); // Allow empty input
  };

  return (
    <StyledView className="w-full">
      <StyledTextInput
        className={`border rounded-lg px-4 h-12 text-base w-full py-3  ${
          isValid
            ? "border-gray-300 bg-[#F0F4FA] mb-3"
            : "border-red-500 bg-red-100"
        }`}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => setEmail(text)} // Updates state but doesn't validate immediately
        onBlur={() => validateEmail(email)} // Validate only when input loses focus
      />
      {!isValid && (
        <StyledText className="text-red-500 text-sm mb-1">
          Invalid email address
        </StyledText>
      )}
    </StyledView>
  );
}
