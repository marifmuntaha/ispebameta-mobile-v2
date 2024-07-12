import React, {useEffect} from 'react';
import {APICore} from "../utils/api/APICore";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {publicRoutes} from "./index";
import {useNavigation} from "@react-navigation/native";

const AllRoutes = () => {
    const api = new APICore();
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
    useEffect(() => {
        !api.isUserAuthenticated()
            ? navigation.navigate('LoginScreen')
            : navigation.navigate('DashboardScreen')
    }, []);
    return (
        <React.Fragment>
            <Stack.Navigator>
                {publicRoutes.map((route, idx) => (
                    <Stack.Screen
                        key={idx}
                        name={route.name}
                        component={route.component}
                        options={route.options}
                    />
                ))}
            </Stack.Navigator>
        </React.Fragment>
    )
}

export default AllRoutes;