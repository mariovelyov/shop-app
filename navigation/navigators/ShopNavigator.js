import { createDrawerNavigator } from "react-navigation-drawer";

import { ProductsNavigator } from "./ProductsNavigator";
import { OrdersNavigator } from "./OrdersNavigator";
import { AdminNavigator } from "./AdminNavigator";
import Colors from "../../constants/Colors";

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
  }
);

export default ShopNavigator;
