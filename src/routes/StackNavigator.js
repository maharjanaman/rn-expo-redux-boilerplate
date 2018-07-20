import { createStackNavigator } from "react-navigation";

import { HomeScreen } from "../screens/home";

const Navigator = createStackNavigator({
  Home: HomeScreen
});

export default Navigator;
