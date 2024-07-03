import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Search from '../assets/SVG/Search';
import Favorite from '../assets/SVG/Favorite';

const Header = ({ title }) => {
    const navigation=useNavigation();
    return (
        <View
            style={{
                marginBottom: 22,
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}
        >
            <TouchableOpacity
            onPress={()=>navigation.navigate('Search')}
            >
                            <Search width={25} height={25} fill={'#000'} />
            </TouchableOpacity>
            <Text
            style={{
                color:'rgba(0, 0, 0, 1)',
                fontSize:20,
                fontWeight:'600'
            }}
            >{title}</Text>
            <TouchableOpacity
                        onPress={()=>navigation.navigate('Wishlist')}

            
            >
                            <Favorite width={25} height={25} fill={'#000'} />
            </TouchableOpacity>
        </View>
    )
}

export default Header