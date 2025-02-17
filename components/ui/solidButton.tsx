import { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface SolidButtonProps {
  title: string;
  onPress: () => void;
  width?: string;
  height?: string;
  paddingX?: string;
  paddingY?: string;
}

export default function SolidButton({
  title,
  onPress,
  width = "w-auto",
  height = "h-auto",
  paddingX = "px-4",
  paddingY = "py-3",
}: SolidButtonProps) {
  return (
    <StyledTouchableOpacity
      className={`flex-row items-center justify-center bg-[#0366FF] rounded-lg ${width} ${height} ${paddingX} ${paddingY}`}
      onPress={onPress}
    >
      <StyledText className="font-bold text-white text-center text-lg">
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  );
}
