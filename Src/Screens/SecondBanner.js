import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

const SecondBanner = () => {
    const navigation = useNavigation();
    const [single_banner2, setSingle_banner2] = useState({});
useEffect(() => {
    const getsingle_banner2 = () => {
        axios.get('https://beyond-fix.applaiteknoloji.online/api/single_banner2')
            .then((response) => {
                // Handle the response
                if (response.status === 200) {
                    setSingle_banner2(response.data.single_banner2);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getsingle_banner2();

}, [])

  return (
    <TouchableOpacity
    style={{
        marginVertical: 22,
        paddingHorizontal: Dimensions.get('screen').width / 22,

    }}
    onPress={() => navigation.navigate('CategoryList', {
        'name': 'Sale',
        "id": Object.keys(single_banner2).length !== 0 && single_banner2.id
    })}
>
    <View>


    </View>
    <Image source={{ uri: Object.keys(single_banner2).length !== 0 && single_banner2.value.en }}
        style={{
            width: '100%',
            height: 200,
            borderRadius: 12
        }}

    />
</TouchableOpacity>
  )
}

export default SecondBanner

const styles = StyleSheet.create({})