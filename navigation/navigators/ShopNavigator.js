import React from "react";
import { SafeAreaView, Button, View } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { useDispatch } from "react-redux";

import { ProductsNavigator } from "./ProductsNavigator";
import { OrdersNavigator } from "./OrdersNavigator";
import { AdminNavigator } from "./AdminNavigator";
import Colors from "../../constants/Colors";
import * as authActions from "../../store/actions/auth";

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
    contentComponent: (props) => {
      const dispatch = useDispatch();

      return (
        <View style={{ flex: 1, paddingTop: 30 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItems {...props} />
            <Button
              title="Logout"
              color={Colors.primary}
              onPress={() => {
                dispatch(authActions.logout());
                props.navigation.navigate("Auth");
              }}
            />
          </SafeAreaView>
        </View>
      );
    },
  }
);

export default ShopNavigator;
