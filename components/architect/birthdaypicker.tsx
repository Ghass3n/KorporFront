import { View, Modal, TouchableWithoutFeedback, Animated } from "react-native";
import { styled } from "nativewind";
import DatePicker from "react-native-modern-datepicker";
import React, { useEffect, useState, useRef } from "react";

const StyledView = styled(View);

export default function BirthdayPicker({
  isBirthdayPickerVisible,
  onSelectDate,
  setIsBirthdayPickerVisible,
}: {
  isBirthdayPickerVisible: boolean;
  onSelectDate: (date: string) => void;
  setIsBirthdayPickerVisible: (value: boolean) => void;
}) {
  const slideAnim = useRef(new Animated.Value(500)).current; // Start off-screen

  useEffect(() => {
    if (isBirthdayPickerVisible) {
      Animated.timing(slideAnim, {
        toValue: 0, // Slide into view
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 500, // Slide out of view
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isBirthdayPickerVisible]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={isBirthdayPickerVisible}
    >
      <TouchableWithoutFeedback
        onPress={() => setIsBirthdayPickerVisible(false)}
      >
        <StyledView className="flex-1 justify-center items-center bg-black/50">
          <TouchableWithoutFeedback>
            <Animated.View
              style={{
                transform: [{ translateY: slideAnim }], //TODO: the animation has a slight issue when sliding in
                padding: 16,
                borderRadius: 10,
              }}
            >
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
            </Animated.View>
          </TouchableWithoutFeedback>
        </StyledView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
