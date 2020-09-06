import React from 'react';
import Button from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//importing Screens
import Registration from '../screens/Registration';
import Login from '../screens/Login';
import JobList from '../screens/JobList';
import Profile from '../screens/Profile';

function Navigation() {
  const Stack = createStackNavigator();
  return (
    // initialRouteName="Registration"          headerMode={false}
    <Stack.Navigator>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: false,
        }}
        // options={{
        //   title: 'My home',
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="JobList"
        component={JobList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
