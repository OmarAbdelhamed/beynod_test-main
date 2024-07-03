import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import { Colors } from '../assets/Colors'

const ThemeScreen = () => {
  const [CurrencyState, setCurrencyState] = useState(1)

  const Items = [
    { id: 1, name: "Light Mood" },
    { id: 2, name: "Dark Mood" },


  ]

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: Dimensions.get('screen').height / 15,
        paddingHorizontal: Dimensions.get('screen').width / 22,
        backgroundColor: 'white',


      }}
    >
      <View>
        <ComponentsHeader
          title={'App Theme'}
        />

        <View
        style={{
          marginTop:22
        }}
        >
          {Items.map((item, key) => {
            return (
              <TouchableOpacity
                key={key}
                style={{
                  marginBottom: 12,
                  backgroundColor: 'rgba(246, 246, 246, 1)',
                  paddingHorizontal: 22,
                  paddingVertical: 18,
                  borderRadius: 12,
                  borderWidth:CurrencyState===item.id?2:0,
                  borderColor:CurrencyState===item.id&&Colors.secondry,
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'
  
                }}
                onPress={() => setCurrencyState(item.id)}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400'
                  }}
                >{item.name}</Text>
                {CurrencyState===item.id&&
                <Image source={require('../assets/Images/check.png')}/>
                
                }
              </TouchableOpacity>
            )
          })}
        </View>


      </View>


    </View>
  )
}

export default ThemeScreen