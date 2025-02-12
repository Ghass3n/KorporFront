import { TouchableOpacity, Text, View, Image } from "react-native";
import { styled } from "nativewind";
import GoogleLogo from "../../assets/images/google.png";
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledImage = styled(Image);


export default function GoogleButton({ text, onPress }: { text:string, onPress: () => void }) {
  return (
    <StyledButton
      className="flex-row items-center justify-center bg-[#F0F4FA] border border-gray-300 rounded-lg py-3 "
      onPress={onPress}
    >
      <StyledImage
        className="w-6 h-6 mr-2"
        source={GoogleLogo}
        resizeMode="contain"
      />


      <StyledText className="text-black text-md font-bold">{text}</StyledText>
    </StyledButton>



  );
}
