import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NewScreen from '../Screens/NewScreen';
import SearchScreen from '../Screens/SearchScreen';
import WishlistScreen from '../Screens/WishlistScreen';
import CategoryListScreen from '../Screens/CategoryListScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreen';

export default function NewNavigation() {
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
     <Stack.Screen name="New" component={NewScreen} />
     <Stack.Screen name="Search" component={SearchScreen} />
     <Stack.Screen name="Wishlist" component={WishlistScreen} />
     <Stack.Screen name="CategoryList" component={CategoryListScreen} />
     <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />

     {/* <Stack.Screen name="CategoryList" component={CategoryListScreen} /> */}




        



        </Stack.Navigator>
            </View>
  )
}