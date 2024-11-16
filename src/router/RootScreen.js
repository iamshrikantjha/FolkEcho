import React, { useEffect, useState } from "react";
import RootStack from "./RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-web";
import { darkTheme, lightTheme } from "../utils/colorPallet";
import { useColorScheme } from "react-native";
import StoriesScreen from "../screens/story/StoriesScreen";
import StoryScreen from "../screens/story/StoryScreen";

const RootScreen = () => {
  // const colorScheme = useColorScheme();
  // colorScheme === "dark"
  //   ? { ...MD3DarkTheme, colors: darkTheme.colors }
  //   : { ...MD3LightTheme, colors: lightTheme.colors };

  return (
    <SafeAreaProvider>
      <PaperProvider theme={lightTheme}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default RootScreen;
