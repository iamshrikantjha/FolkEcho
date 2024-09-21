import React from "react";
import RootStack from "./RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-web";

const RootScreen = () => {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
        <PaperProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PaperProvider>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
};

export default RootScreen;
