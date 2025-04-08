import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ForgotPasswordCard } from "@/components/architect";
import { router } from "expo-router";

export default function ForgotPass() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white px-4"
    >
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="mt-6"
      >
        <Ionicons name="arrow-back-outline" size={28} color="black" />
      </TouchableOpacity>

      {/* Content Centered Vertically */}
      <View className="flex-1 justify-center items-center">
        {/* Smaller Lock Icon */}
        <Ionicons
          name="lock-closed-outline"
          size={60}
          color="black"
          style={{ marginBottom: 24 }}
        />

        <Text className="text-3xl font-semibold text-center text-gray-900 mb-2">
          Forgot Password?
        </Text>
        <Text className="text-center text-gray-600 mb-6 text-sm">
          Enter your email to reset your password.
        </Text>

        {/* Forgot Password Card */}
        <ForgotPasswordCard />
      </View>
    </KeyboardAvoidingView>
  );
}
