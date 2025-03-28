import { DefaultTheme } from "react-native-paper";

const facebookTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4267B2",
    accent: "#00A400",
    background: "#FFFFFF",
    surface: "#F0F2F5",
    text: "#000000",
    disabled: "#B0B3B8",
    placeholder: "#B0B3B8",
    backdrop: "#F0F2F5",
    error: "#FF3B30",
    divider: "#E0E0E0",
  },
};

export const lightTheme = {
  colors: {
    primary: "rgb(186, 26, 32)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(255, 218, 214)",
    onPrimaryContainer: "rgb(65, 0, 3)",
    secondary: "rgb(119, 86, 83)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 218, 214)",
    onSecondaryContainer: "rgb(44, 21, 19)",
    tertiary: "rgb(114, 91, 46)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(254, 222, 166)",
    onTertiaryContainer: "rgb(38, 25, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(32, 26, 25)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(32, 26, 25)",
    surfaceVariant: "rgb(245, 221, 219)",
    onSurfaceVariant: "rgb(83, 67, 66)",
    outline: "rgb(133, 115, 113)",
    outlineVariant: "rgb(216, 194, 191)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(54, 47, 46)",
    inverseOnSurface: "rgb(251, 238, 236)",
    inversePrimary: "rgb(255, 179, 172)",
    elevation: {
      level0: "transparent",
      level1: "rgb(252, 240, 244)",
      level2: "rgb(250, 233, 237)",
      level3: "rgb(247, 226, 231)",
      level4: "rgb(247, 224, 228)",
      level5: "rgb(245, 220, 224)",
    },
    surfaceDisabled: "rgba(32, 26, 25, 0.12)",
    onSurfaceDisabled: "rgba(32, 26, 25, 0.38)",
    backdrop: "rgba(59, 45, 44, 0.4)",
  },
};

export const darkTheme = {
  colors: {
    primary: "rgb(255, 179, 172)",
    onPrimary: "rgb(104, 0, 8)",
    primaryContainer: "rgb(147, 0, 16)",
    onPrimaryContainer: "rgb(255, 218, 214)",
    secondary: "rgb(231, 189, 184)",
    onSecondary: "rgb(68, 41, 39)",
    secondaryContainer: "rgb(93, 63, 60)",
    onSecondaryContainer: "rgb(255, 218, 214)",
    tertiary: "rgb(225, 195, 140)",
    onTertiary: "rgb(63, 45, 4)",
    tertiaryContainer: "rgb(88, 68, 25)",
    onTertiaryContainer: "rgb(254, 222, 166)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(32, 26, 25)",
    onBackground: "rgb(237, 224, 222)",
    surface: "rgb(32, 26, 25)",
    onSurface: "rgb(237, 224, 222)",
    surfaceVariant: "rgb(83, 67, 66)",
    onSurfaceVariant: "rgb(216, 194, 191)",
    outline: "rgb(160, 140, 138)",
    outlineVariant: "rgb(83, 67, 66)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(237, 224, 222)",
    inverseOnSurface: "rgb(54, 47, 46)",
    inversePrimary: "rgb(186, 26, 32)",
    elevation: {
      level0: "transparent",
      level1: "rgb(43, 34, 32)",
      level2: "rgb(50, 38, 37)",
      level3: "rgb(57, 43, 41)",
      level4: "rgb(59, 44, 43)",
      level5: "rgb(63, 47, 46)",
    },
    surfaceDisabled: "rgba(237, 224, 222, 0.12)",
    onSurfaceDisabled: "rgba(237, 224, 222, 0.38)",
    backdrop: "rgba(59, 45, 44, 0.4)",
  },
};

export default facebookTheme;
