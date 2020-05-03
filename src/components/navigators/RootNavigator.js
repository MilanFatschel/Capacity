import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import WelcomeScreen from "./../Welcome/WelcomeScreen"
import LoginScreen from "./../Login/LoginScreen"
import NameScreen from "./../Register/NameScreen"
import UsernameScreen from "./../Register/UsernameScreen"
import PasswordScreen from "./../Register/PasswordScreen"
import EmailScreen from "./../Register/EmailScreen"
import PhoneNumberScreen from "./../Register/PhoneNumberScreen"
import ConfirmationScreen from "./../Register/ConfirmationScreen"
import AppNavigationStack from "./../navigators/AppNavigator";

const rootNavigationStack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
    Login : {
        screen: LoginScreen
    },
    Name : {
        screen: NameScreen,
    },
    Username : {
        screen : UsernameScreen
    },
    Password : {
        screen : PasswordScreen
    },
    Email : {
        screen : EmailScreen
    },
    PhoneNumber : {
        screen : PhoneNumberScreen
    },
    Confirmation: {
        screen: ConfirmationScreen
    },
    AppNavigationStack: {
        screen: AppNavigationStack
    }
},
{
    defaultNavigationOptions: {
      header: null
    },
}
);

const RootNavigationStack = createAppContainer(rootNavigationStack);

export default RootNavigationStack; 