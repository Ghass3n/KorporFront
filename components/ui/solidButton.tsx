import { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

export default function SolidButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <StyledTouchableOpacity
      className="flex-row items-center justify-center bg-[#0366FF] rounded-lg py-3"
      onPress={onPress}
    >
      <StyledText className="font-bold text-white text-center text-lg">
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  );
}
