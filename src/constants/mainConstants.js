import { Platform, StatusBar } from "react-native";

export const marginLeft = 24;
export const marginRight = 24;
export const statusBarHeight =
    Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
