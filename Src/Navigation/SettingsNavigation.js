import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../Screens/SettingsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import OrdersScreen from '../Screens/OrdersScreen';
import WishlistScreen from '../Screens/WishlistScreen';
import CouponsScreen from '../Screens/CouponsScreen';
import ReturnScreen from '../Screens/ReturnScreen';
import LanguageScreen from '../Screens/LanguageScreen';
import CurrencyScreen from '../Screens/CurrencyScreen';
import ThemeScreen from '../Screens/ThemeScreen';
import OrderDetailsScreen from '../Screens/OrderDetailsScreen';
import TrackOrderScreen from '../Screens/TrackOrderScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreen';
import UpdatePassword from './UpdatePassword';
import MyAddressScreen from '../Screens/MyAddressScreen';
import AddAddressScreen from '../Screens/AddAddressScreen';

const SettingsNavigation = () => {
    const Stack = createStackNavigator();

  return (
    <View
      style={{ flex: 1 }}
    >


      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Set the background color here and remove header
        }}

      >
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="Coupons" component={CouponsScreen} />
        <Stack.Screen name="Return" component={ReturnScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Currency" component={CurrencyScreen} />
        <Stack.Screen name="Theme" component={ThemeScreen} />
        <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
        <Stack.Screen name="TrackOrder" component={TrackOrderScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
        <Stack.Screen name="MyAddress" component={MyAddressScreen} />
        <Stack.Screen name="AddAddress" component={AddAddressScreen} />







      </Stack.Navigator>
    </View>
  )
}

export default SettingsNavigation