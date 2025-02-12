import { View, Image } from "react-native";
import { styled } from "nativewind";
import { useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import ArrowDown from "../../assets/images/arrowDown.png";
const StyledView = styled(View);

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <StyledView className="w-full mb-3">
      <PhoneInput
        placeholder="12 345 678"
        defaultValue={phoneNumber}
        defaultCode="TN"
        onChangeFormattedText={(text) => {
          setPhoneNumber(text);
        }}
        containerStyle={{
          borderWidth: 1,
          borderColor: "#D1D5DB",
          borderRadius: 8,
          backgroundColor: "#F0F4FA",
          height: 48,
          width: "100%",
        }}
        flagButtonStyle={{
          marginRight: -5,
          marginLeft: 12,
        }}
        textContainerStyle={{
          paddingHorizontal: 2,
          paddingVertical: 1,
          backgroundColor: "#F0F4FA",
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        }}
        textInputStyle={{
          fontSize: 16, // text-base
          color: "#000",
        }}
        textInputProps={{
          placeholderTextColor: "#A0A0A0",
        }}
        renderDropdownImage={
          <StyledView className="flex-row items-center justify-center">
            <Image source={ArrowDown} className="w-[12px] h-[12px]" />
            <StyledView className="w-[1px] bg-gray-300 mx-2 h-12" />
          </StyledView>
        }
      />
    </StyledView>
  );
}
