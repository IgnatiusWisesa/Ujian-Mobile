import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../components/Login';
import TabNav from './TabNav';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator 
          initialRouteName="Login"
          headerMode="none"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabMenu" component={TabNav} />
        </Stack.Navigator>
    )
}