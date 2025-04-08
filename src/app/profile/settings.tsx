import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useRouter } from "expo-router"; // Import useRouter

export default function SettingsScreen() {
  const [isHapticEnabled, setIsHapticEnabled] = useState(false);
  const router = useRouter();

  const handleToggleHaptic = () => {
    setIsHapticEnabled((prev) => !prev);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Top Bar */}
      <View className="bg-white border-b border-gray-200 py-4 px-4 flex-row items-center justify-between shadow-sm mb-4">
        {/* Left Section: Back Arrow + Title */}
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => console.log("Back clicked")}
            className="mr-3"
          >
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-900">Settings</Text>
        </View>
      </View>

      {/* Main Container */}
      <View className="px-4 pb-4">
        {/* Language */}
        <TouchableOpacity
          onPress={() => router.push("/src/app/settings/LanguageScreen.tsx")} // Navigate to Language screen
          className="flex-row items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4"
        >
          <View className="flex-row items-center">
            <Feather name="globe" size={20} color="black" className="mr-4" />
            <Text className="text-base font-medium text-gray-900">
              Language
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-base text-gray-500 mr-4">English</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </View>
        </TouchableOpacity>

        {/* Currency */}
        <TouchableOpacity
          onPress={() => console.log("Currency pressed")}
          className="flex-row items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4"
        >
          <View className="flex-row items-center">
            <Feather
              name="dollar-sign"
              size={20}
              color="black"
              className="mr-4"
            />
            <Text className="text-base font-medium text-gray-900">
              Currency
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-base text-gray-500 mr-4">AED</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </View>
        </TouchableOpacity>

        {/* Investment Preferences */}
        <TouchableOpacity
          onPress={() => console.log("Investment Preferences pressed")}
          className="flex-row items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4"
        >
          <View className="flex-row items-center">
            <Feather
              name="bar-chart-2"
              size={20}
              color="black"
              className="mr-4"
            />
            <Text className="text-base font-medium text-gray-900">
              Investment preferences
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-base text-gray-500 mr-4">Unselected</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </View>
        </TouchableOpacity>

        {/* Notification Settings */}
        <TouchableOpacity
          onPress={() => console.log("Notifications Settings pressed")}
          className="flex-row items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4"
        >
          <View className="flex-row items-center">
            <Feather name="bell" size={20} color="black" className="mr-4" />
            <Text className="text-base font-medium text-gray-900">
              Notifications settings
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color="black" />
        </TouchableOpacity>

        {/* Haptic Feedback */}
        <View className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Feather
                name="smartphone"
                size={20}
                color="black"
                className="mr-4"
              />
              <Text className="text-base font-medium text-gray-900">
                Haptic feedback
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#E5E7EB", true: "#A7F3D0" }}
              thumbColor={isHapticEnabled ? "#10B981" : "#FFFFFF"}
              onValueChange={handleToggleHaptic}
              value={isHapticEnabled}
            />
          </View>
          <Text className="text-xs text-gray-500 mt-1">
            Enable haptic feedback as you navigate through the app.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
