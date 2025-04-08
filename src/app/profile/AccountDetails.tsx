// ../../screens/AccountScreen.tsx
import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import TopBar from "../../components/ui/TopBar";
import Card from "../../components/ui/card";
import ProfileCard from "../../components/ui/ProfileCard";
import Feather from "react-native-vector-icons/Feather";

const AccountScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <TopBar
        title="Your Account"
        onBackPress={() => console.log("Back clicked")}
      />

      <View className="pt-4 px-4">
        {/* Header / Korpor Info */}
        <Card>
          <Text className="text-base font-semibold text-gray-900">
            Korpor since Mar 11, 2025
          </Text>
          <Text className="mt-1 text-sm text-gray-500">Korpor Intro</Text>
        </Card>

        {/* Profile Card */}
        <ProfileCard
          initials="MK"
          name="Mouhamedamin Kraiem"
          email="mouhamedaminkraiem09@gmail.com"
          phone="+216 29 453 228"
          accountType="Individual Account"
          onEmailUpdate={() => console.log("Email update clicked")}
          onPhoneUpdate={() => console.log("Phone update clicked")}
          onSwitchAccount={() => console.log("Switch clicked")}
        />

        {/* Investment Limit Card */}
        <Card>
          <View className="flex-row items-center justify-between mb-2">
            <View>
              <Text className="text-sm text-gray-600">Investment Limit</Text>
              <Text className="text-base font-semibold text-gray-900">
                0% used
              </Text>
            </View>
            <TouchableOpacity onPress={() => console.log("View limit clicked")}>
              <Text className="text-base font-medium text-gray-700">View</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-sm text-gray-600">TN 0 / 367,000</Text>
        </Card>

        {/* Global Users Info */}
        <View className="py-4 mb-4">
          <Text className="text-sm text-gray-600 text-center">
            You are amongst 1M global users from 209 different countries
          </Text>
        </View>

        {/* Close Account Button */}
        <TouchableOpacity
          onPress={() => console.log("Close Account clicked")}
          className="flex-row items-center justify-center rounded-xl border border-red-500 bg-white p-4 shadow-sm mb-4"
        >
          <Feather name="trash" size={20} color="#EF4444" className="mr-4" />
          <Text className="text-base font-medium text-red-500">
            Close Account
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
