import { Text, View } from "react-native";
import "../../global.css";
import { OutlinedButton } from "@/components/ui/index";
import { router } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 bg-yellow-400 justify-center items-center">
      <Text className="text-2xl font-bold text-black">Welcome to Korpor</Text>
      <OutlinedButton
        title="Login"
        onPress={() => {
          router.push("auth/Login");
        }}
      />
      <OutlinedButton
        title="Signup"
        onPress={() => {
          router.push("auth/Signup");
        }}
      />
      <OutlinedButton
        title="onboarding"
        onPress={() => {
          router.push("/onboarding/onboarding");
        }}
      />
    </View>
  );
}
