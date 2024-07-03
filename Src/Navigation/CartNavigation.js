// import { View, Text } from 'react-native'
// import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack';
// import CartScreen from '../Screens/CartScreen';
// import CouponsScreen from '../Screens/CouponsScreen';
// import OrderSummaryScreen from '../Screens/OrderSummaryScreen';
// import Checkout1Screen from '../Screens/Checkout1Screen';
// import Checkout2Screen from '../Screens/Checkout2Screen';
// import ProductDetailsScreen from '../Screens/ProductDetailsScreen';
// import OrderDetailsScreen from '../Screens/OrderDetailsScreen';
// import TrackOrderScreen from '../Screens/TrackOrderScreen';

// const CartNavigation = () => {
//   const Stack = createStackNavigator();

//   return (
//     <View
//       style={{ flex: 1 }}
//     >


//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false, // Set the background color here and remove header
//         }}

//       >
//         <Stack.Screen name="Cart" component={CartScreen} />
//         <Stack.Screen name="Coupons" component={CouponsScreen} />
//         <Stack.Screen name="Checkout1" component={Checkout1Screen} />
//         <Stack.Screen name="Checkout2" component={Checkout2Screen} />
//         <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} />
//         <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
//         <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
//         <Stack.Screen name="TrackOrder" component={TrackOrderScreen} />








//       </Stack.Navigator>
//     </View>
//   )
// }

// export default CartNavigation
import { View, Text } from 'react-native'
import React from 'react'

const CartNavigation = () => {
  return (
    <View>
      <Text>CartNavigation</Text>
    </View>
  )
}

export default CartNavigation