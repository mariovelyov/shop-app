import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import { ProductsNavigator } from "./navigators/ProductsNavigator";
import { OrdersNavigator } from "./navigators/OrdersNavigator";
import { AdminNavigator } from "./navigators/AdminNavigator";
import Colors from "../constants/Colors";

const MainNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(MainNavigator);
