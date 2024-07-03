import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from '../assets/Colors'

const CommonBtn = ({ text, loaddingState,fontSize, color, Radius, width, height, handdleClick, margintop, backround, textColor,fontWeight }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backround ? backround : Colors.primary,
        alignItems: 'center',
        borderRadius: Radius,
        width: width,
        alignSelf: 'center',
        height: height,
        justifyContent: 'center',
        marginTop: margintop,
        flexDirection:'row'
      }}
      onPress={handdleClick}
    >
      {loaddingState&&
                <ActivityIndicator />
      }

      <Text
        style={{
          fontSize: fontSize,
          color: color,
          fontWeight:fontWeight?fontWeight:"normal",
          marginHorizontal:7
        }}
      >{text}</Text>

    </TouchableOpacity>
  )
}

export default CommonBtn