import React from "react";
import { FlatList, Platform, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import Platforms from "../../constants/Platforms";
import Colors from "../../constants/Colors";
import * as productActions from "../../store/actions/products";

const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          onSelect={() => {}}
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
        >
          <Button color={Colors.primary} title="Edit" onPress={() => {}} />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() =>
              dispatch(productActions.deleteProduct(itemData.item.id))
            }
          />
        </ProductItem>
      )}
    />
  );
};

UserProductsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "User Products",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === Platforms.android ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserProductsScreen;
