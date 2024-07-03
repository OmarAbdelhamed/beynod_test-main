import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import CategouriesNavigation from './CategouriesNavigation';
import NewNavigation from './NewNavigation';
import CartNavigation from './CartNavigation';
import SettingsNavigation from './SettingsNavigation';
import { FontAwesome6, createIconSet } from '@expo/vector-icons';
import { SymbolView, SymbolViewProps, SFSymbol } from 'expo-symbols';

import {
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
} from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';


import { Colors } from '../assets/Colors';
import { ExampleSvg } from '../assets/Images/user-Regular.svg'; // Adjust the path to your SVG file
import Svg, { Path } from 'react-native-svg';
import Account from '../assets/SVG/Account';
import Shopping from '../assets/SVG/Shopping';
import Store from '../assets/SVG/Store';
import Home from '../assets/SVG/Home';
import Discount from '../assets/SVG/Discount';

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();


    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    elevation: 0,
                    backgroundColor: "#ffffff",
                    height: 90,
                },
            }}


        >

            <Tab.Screen
                name="home"
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            {focused ?
                                <Home width={24} height={24} fill={'#9600C1'} />
                                :
                                <Home width={24} height={24} fill={'#000'} />

                            }




                            <Text
                                style={{
                                    color: focused ? "#9754BB" : "#4B5867",
                                    fontSize: 12,
                                }}
                            >
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Wishlist"
                component={CategouriesNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            {focused ?
                                <Store width={24} height={24} fill={'#9600C1'} />
                                :
                                <Store width={24} height={24} fill={'#000'} />

                            }


                            <Text
                                style={{
                                    color: focused ? "#9754BB" : "#4B5867",
                                    fontSize: 12,
                                }}
                            >
                                Category
                            </Text>
                        </View>
                    ),
                }}
            />



            <Tab.Screen
                name="cart"
                component={NewNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            {focused ?
                                <Discount width={24} height={24} fill={'#9600C1'} />
                                :
                                <Discount width={24} height={24} fill={'#000'} />

                            }

                            <Text
                                style={{
                                    color: focused ? "#9754BB" : "#4B5867",
                                    fontSize: 12,
                                }}
                            >
                                New
                            </Text>

                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Search"
                component={CartNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>


                            {focused ?
                                <Shopping width={24} height={24} fill={'#9600C1'} />
                                :
                                <Shopping width={24} height={24} fill={'#000'} />

                            }

                            <Text
                                style={{
                                    color: focused ? "#9754BB" : "#4B5867",
                                    fontSize: 12,
                                }}
                            >
                                Cart
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="settings"
                component={SettingsNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            {focused ?
                                <Account width={24} height={24} fill={'#9600C1'} />
                                :


                                <Account width={24} height={24} fill="black" />

                            }
                            <Text
                                style={{
                                    color: focused ? "#9754BB" : "#4B5867",
                                    fontSize: 12,
                                }}
                            >
                                Profile
                            </Text>
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTabs