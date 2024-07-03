import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import EyeIcon from '../assets/SVG/EyeIcon';
import EyeOff from '../assets/SVG/EyeOff';

const CommonInput = ({
  placeholder,
  handdleChange,
  value,
  width

}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={{
        // marginBottom:22
        position: 'relative'
      }}
    >
      <TextInput
        placeholder={placeholder}
        style={{
          backgroundColor: 'rgba(247, 247, 247, 1)',
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderRadius: 13,
          fontSize: 16,
          fontWeight: '600',
          width:width&&width
        }}
        value={value}
        onChangeText={handdleChange}
        secureTextEntry={placeholder=='Enter your Confirmation Password'||placeholder=='Enter your Password'?!showPassword:false}
      />
      {placeholder=='Enter your Password'&&
          <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            top: 12
  
          }}
          onPress={() => setShowPassword(!showPassword)}
  
        >
          {!showPassword ?
  
            <View>
              <EyeIcon width={24} height={24} fill={'#9600C1'} />
  
            </View>
            :
            <View>
              <EyeOff width={24} height={24} fill={'#9600C1'} />
  
            </View>
          }
        </TouchableOpacity>
      
      }
      {placeholder=='Enter your Confirmation Password'&&
      <TouchableOpacity
      style={{
        position: 'absolute',
        right: 10,
        top: 12

      }}
      onPress={() => setShowPassword(!showPassword)}

    >
      {!showPassword ?

        <View>
          <EyeIcon width={24} height={24} fill={'#9600C1'} />

        </View>
        :
        <View>
          <EyeOff width={24} height={24} fill={'#9600C1'} />

        </View>
      }
    </TouchableOpacity>
}
    </View>
  )
}

export default CommonInput