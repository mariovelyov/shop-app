import { createStackNavigator } from "react-navigation-stack";
import AuthScreen from "../../screens/user/AuthScreen";
import defaultNavOptions from "../default-options";

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

export default AuthNavigator;
