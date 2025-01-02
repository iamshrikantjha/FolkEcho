import React, { useEffect, useState } from "react";
import RootStack from "./RootStack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { useColorScheme, Switch, View, Text } from "react-native";
import { darkTheme, lightTheme } from "../utils/colorPallet";
import { AudioPlayerProvider } from "../context/AudioPlayerContext";

const RootScreen = () => {
  const colorScheme = useColorScheme(); // Get system theme preference
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  // Toggle theme manually
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Sync with system color scheme
  useEffect(() => {
    setIsDarkMode(colorScheme === "dark");
  }, [colorScheme]);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <View style={{ flex: 1 }}>
              {/* Theme Toggle */}
              {/* <View style={{ alignItems: "center", margin: 10 }}>
              <Text style={{ color: theme.colors.primary }}>
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </Text>
              <Switch value={isDarkMode} onValueChange={toggleTheme} />
            </View> */}
              {/* Main App Stack */}
              <AudioPlayerProvider>
                <RootStack />
              </AudioPlayerProvider>
            </View>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootScreen;
