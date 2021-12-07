import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Platform, NativeModules } from "react-native";

import Platforms from "../constants/Platforms";

const deviceLanguage =
  Platform.OS === Platforms.android
    ? NativeModules.I18nManager.localeIdentifier
    : NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0];

i18n.use(initReactI18next).init({
  lng: deviceLanguage,
  compatibilityJSON: "v3",
  fallbackLng: "en_US",
  resources: {
    "en_US": {
      translation: {
        viewDetailsButton: "View Details",
        addToCartButton: "To Cart",
      },
    },
    "en_BG": {
      translation: {
        viewDetailsButton: "Виж Детайли",
        addToCartButton: "Добави",
      },
    },
  },
});
export default i18n;
