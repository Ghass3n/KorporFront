// ../../screens/HelpCollectionsScreen.tsx
import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import TopBar from "../../components/ui/TopBar";
import ListItem from "../../components/ui/ListItem";
import Feather from "react-native-vector-icons/Feather";
import { useRouter } from "expo-router";

const HelpCollectionsScreen: React.FC = () => {
  const router = useRouter();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {isSearchActive ? (
        <View className="bg-white border-b border-gray-200 py-3 px-4 flex-row items-center shadow-sm mb-4">
          <Feather name="search" size={20} color="gray" className="mr-2" />
          <TextInput
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus
            className="flex-1 text-base"
          />
          <TouchableOpacity
            onPress={() => {
              setIsSearchActive(false);
              setSearchQuery("");
            }}
          >
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <TopBar
          title="Help"
          onBackPress={() => router.back()}
          rightComponent={
            <TouchableOpacity onPress={() => setIsSearchActive(true)}>
              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
          }
        />
      )}

      {!isSearchActive && (
        <View>
          <View className="px-4 py-2">
            <Text className="text-sm text-gray-500">3 collections</Text>
          </View>

          <ListItem
            label="About Stake"
            onPress={() => console.log("About Stake pressed")}
          />
          <ListItem
            label="Tunisia"
            onPress={() => console.log("Tunisia pressed")}
          />
          <ListItem
            label="France"
            onPress={() => console.log("France pressed")}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default HelpCollectionsScreen;
