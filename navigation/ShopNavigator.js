import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import Platforms from "../constants/Platforms";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === Platforms.android ? Colors.primary : "",
      },
      headerTintColor:
        Platform.OS === Platforms.android ? Colors.white : Colors.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
