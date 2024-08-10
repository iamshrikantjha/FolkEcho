import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Profile from "./src/screens/ProfileScreen";
import StoryScreen from "./src/screens/StoryScreen";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <Profile /> */}
          <StoryScreen />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey', // or "#fff"
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 70,
  },
});

export default App;