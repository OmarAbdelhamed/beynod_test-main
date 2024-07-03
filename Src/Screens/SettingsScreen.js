import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect } from 'react'
import {
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { authInfo } from '../Redux/Authantication';
import axios from 'axios';

const SettingsScreen = ({ navigation }) => {
    const login  = useSelector((state) => state.auth.authState);

    const Items = [
        { name: login.name, img: require('../assets/Images/Ellipse 22.png'), navigateState: 'Profile', color: 'rgba(0, 0, 0, 1)' },
        { name: 'My Orders', img: require('../assets/Images/Frame 3.png'), navigateState: 'Orders', color: 'rgba(0, 0, 0, 1)' },
        { name: 'My Address', img: require('../assets/Images/Frame 3.png'), navigateState: 'MyAddress', color: 'rgba(0, 0, 0, 1)' },
        { name: 'My Wishlist', img: require('../assets/Images/Frame 3 (2).png'), navigateState: 'Wishlist', color: 'rgba(0, 0, 0, 1)' },
        { name: 'Coupons', img: require('../assets/Images/Frame 3 (1).png'), navigateState: 'Coupons', color: 'rgba(0, 0, 0, 1)' },
        { name: 'Return / Exchange', img: require('../assets/Images/Frame 3 (3).png'), navigateState: 'Return', color: 'rgba(0, 0, 0, 1)' },
        { name: 'Language', img: require('../assets/Images/Frame 6.png'), navigateState: 'Language', color: 'rgba(0, 0, 0, 1)' },
        { name: 'App Currency', img: require('../assets/Images/Frame 6 (1).png'), navigateState: 'Currency', color: 'rgba(0, 0, 0, 1)' },
        { name: 'App Theme', img: require('../assets/Images/Frame 6 (2).png'), navigateState: 'Theme', color: 'rgba(0, 0, 0, 1)' },
        { name: 'Log out', img: require('../assets/Images/Frame 3 (4).png'), navigateState: 'Logout', color: 'rgba(255, 0, 0, 1)' },

    ]
    const dispatch = useDispatch();
    return (
        <View

            style={{
                flex: 1,
                paddingTop: Dimensions.get('screen').height / 15,
                paddingBottom: Dimensions.get('screen').height / 60,
                paddingHorizontal: Dimensions.get('screen').width / 22,
                justifyContent: 'space-between',
                flexDirection: 'column',
                backgroundColor: '#fff'


            }}
        >
            <Text
                style={{
                    color: 'rgba(0, 0, 0, 1)',
                    fontSize: 20,
                    fontWeight: '600',
                    textAlign: 'center',

                }}
            >Account</Text>

            <ScrollView
                nestedScrollEnabled={true}
            >
                {Items.map((item, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                if (item.navigateState === "Logout") {
                                    dispatch(authInfo({}))
                                    navigation.navigate('auth')
                                } else {
                                    navigation.navigate(item.navigateState)
                                }
                            }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomColor: 'rgba(217, 217, 217, 0.5)',
                                borderBottomWidth: 1,
                                justifyContent: 'space-between',
                                paddingVertical: Dimensions.get('screen').height / 70
                            }}
                            key={index}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}
                            >
                                <Image source={item.img} />
                                <Text
                                    style={{
                                        color: item.color,
                                        fontSize: 14,
                                        fontWeight: '600',
                                        marginLeft: 12
                                    }}
                                >{item.name}</Text>
                            </View>
                            {item.navigateState !== "Logout" && item.navigateState !== "Profile" &&
                                <Image source={require('../assets/Images/Frame 57.png')}
                                    style={{
                                        alignItems: 'flex-end'
                                    }}
                                />
                            }

                        </TouchableOpacity>
                    )
                })}
            </ScrollView>


            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 12
                }}
            >
                <TouchableOpacity
                    style={{
                        marginRight: 33
                    }}
                >
                    <Image source={require('../assets/Images/phone-Light.png')}
                        style={{
                            alignSelf: 'center'
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '300',
                            color: 'rgba(0, 0, 0, 1)',
                            marginTop: 12
                        }}
                    >Phone</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={{
                        marginRight: 33
                    }}
                >
                    <View
                        style={{
                            marginBottom: 3
                        }}
                    >
                        <Image source={require('../assets/Images/comment-dots-Light.png')}
                            style={{
                                alignSelf: 'center'
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '300',
                            color: 'rgba(0, 0, 0, 1)',
                            marginTop: 12
                        }}

                    >WhatsApp</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={{
                        marginRight: 18
                    }}
                >
                    <View
                        style={{
                            marginBottom: 7
                        }}
                    >
                        <Image source={require('../assets/Images/envelope-Light.png')}
                            style={{
                                alignSelf: 'center'
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '300',
                            color: 'rgba(0, 0, 0, 1)',
                            marginTop: 12
                        }}

                    >Email</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SettingsScreen