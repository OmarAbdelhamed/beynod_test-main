import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Wishlistcreen from '../Screens/WishlistScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import CategoryListScreen from '../Screens/CategoryListScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreen';

const HomeNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Set the background color here and remove header
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Wishlist' component={Wishlistcreen} />
        <Stack.Screen name='Notification' component={NotificationScreen} />
        <Stack.Screen name='ProductList' component={CategoryListScreen} />
        <Stack.Screen name='CategoryList' component={CategoryListScreen} />
        <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default HomeNavigation;
