import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

interface EmailInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function EmailInput({
  placeholder,
  value,
  onChangeText,
}: EmailInputProps): JSX.Element {
  const [isValid, setIsValid] = useState<boolean>(true);

  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(text === "" || emailRegex.test(text));
  };

  return (
    <StyledView className="w-full">
      <StyledTextInput
        className={`border rounded-lg px-4 h-12 text-base w-full py-3 ${
          isValid
            ? "border-gray-300 bg-[#F0F4FA] mb-3"
            : "border-red-500 bg-red-100"
        }`}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={(text: string) => {
          onChangeText(text);
          validateEmail(text);
        }}
        onBlur={() => validateEmail(value)}
      />
      {!isValid && (
        <StyledText className="text-red-500 text-sm mb-1">
          Invalid email address
        </StyledText>
      )}
    </StyledView>
  );
}
