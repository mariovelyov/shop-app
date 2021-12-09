import { createAppContainer, createSwitchNavigator } from "react-navigation";

import StartupScreen from "../screens/StartupScreen";
import AuthNavigator from "./navigators/AuthNavigator";
import ShopNavigator from "./navigators/ShopNavigator";

const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthNavigator,
  Shop: ShopNavigator,
});

export default createAppContainer(MainNavigator);
