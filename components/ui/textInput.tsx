import { View, TextInput } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);

export default function Input({
  placeholder,
  value,
  onChangeText,
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <StyledView>
      <StyledTextInput
        className="border border-gray-300 rounded-lg px-4 h-12 text-base w-full py-3 bg-[#F0F4FA] mb-3"
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        multiline={false}
        value={value}
        onChangeText={onChangeText} // Capture input
      />
    </StyledView>
  );
}
