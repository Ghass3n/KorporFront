// ../../screens/ProfileScreen.tsx
import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView as RNScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useRouter } from "expo-router";

const ProfileScreen: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <ScrollView stickyHeaderIndices={[1]} className="flex-1 bg-gray-50">
      {/* Top Bar */}
      <View className="bg-white flex-row items-center justify-between px-4 py-4 shadow">
        <Text className="text-xl font-bold text-black">Profile</Text>
        <TouchableOpacity onPress={() => console.log("Korpor clicked")}>
          <Text className="text-xl font-bold text-black">Korpor</Text>
        </TouchableOpacity>
      </View>

      {/* Pinned Profile Card */}
      <TouchableOpacity
        onPress={() => router.push("/AccountDetails")}
        className="bg-white px-4 py-4 shadow"
      >
        <View className="flex-row items-center">
          <View className="mr-3 h-12 w-12 items-center justify-center rounded-full bg-green-200">
            <Text className="text-lg font-bold text-black">MK</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => console.log("Name clicked")}>
              <Text className="text-base font-semibold text-black">
                Mouhamedamin Kraiem
              </Text>
            </TouchableOpacity>
            <Text className="text-sm text-gray-600">
              Your account and details
            </Text>
          </View>
          <Feather
            name="chevron-right"
            size={24}
            color="black"
            className="ml-auto"
          />
        </View>
      </TouchableOpacity>

      <View className="mt-6 px-4">
        {/* KYC Progress Card */}
        <TouchableOpacity
          onPress={() => console.log("KYC card clicked")}
          className="mb-6 flex-row items-center rounded-lg bg-white p-4 shadow"
        >
          <Feather
            name="check-circle"
            size={24}
            color="black"
            className="mr-3"
          />
          <View className="flex-1">
            <Text className="mb-1 text-base font-semibold text-black">
              Verify your account to start investing
            </Text>
            <Text className="text-sm text-gray-600">2/5</Text>
          </View>
          <Feather name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        {/* Learn About Investing (Horizontal Scroll) */}
        <View className="mb-8">
          <Text className="mb-4 text-base font-semibold text-black">
            Learn about investing
          </Text>
          <RNScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 4 }}
          >
            <TouchableOpacity
              onPress={() => console.log("How do I make money clicked")}
              className="mr-4 w-60 flex-shrink-0 rounded-lg bg-green-100 p-4 shadow"
            >
              <Text className="mb-2 text-sm font-semibold text-black">
                How do I make money on Korpor?
              </Text>
              <Feather name="arrow-right" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("Receive documents clicked")}
              className="w-60 flex-shrink-0 rounded-lg bg-green-100 p-4 shadow"
            >
              <Text className="mb-2 text-sm font-semibold text-black">
                When will I receive my documents?
              </Text>
              <Feather name="arrow-right" size={20} color="black" />
            </TouchableOpacity>
          </RNScrollView>
        </View>

        {/* My Investments Section */}
        <View className="mb-8">
          <Text className="mb-4 text-base font-semibold text-black">
            My Investments
          </Text>

          <TouchableOpacity
            onPress={() => console.log("Portfolio Summary clicked")}
            className="mb-4 flex-row items-center rounded-lg bg-white p-4 shadow"
          >
            <Feather
              name="pie-chart"
              size={20}
              color="black"
              className="mr-3"
            />
            <Text className="flex-1 text-sm text-black">Portfolio Summary</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Active Investments clicked")}
            className="mb-4 flex-row items-center rounded-lg bg-white p-4 shadow"
          >
            <Feather
              name="briefcase"
              size={20}
              color="black"
              className="mr-3"
            />
            <Text className="flex-1 text-sm text-black">
              Active Investments
            </Text>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <View className="mb-8">
          <Text className="mb-4 text-base font-semibold text-black">
            Settings
          </Text>

          <TouchableOpacity
            onPress={() => console.log("About Korpor clicked")}
            className="mb-3 flex-row items-center rounded-lg bg-white p-4 shadow"
          >
            <Feather name="info" size={20} color="black" className="mr-3" />
            <Text className="flex-1 text-sm text-black">About Korpor</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Help Center clicked")}
            className="mb-3 flex-row items-center rounded-lg bg-white p-4 shadow"
          >
            <Feather
              name="help-circle"
              size={20}
              color="black"
              className="mr-3"
            />
            <Text className="flex-1 text-sm text-black">Help Center</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Notifications clicked")}
            className="mb-3 flex-row items-center rounded-lg bg-white p-4 shadow"
          >
            <Feather name="bell" size={20} color="black" className="mr-3" />
            <Text className="flex-1 text-sm text-black">Notifications</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Refer a Friend clicked")}
            className="mb-3 flex-row items-center rounded-lg bg-white p-4 shadow"
          >
            <Feather name="users" size={20} color="black" className="mr-3" />
            <Text className="flex-1 text-sm text-black">Refer a Friend</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Feedback Survey clicked")}
            className="mb-3 flex-row items-center rounded-lg bg-white p-4 shadow"
          >
            <Feather name="edit" size={20} color="black" className="mr-3" />
            <Text className="flex-1 text-sm text-black">Feedback Survey</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Calculate My Potential clicked")}
            className="mb-3 flex-row items-center rounded-lg bg-white p-4 shadow"
          >
            <Feather
              name="trending-up"
              size={20}
              color="black"
              className="mr-3"
            />
            <Text className="flex-1 text-sm text-black">
              Calculate My Potential
            </Text>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Settings clicked")}
            className="mb-3 flex-row items-center rounded-lg bg-white p-4 shadow"
          >
            <Feather name="settings" size={20} color="black" className="mr-3" />
            <Text className="flex-1 text-sm text-black">Settings</Text>
            <Feather name="chevron-right" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Social Media Icons */}
        <View className="mb-8 flex-row items-center justify-center">
          <TouchableOpacity
            onPress={() => console.log("Facebook clicked")}
            className="h-10 w-10 items-center justify-center rounded-full border border-gray-300 mx-4"
          >
            <Feather name="facebook" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Twitter clicked")}
            className="h-10 w-10 items-center justify-center rounded-full border border-gray-300 mx-4"
          >
            <Feather name="twitter" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Instagram clicked")}
            className="h-10 w-10 items-center justify-center rounded-full border border-gray-300 mx-4"
          >
            <Feather name="instagram" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={() => console.log("Logout clicked")}
          className="mb-6 rounded bg-black px-4 py-3"
        >
          <Text className="text-center text-sm font-medium text-white">
            Logout
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <View className="mb-10 items-center">
          <View className="mb-2 h-16 w-16 items-center justify-center bg-black rounded-full">
            <Image
              source={require("../../assets/logo.png")}
              style={{ width: 32, height: 32, tintColor: "white" }}
              resizeMode="contain"
            />
          </View>
          <Text className="text-xs text-gray-600 text-center">
            Korpor is a real estate investing app. All rights reserved ©{" "}
            {currentYear}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
