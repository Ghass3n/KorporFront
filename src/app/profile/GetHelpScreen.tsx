// ../../screens/GetHelpScreen.tsx
import React from "react";
import { ScrollView, View, Text } from "react-native";
import TopBar from "../../components/ui/TopBar";
import ListItem from "../../components/ui/ListItem";
import { useRouter } from "expo-router";

const GetHelpScreen: React.FC = () => {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <TopBar title="Get help" onBackPress={() => router.back()} />

      <View className="px-4 pb-4">
        <View className="mb-4">
          <Text className="text-lg font-bold text-gray-700 mb-2">
            Help resources
          </Text>
          <ListItem
            iconName="help-circle"
            label="FAQs"
            onPress={() => console.log("FAQs pressed")}
          />
          <ListItem
            iconName="book"
            label="Glossary"
            onPress={() => console.log("Glossary pressed")}
          />
          <ListItem
            iconName="info"
            label="How it Works"
            onPress={() => console.log("How it Works pressed")}
          />
          <ListItem
            iconName="compass"
            label="Welcome tour"
            onPress={() => console.log("Welcome tour pressed")}
          />
        </View>

        <View className="mb-4">
          <Text className="text-lg font-bold text-gray-700 mb-2">
            Contact us
          </Text>
          <ListItem
            iconName="message-square"
            label="Live chat"
            onPress={() => console.log("Live chat pressed")}
          />
          <ListItem
            iconName="message-circle"
            label="WhatsApp us"
            onPress={() => console.log("WhatsApp pressed")}
          />
          <ListItem
            iconName="mail"
            label="Email"
            onPress={() => console.log("Email pressed")}
          />
        </View>
      </View>

      <View className="items-center mb-4">
        <Text className="text-xs text-gray-400">Version 1.0</Text>
      </View>
    </ScrollView>
  );
};

export default GetHelpScreen;
