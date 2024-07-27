import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StoryScreen from "./src/screens/StoryScreen";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* <HomeScreen/> */}
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
