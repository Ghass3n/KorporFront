import { View, Text, TouchableOpacity} from "react-native";
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

export default function PressableText({ text, onPress}: { text: string, onPress: ()=>void }) {
    return (
        <StyledTouchableOpacity onPress={onPress}>
            <StyledText className="text-[#061B98] font-semibold text-xs">
                {text}
            </StyledText>
        </StyledTouchableOpacity>
    );
}