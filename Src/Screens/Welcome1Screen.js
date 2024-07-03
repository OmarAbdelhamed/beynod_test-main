import { View, Text, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native'
import React from 'react'
import CommonBtn from '../Components/CommonBtn'

const Welcome1Screen = ({ navigation }) => {
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
          <StatusBar
      />
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

      <Image source={require('../assets/Images/Rectangle 4.png')} />
        <Text
          style={{
            color: 'rgba(0, 0, 0, 1)',
            fontSize: 26,
            fontWeight: "500",
            textAlign: 'center'
          }}
        >Personalized Shopping Experience</Text>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 1)',
            fontSize: 13,
            fontWeight: "500",
            textAlign: 'center',
            marginTop: Dimensions.get('screen').height / 30
          }}
        >

          Create a unique storefront that reflects your style and preferences while discovering a curated selection of products tailored to your interests.</Text>

      </View>
      <CommonBtn
          text={'Continue'}
          fontSize={20}
          color={'rgba(255, 255, 255, 1)'}
          Radius={100}
          width={Dimensions.get('screen').width / 1.5}
          height={Dimensions.get('screen').height / 18}
          handdleClick={() => navigation.navigate('welcome2')}
          margintop={Dimensions.get('screen').height / 7}

        />
    </View>
  )
}

export default Welcome1Screen