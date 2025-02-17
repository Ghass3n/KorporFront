import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);

export default function OTPInput(): JSX.Element {
  const numInputs = 4;
  const [otp, setOtp] = useState<string[]>(Array(numInputs).fill(""));

  // Create a ref array to hold all input references
  const inputs = useRef<Array<TextInput | null>>([]);

  // Update the digit at a specific index
  const handleChange = (text: string, index: number) => {
    // Only keep the last character if more than one is entered
    if (text.length > 1) {
      text = text.slice(-1);
    }
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move focus to next input if a digit was entered
    if (text !== "" && index < numInputs - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  // If backspace is pressed on an empty box, focus the previous input
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <StyledView className="flex-row space-x-2">
      {otp.map((digit, index) => (
        <StyledTextInput
          key={index}
          value={digit}
          onChangeText={(text: string) => handleChange(text, index)}
          onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
            handleKeyPress(e, index)
          }
          keyboardType="numeric"
          maxLength={1}
          // Styling for individual OTP boxes
          className="border border-gray-300 rounded-lg h-12 w-12 text-base text-center bg-[#F0F4FA]"
          // Explicitly type the ref parameter
          ref={(ref: TextInput | null) => (inputs.current[index] = ref)}
        />
      ))}
    </StyledView>
  );
}
