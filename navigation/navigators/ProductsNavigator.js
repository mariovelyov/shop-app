import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";

import ProductsOverviewScreen from "../../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../../screens/shop/ProductDetailScreen";
import CartScreen from "../../screens/shop/CartScreen";
import Platforms from "../../constants/Platforms";
import { defaultNavOptions } from "../default-options";

export const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === Platforms.android ? "md-cart" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);
