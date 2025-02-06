import { Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);


export default function OutlinedButton({ title,onPress }: { title: string,onPress: () => void }){
  return (
    <StyledTouchableOpacity
      className="w-[80%] border-2 border-blue-500 bg-white rounded-lg px-4 py-3"
      onPress={onPress}
    >
      <StyledText className="font-bold text-blue-500 text-center text-lg">{title}</StyledText>
    </StyledTouchableOpacity>
  );
};
