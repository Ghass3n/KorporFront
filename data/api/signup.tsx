import axios from "axios";
import API_URL from "../../constants/api"; // Import the base API URL
import AsyncStorage from "@react-native-async-storage/async-storage";

// Signup API Call
export const signup = async (userData: {
  name: string;
  surname: string;
  email: string;
  password: string;
  birthdate: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-up`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // Return the response data
  } catch (error: any) {
    throw error.response?.data || { message: "Signup failed" };
  }
};
