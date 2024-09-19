import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StoryScreen from "./src/screens/StoryScreen";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import SignInScreen from "./src/screens/auth/SignInScreen";
import ForgotPassword from "./src/screens/auth/ForgotPassword";
import StoriesScreen from "./src/screens/StoriesScreen";
import RegisterScreen from "./src/screens/auth/RegisterScreen";
import StateScreen from "./src/screens/StateScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* <HomeScreen/> */}
        {/* <SignInScreen /> */}
        {/* <StoryScreen /> */}
        {/* <ForgotPassword /> */}
        <StoriesScreen />
        {/* <RegisterScreen /> */}
        {/* <StateScreen /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
