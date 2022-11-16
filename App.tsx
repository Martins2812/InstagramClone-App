import React, { useState } from "react";
import { Login } from "./src/screens/Login";
import { Principal } from "./src/screens/Principal";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Principal" component={Principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 


