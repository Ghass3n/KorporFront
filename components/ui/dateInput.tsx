import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { styled } from "nativewind";
import calendarIcon from "../../assets/images/calendar.png";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);

export default function DateInput({
  value = "",
  placeholder,
  onPress,
}: {
  value?: string;
  placeholder: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity className="w-full relative" onPress={onPress}>
      <StyledTextInput
        className="border border-gray-300 rounded-lg px-4 h-12 text-base w-full pr-12 py-3 bg-[#F0F4FA] mb-3"
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        value={value}
        editable={false} // Make it non-editable so users can only change via the picker
      />
      <StyledView
        className="absolute right-1 transform -translate-y-1/2 flex items-center justify-center"
        style={{ height: 48, width: 40 }} // Adjusted touchable area
      >
        <Image source={calendarIcon} className="w-5 h-5" />
      </StyledView>
    </TouchableOpacity>
  );
}
