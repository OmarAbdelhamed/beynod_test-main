import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const ComponentsHeader = ({title}) => {
    const navigation = useNavigation()
  return (
    <View
    style={{
        marginBottom: 22,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }}
>
    <TouchableOpacity
    onPress={()=>navigation.goBack()}
    >
        <Image source={require('../assets/Images/Frame 42.png')} />
    </TouchableOpacity>
    <Text
    style={{
        color:'rgba(0, 0, 0, 1)',
        fontSize:20,
        fontWeight:'600'
    }}
    >{title}</Text>
    <View>
    </View>
</View>

  )
}

export default ComponentsHeader