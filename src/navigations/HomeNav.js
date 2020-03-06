import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator 
          initialRouteName="Home"
          headerMode="none"
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}