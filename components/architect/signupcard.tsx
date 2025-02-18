import { View, Text } from "react-native";
import { styled } from "nativewind";
import {
  GoogleButton,
  DividerWithText,
  Input,
  SolidButton,
  DateInput,
  PhoneNumberInput,
  EmailInput,
} from "../ui/index";
import BirthdayPicker from "./birthdaypicker";
import { useState } from "react";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function SignupCard() {
  const [isBirthdayPickerVisible, setIsBirthdayPickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <StyledView className="w-[90%] h-[450px] bg-[#F0F4FA] rounded-2xl shadow-2xl shadow-gray-400 p-6">
      <StyledView className="flex-row justify-between items-center space-x-2">
        <StyledView className="flex-1">
          <Input placeholder="first name" />
        </StyledView>
        <StyledView className="flex-1">
          <Input placeholder="last name" />
        </StyledView>
      </StyledView>
      <EmailInput placeholder="email" />
      {/* Pass the selectedDate as a value to DateInput */}
      <DateInput
        value={selectedDate}
        placeholder="Select birthday"
        onPress={() => setIsBirthdayPickerVisible(true)}
      />
      <PhoneNumberInput />
      <SolidButton
        title="Sign up"
        onPress={() => {
          console.log("signup button pressed");
        }}
      />
      <DividerWithText text="Or" />
      <GoogleButton
        text="Continue with Google"
        onPress={() => {
          console.log("google button pressed");
        }}
      />

      {/* Close the Modal when the date is picked */}
      <BirthdayPicker
        isBirthdayPickerVisible={isBirthdayPickerVisible}
        onSelectDate={(date) => {
          setSelectedDate(date);
          setIsBirthdayPickerVisible(false);
        }}
      />
    </StyledView>
  );
}
