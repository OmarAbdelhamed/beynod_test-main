// import { View, Text } from 'react-native'
// import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack';
// import CategouriesScreen from '../Screens/CategouriesScreen';
// import NotificationScreen from '../Screens/NotificationScreen';
// import CategoryListScreen from '../Screens/CategoryListScreen';
// import WishlistScreen from '../Screens/WishlistScreen';
// import SearchScreen from '../Screens/SearchScreen';
// import ProductDetailsScreen from '../Screens/ProductDetailsScreen';

// const CategouriesNavigation = () => {
//   const Stack = createStackNavigator();

//   return (
//     <View
//     style={{ flex: 1 }}
//   >


//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false, // Set the background color here and remove header
//       }}

//     >
//       <Stack.Screen name="Categouries" component={CategouriesScreen} />
//       <Stack.Screen name="Notification" component={NotificationScreen} />
//       <Stack.Screen name="CategoryList" component={CategoryListScreen} />
//       <Stack.Screen name="Wishlist" component={WishlistScreen} />
//       <Stack.Screen name="Search" component={SearchScreen} />
//       <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />








//     </Stack.Navigator>
//   </View>
//   )
// }

// export default CategouriesNavigation

import { View, Text } from 'react-native'
import React from 'react'

const CategouriesNavigation = () => {
  return (
    <View>
      <Text>CategouriesNavigation</Text>
    </View>
  )
}

export default CategouriesNavigation