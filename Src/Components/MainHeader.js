import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Favorite from '../assets/SVG/Favorite';
import Notification from '../assets/SVG/Notification';

const MainHeader = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                marginBottom: 22,
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}
        >
            <View>
                <TouchableOpacity
            
            onPress={()=>{
                console.log('jdfjffjdjfdjf');
            }}
                >
                    <Image source={require('../assets/Images/Group 291.png')} />

                </TouchableOpacity>
            </View>
            <View>
                <Image source={require('../assets/Images/Beyond Logo 2.png')} />

            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Notification')}
                    style={{
                        marginRight: 7
                    }}

                >
                                <Notification width={24} height={24} fill={'#000'} />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Wishlist')}


                >
                                <Favorite width={24} height={24} fill={'#000'} />
                </TouchableOpacity>




            </View>
        </View>
    )
}

export default MainHeader