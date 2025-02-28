import { View, Text, Image } from "react-native";

import { LoginCard } from "@/components/architect/index";

const BackgroundImage = require("@/assets/background.png");
const Logo = require("@/assets/logo.png");
export default function Login() {
  return (
    <View className="flex-1">
      <View className="absolute top-0 left-0 right-0 bottom-0">
        <Image source={BackgroundImage} className="h-1/2 w-[100%]" />
        <View className="h-1/2 bg-[#F0F4FA]" />
      </View>
      <View className="flex-1 justify-center items-center">
        <Image
          source={Logo}
          style={{ width: 80, height: 80, resizeMode: "contain" }}
          className="mb-6 mt-[-25%]"
        />
        <Text className="text-4xl font-bold text-center text-[#F0F4FA] mb-2 w-[80%]">
          Sign in to your Account
        </Text>
        <Text className="text-center text-[#F0F4FA] mb-6 text-xs italic">
          Enter your email and password to log in
        </Text>
        <LoginCard />
      </View>
    </View>
  );
}
