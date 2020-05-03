import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MapScreen from "./../Map/MapScreen";
import { ProfileScreen } from "../Profile/ProfileScreen";

const appNavigationStack = createStackNavigator(
  {
    MapScreen: {
      screen: MapScreen,
    },
    ProfileScreen: {
      screen: ProfileScreen,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const AppNavigationStack = createAppContainer(appNavigationStack);

export default AppNavigationStack;
