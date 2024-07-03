import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const FirstBanner = () => {
    const navigation = useNavigation();
    const [single_banner, setSingle_banner] = useState({});

useEffect(() => {
    const getsingle_banner = () => {
        axios.get('https://beyond-fix.applaiteknoloji.online/api/single_banner')
            .then((response) => {
                // Handle the response
                if (response.status === 200) {
                    setSingle_banner(response.data.single_banner);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getsingle_banner()
}, [])
    return (
        <TouchableOpacity
            style={{
                marginVertical: 22,
                paddingHorizontal: Dimensions.get('screen').width / 22,

            }}
            onPress={() => navigation.navigate('CategoryList', {
                'name': 'Sale',
                "id": Object.keys(single_banner).length !== 0 && single_banner.id
            })}
        >
            <View

            >

                <Image source={{ uri: Object.keys(single_banner).length !== 0 && single_banner.value.en }}
                    style={{
                        width: '100%',
                        height: 200,
                        borderRadius: 12
                    }}
                />


            </View>
        </TouchableOpacity>
    )
}

export default FirstBanner