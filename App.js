import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StoryScreen from "./src/screens/StoryScreen";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import SignInScreen from "./src/screens/SignInScreen";
import ForgotPassword from "./src/screens/ForgotPassword";
import StoriesScreen from "./src/screens/StoriesScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* <HomeScreen/> */}
        {/* <SignInScreen /> */}
        {/* <StoryScreen /> */}
        {/* <ForgotPassword /> */}
        <StoriesScreen />
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
