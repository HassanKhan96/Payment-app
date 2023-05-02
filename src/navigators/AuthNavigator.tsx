import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/auth/login/Login';
import Register from '../screens/auth/register/Register';
import ROUTES from '../routes/routes';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {ROUTES.AUTH.map((route, ind) => {
        return (
          <Stack.Screen
            key={ind + Math.random()}
            name={route.name}
            component={route.component}
            options={{gestureDirection: 'horizontal'}}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
