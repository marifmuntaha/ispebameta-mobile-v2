import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DashboardScreen from "../screens/DashboardScreen";
import TeacherScreen from "../screens/TeacherScreen";
import TeacherAddScreen from "../screens/TeacherScreen/Add"
import SupervisiScreen from "../screens/SupervisiScreen";
import EvaluationScreen from "../screens/SupervisiScreen/EvaluationScreen";
import ReportScreen from "../screens/ReportScreen";
import {useEffect, useState} from "react";
import {actionType, Dispatch} from "../reducer";
import {UserContext} from "../screens/UserScreen/UserContext";

const Route = ({auth, user}) => {
    const Stack = createNativeStackNavigator();
    return auth ? (
        <UserContext.Provider value={user}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='DashboardScreen'>
                    <Stack.Screen
                        name="DashboardScreen"
                        component={DashboardScreen}
                        options={{headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}}
                        initialParams={user}
                    />
                    <Stack.Screen
                        name="TeacherScreen"
                        component={TeacherScreen}
                        options={{headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}}
                    />
                    <Stack.Screen
                        name="TeacherAddScreen"
                        component={TeacherAddScreen}
                        options={{headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}}
                    />
                    <Stack.Screen
                        name="SupervisiScreen"
                        component={SupervisiScreen}
                        options={{headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}}
                    />
                    <Stack.Screen
                        name="EvaluationScreen"
                        component={EvaluationScreen}
                        options={{headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}}
                    />
                    <Stack.Screen
                        name="ReportScreen"
                        component={ReportScreen}
                        options={{headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </UserContext.Provider>
    ) : (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen'>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}}
                />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{headerShown: false, statusBarTranslucent: true, statusBarStyle: 'light'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Route;