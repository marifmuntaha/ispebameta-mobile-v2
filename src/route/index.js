import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DashboardScreen from "../screens/DashboardScreen";
import TeacherScreen from "../screens/TeacherScreen";
import TeacherAddScreen from "../screens/TeacherScreen/Add"
import SupervisiScreen from "../screens/SupervisiScreen";
import EvaluationScreen from "../screens/SupervisiScreen/EvaluationScreen";
import ReportScreen from "../screens/ReportScreen";

const Stack = createNativeStackNavigator();

function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="DashboardScreen"
                    component={DashboardScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="TeacherScreen"
                    component={TeacherScreen}
                    options={{
                        headerShown: false
                }}
                />
                <Stack.Screen
                    name="TeacherAddScreen"
                    component={TeacherAddScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="SupervisiScreen"
                    component={SupervisiScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="EvaluationScreen"
                    component={EvaluationScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ReportScreen"
                    component={ReportScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Route;