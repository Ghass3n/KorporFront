import { View, Text, TextInput } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

export default function Input({ placeholder } : { placeholder: string}) {
  return (
    <StyledView className="">

      <StyledTextInput
        className="border border-gray-300 rounded-lg px-4 h-12 text-base w-full py-3 bg-[#F0F4FA] mb-3"
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        multiline={false}
      />
    </StyledView>
  );
}
