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
      <OutlinedButton
        title="profile"
        onPress={() => {
          router.push("/profile/profile");
        }}
      />
      <OutlinedButton
        title="account"
        onPress={() => {
          router.push("/profile/AccountDetails");
        }}
      />
      <OutlinedButton
        title="settings"
        onPress={() => {
          router.push("/profile/settings");
        }}
      />
      <OutlinedButton
        title="language"
        onPress={() => {
          router.push("/profile/LanguageScreen");
        }}
      />
      <OutlinedButton
        title="currency"
        onPress={() => {
          router.push("/profile/Currency");
        }}
      />
      <OutlinedButton
        title="intro currency"
        onPress={() => {
          router.push("/profile/CurrencyIntroScreen");
        }}
      />
      <OutlinedButton
        title="notifications"
        onPress={() => {
          router.push("/profile/NotificationSettingsScreen");
        }}
      />
      <OutlinedButton
        title="security"
        onPress={() => {
          router.push("/profile/SecurityPrivacyScreen");
        }}
      />
      <OutlinedButton
        title="Help center"
        onPress={() => {
          router.push("/profile/GetHelpScreen");
        }}
      />
      <OutlinedButton
        title="Help collection"
        onPress={() => {
          router.push("/profile/HelpCollectionsScreen");
        }}
      />
      <OutlinedButton
        title="Glossary"
        onPress={() => {
          router.push("/profile/Glossary");
        }}
      />
    </View>
  );
}
