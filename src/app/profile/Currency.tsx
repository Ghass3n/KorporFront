// ../../screens/CurrencyScreen.tsx
import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import TopBar from "../../components/ui/TopBar";
import Feather from "react-native-vector-icons/Feather";
import CountryFlag from "react-native-country-flag";
import { useRouter } from "expo-router";

const CurrencyScreen: React.FC = () => {
  const router = useRouter();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const currencies = [
    { code: "USD", flag: "US", name: "United States Dollar ($)" },
    { code: "EUR", flag: "FR", name: "Euro (€)" },
    { code: "TND", flag: "TN", name: "Tunisian Dinar (TDN)" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <TopBar title="Select Currency" onBackPress={() => router.back()} />

      <View className="px-4 py-6">
        {currencies.map((currency) => (
          <TouchableOpacity
            key={currency.code}
            onPress={() => {
              setSelectedCurrency(currency.code);
              router.back();
            }}
            className={`flex-row items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4 ${
              selectedCurrency === currency.code ? "border-blue-500" : ""
            }`}
          >
            <View className="flex-row items-center">
              <CountryFlag isoCode={currency.flag} size={24} />
              <View className="ml-3">
                <Text className="text-base font-medium text-gray-900">
                  {currency.code}
                </Text>
                <Text className="text-sm text-gray-600">{currency.name}</Text>
              </View>
            </View>
            {selectedCurrency === currency.code && (
              <Feather name="check" size={20} color="blue" />
            )}
          </TouchableOpacity>
        ))}

        <Text className="text-sm text-gray-700 mt-4">
          Properties are listed and purchased in TND (Tunisian Dinar). Use this
          setting to approximate the value of your properties in local
          currencies.
        </Text>
      </View>
    </ScrollView>
  );
};

export default CurrencyScreen;
