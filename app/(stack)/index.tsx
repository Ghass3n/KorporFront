import { Text, View, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { styled } from 'nativewind';
import { OutlinedButton, SolidButton } from '@/components/ui/index';
const StyledView = styled(View);
const StyledText = styled(Text);

export default function HomeScreen() {
  return (
    <StyledView className="flex-1 bg-yellow-400 justify-center items-center">
      <StyledText className="text-2xl font-bold text-black">Welcome to Korpor</StyledText>
      <OutlinedButton title="Login" onPress={() => {router.push("/Login/login")}} />
    </StyledView>
  );
}
