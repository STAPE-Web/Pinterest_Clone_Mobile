import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Card from './pages/Card';
import User from './pages/User';
import Add from './pages/Add';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Card'
                component={Card}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='User'
                component={User}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Add'
                component={Add}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}