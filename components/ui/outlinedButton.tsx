import { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface OutlinedButtonProps {
  title: string;
  onPress: () => void;
  width?: string;
  height?: string;
  paddingX?: string;
  paddingY?: string;
}

export default function OutlinedButton({
  title,
  onPress,
  width = "w-[80%]",
  height = "h-auto",
  paddingX = "px-4",
  paddingY = "py-3",
}: OutlinedButtonProps) {
  return (
    <StyledTouchableOpacity
      className={`border-2 border-blue-500 bg-white rounded-lg ${width} ${height} ${paddingX} ${paddingY}`}
      onPress={onPress}
    >
      <StyledText className="font-bold text-blue-500 text-center text-lg">
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  );
}
