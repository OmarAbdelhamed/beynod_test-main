import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SaleBanner = () => {
  return (
    <View
    style={{
        justifyContent: 'center',
        alignItems: 'center',


    }}
>
    <Image source={require('../assets/Images/Group 300.png')}
        style={{
        }}
    />
</View>
  )
}

export default SaleBanner

const styles = StyleSheet.create({})