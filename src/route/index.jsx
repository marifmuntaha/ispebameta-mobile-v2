import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import RegisterScreen from "../screens/RegisterScreen";

export const publicRoutes = [
    {
        name: 'RegisterScreen',
        component: RegisterScreen,
        options: {headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}
    },
    {
        name: 'LoginScreen',
        component: LoginScreen,
        options: {headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}
    },
    {
        name: 'DashboardScreen',
        component: DashboardScreen,
        options: {headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}
    }
]