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
import { router } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function SignupCard() {
  const [isBirthdayPickerVisible, setIsBirthdayPickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledView className="w-[90%] h-[450px] bg-[#F0F4FA] rounded-2xl shadow-2xl shadow-gray-400 p-6">
      <StyledView className="flex-row justify-between items-center space-x-2">
        <StyledView className="flex-1">
          <Input placeholder="First Name" value={name} onChangeText={setName} />
        </StyledView>
        <StyledView className="flex-1">
          <Input
            placeholder="Last Name"
            value={surname}
            onChangeText={setSurname}
          />
        </StyledView>
      </StyledView>
      <EmailInput placeholder="Email" value={email} onChangeText={setEmail} />
      <DateInput
        value={selectedDate}
        placeholder="Select birthday"
        onPress={() => setIsBirthdayPickerVisible(true)}
      />
      <PhoneNumberInput />
      <SolidButton
        title="Sign up"
        onPress={() => {
          console.log("Signup Info:", { name, surname, email, selectedDate });
          router.push("/Signup/password");
        }}
      />
      <DividerWithText text="Or" />
      <GoogleButton
        text="Continue with Google"
        onPress={() => {
          console.log("Google button pressed");
        }}
      />

      {/* Birthday Picker Modal */}
      <BirthdayPicker
        isBirthdayPickerVisible={isBirthdayPickerVisible}
        onSelectDate={(date) => {
          setSelectedDate(date);
          setIsBirthdayPickerVisible(false);
        }}
        setIsBirthdayPickerVisible={setIsBirthdayPickerVisible}
      />
    </StyledView>
  );
}
