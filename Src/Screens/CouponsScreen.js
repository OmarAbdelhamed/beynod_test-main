import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import CommonInput from '../Components/CommonInput'
import CommonBtn from '../Components/CommonBtn'
import { Colors } from '../assets/Colors'

const CouponsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: Dimensions.get('screen').height / 15,
        paddingHorizontal: Dimensions.get('screen').width / 22,
        backgroundColor: 'white',
        justifyContent:'space-between'


      }}
    >
      <View>
        <ComponentsHeader
          title={'Coupons'}
        />
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.4)',
            fontWeight: '500',
            fontSize: 16,
            marginBottom: 24,
            textAlign: 'center',
            marginVertical: 12
          }}
        >You don’t have any coupons at the moment</Text>

        <View>
          <CommonInput
            placeholder="Enter a coupon or promo code"
          />
        </View>
      </View>

      <CommonBtn
        text={'Add code'}
        fontSize={20}
        color={'rgba(255, 255, 255, 1)'}
        Radius={100}
        width={Dimensions.get('screen').width / 1.5}
        height={Dimensions.get('screen').height / 18}
        handdleClick={() => navigation.navigate('Home')}
        margintop={Dimensions.get('screen').height / 10}
        backround={Colors.secondry}

      />
    </View>
  )
}

export default CouponsScreen