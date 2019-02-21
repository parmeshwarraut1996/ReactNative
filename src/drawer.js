import Dashboard from "./components/dashboard";
import { StackNavigator, createAppContainer, createDrawerNavigator, } from "react-navigation";

import MyNotificationsScreen from "./components/notification";
import MyHomeScreen from "./components/home";

export default createDrawerNavigator({
    home: {
        screen: MyHomeScreen,
        navigationOptions: {
            drawerLabel: 'Settings',
            
        }
    },
    notificattion: {
        screen: MyNotificationsScreen,
        navigationOptions: {
            drawerLabel: 'Profile',
          
        }
    }
});