import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import CommonBtn from '../Components/CommonBtn'

const Welcome3Screen = ({navigation}) => {
  return (
    <View
    style={{
      marginVertical: Dimensions.get('screen').height / 14,
      paddingHorizontal: Dimensions.get('screen').width / 14,
      marginBottom:Dimensions.get('screen').height / 8,
      justifyContent:'space-between',
      flex:1
    }}
  >
    <View>
    <TouchableOpacity
      style={{ alignSelf: 'flex-end' }}
      onPress={() => navigation.navigate('auth')}
    >
      <Text
        style={{
          color: 'rgba(190, 190, 190, 1)',
          fontSize: 20,
          fontWeight: '500'
        }}
      >
        Skip
      </Text>
    </TouchableOpacity>

    <Image source={require('../assets/Images/Rectangle 4 (2).png')} 
    
    style={{
      marginVertical:Dimensions.get('screen').height / 30
    }}
    />
      <Text
        style={{
          color: 'rgba(0, 0, 0, 1)',
          fontSize: 28,
          fontWeight: "500",
          textAlign: 'center'
        }}
      >Priority Delivery 
      Options</Text>
      <Text
        style={{
          color: 'rgba(0, 0, 0, 1)',
          fontSize: 13,
          fontWeight: "500",
          textAlign: 'center',
          marginTop: Dimensions.get('screen').height / 30
        }}
      >

Choose from expedited delivery services for faster shipping, ensuring your purchases arrive swiftly to your doorstep.  </Text>

    </View>
    <CommonBtn
        text={'Continue'}
        fontSize={20}
        color={'rgba(255, 255, 255, 1)'}
        Radius={100}
        width={Dimensions.get('screen').width / 1.5}
        height={Dimensions.get('screen').height / 18}
        handdleClick={() => navigation.navigate('auth')}
        margintop={Dimensions.get('screen').height / 7}

      />
  </View>
  )
}

export default Welcome3Screen