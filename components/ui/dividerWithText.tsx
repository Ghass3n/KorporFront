import { View, Text } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function DividerWithText({ text }: { text: string }) {
  return (
    <StyledView className="flex-row items-center w-full my-4">
      {/* Left Line */}
      <StyledView className="flex-1 h-[1px] bg-gray-300" />
      
      {/* Text */}
      <StyledText className="text-gray-400 mx-4 text-sm">{text}</StyledText>


      {/* Right Line */}
      <StyledView className="flex-1 h-[1px] bg-gray-300" />
    </StyledView>
  );
}
