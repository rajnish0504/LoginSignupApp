/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignUpScreen from './src/screen/SignUpScreen';


const Stack = createNativeStackNavigator();




const App=()=>{
  
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
      {/* Screen for Home Screen */}
      <Stack.Screen
      name={"HOME"}
      component={HomeScreen}
      />
   <Stack.Screen name={"LOGIN"} component={LoginScreen}/>

   <Stack.Screen name='SIGNUP' component={SignUpScreen} />
    </Stack.Navigator>
    
    
  </NavigationContainer>
  );
}



export default App;
