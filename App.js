import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StoryScreen from "./src/screens/StoryScreen";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import SignInScreen from "./src/screens/SignInScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* <HomeScreen/> */}
        {/* <SignInScreen /> */}
        <StoryScreen />
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
