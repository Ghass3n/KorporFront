import { useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { styled } from "nativewind";
import * as Progress from "react-native-progress";
import blueEye from "../../assets/images/blueEye.png";
import grayEye from "../../assets/images/grayEye.png";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);

export default function PasswordInput({
  placeholder,
}: {
  placeholder: string;
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  // Simple criteria to determine password strength
  const calculatePasswordStrength = (password: string) => {
    let score = 0;
    if (password.length > 0) score += 0.2;
    if (password.length >= 6) score += 0.3;
    if (/[A-Z]/.test(password)) score += 0.2;
    if (/[0-9]/.test(password)) score += 0.2;
    if (/[\W_]/.test(password)) score += 0.1;
    return Math.min(score, 1);
  };

  const passwordStrength = calculatePasswordStrength(password);

  return (
    <StyledView className="w-full relative mb-3">
      <StyledTextInput
        className="border border-gray-300 rounded-lg px-4 h-12 text-base w-full pr-12 py-3 bg-[#F0F4FA] mb-2"
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={setPassword}
      />

      {/* Eye Icon Button */}
      <TouchableOpacity
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        className="absolute right-1 transform -translate-y-1/2 flex items-center justify-center"
        style={{ height: 48, width: 40 }}
      >
        <Image
          source={isPasswordVisible ? blueEye : grayEye}
          className="w-5 h-5"
        />
      </TouchableOpacity>

      {/* Progress Bar to indicate password strength */}
      <Progress.Bar
        progress={passwordStrength}
        width={passwordStrength > 0 ? 175 : 0}
        height={3}
        color={
          passwordStrength < 0.4
            ? "#FF4D4D" // Weak
            : passwordStrength < 0.7
            ? "#FFA500" // Medium
            : "#00C851" // Strong
        }
        unfilledColor="#D3D3D3"
        borderWidth={0}
        style={{ marginHorizontal: 5, marginTop: -3 }}
      />
    </StyledView>
  );
}
