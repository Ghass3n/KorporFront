import { View, Modal } from "react-native";
import { styled } from "nativewind";
import DatePicker from "react-native-modern-datepicker";
import React, { useEffect, useState } from "react";

const StyledView = styled(View);

export default function BirthdayPicker({
  isBirthdayPickerVisible,
  onSelectDate,
}: {
  isBirthdayPickerVisible: boolean;
  onSelectDate: (date: string) => void;
}) {
  // Delay rendering until modal is fully visible
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isBirthdayPickerVisible) {
      const timer = setTimeout(() => setShouldRender(true), 5);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(false);
    }
  }, [isBirthdayPickerVisible]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isBirthdayPickerVisible}
    >
      <StyledView className="flex-1 justify-center items-center">
        {shouldRender && (
          <DatePicker
            onSelectedChange={(date) => {
              onSelectDate(date);
            }}
            mode="calendar"
            style={{
              backgroundColor: "#f0f4fa",
              borderRadius: 10,
              borderColor: "#ccc",
              borderWidth: 1,
              // Using fixed width instead of percentage can help with layout stability:
              width: 320,
              height: 350,
            }}
            options={{
              mainColor: "#0366FF",
              backgroundColor: "#f0f4fa",
              textHeaderColor: "#000",
              textDefaultColor: "#000",
            }}
          />
        )}
      </StyledView>
    </Modal>
  );
}
