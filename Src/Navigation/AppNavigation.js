import { View, Text,I18nManager } from 'react-native'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screens/SpalshScreen';
import Welcome1Screen from '../Screens/Welcome1Screen';
import Welcome2Screen from '../Screens/Welcome2Screen';
import Welcome3Screen from '../Screens/Welcome3Screen';
import SignupScreen from '../Screens/SignupScreen';
// import HomeNavigation from './HomeNavigation';
import BottomTabs from './BottomTabs';
import ForgetPasswordScreen from '../Screens/ForgetPasswordScreen';
import { useSelector } from 'react-redux';

const AppNavigation = () => {
    const Stack = createStackNavigator();
    const { currentLocal } = useSelector((state) => state.currentLocal);
    console.log(currentLocal.language);
  useEffect(() => {
  if(currentLocal.language==='English'){
    I18nManager.forceRTL(false);

  }else{
    I18nManager.forceRTL(true);

  }
  }, [currentLocal.language])

  return (
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
            cardStyle: { backgroundColor: "white" },
            headerShown: false, // Set the background color here and remove header
        }}

    >
        <Stack.Screen name="Splash" component={SplashScreen} /> 
        <Stack.Screen name="welcome1" component={Welcome1Screen} /> 
        <Stack.Screen name="welcome2" component={Welcome2Screen} /> 
        <Stack.Screen name="welcome3" component={Welcome3Screen} /> 
        <Stack.Screen name="auth" component={SignupScreen} /> 
        <Stack.Screen name="forgetPassword" component={ForgetPasswordScreen} /> 
        <Stack.Screen name="Home" component={BottomTabs} /> 





    </Stack.Navigator>
</NavigationContainer>
  )
}

export default AppNavigation