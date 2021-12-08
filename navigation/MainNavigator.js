import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthNavigator from "./navigators/AuthNavigator";
import ShopNavigator from "./navigators/ShopNavigator";

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  SHop: ShopNavigator,
});

export default createAppContainer(MainNavigator);
