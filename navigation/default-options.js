import { Platform } from "react-native";

import Platforms from "../constants/Platforms";
import Colors from "../constants/Colors";

export const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === Platforms.android ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor:
    Platform.OS === Platforms.android ? Colors.white : Colors.primary,
};
