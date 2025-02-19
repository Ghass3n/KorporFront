import { useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { styled } from "nativewind";
import blueEye from "@assets/images/blueEye.png";
import grayEye from "@assets/images/grayEye.png";
const StyledView = styled(View);
const StyledTextInput = styled(TextInput);

export default function PasswordInput({
  placeholder,
}: {
  placeholder: string;
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <StyledView className="w-full relative">
      <StyledTextInput
        className="border border-gray-300 rounded-lg px-4 h-12 text-base w-full pr-12 py-3 bg-[#F0F4FA] mb-3"
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        secureTextEntry={!isPasswordVisible} // Toggle password visibility
      />

      {/* Eye Icon Button */}
      <TouchableOpacity
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        className="absolute right-1 transform -translate-y-1/2 flex items-center justify-center"
        style={{ height: 48, width: 40 }} // Adjusted touchable area
      >
        <Image
          source={isPasswordVisible ? blueEye : grayEye}
          className="w-5 h-5"
        />
      </TouchableOpacity>
    </StyledView>
  );
}
