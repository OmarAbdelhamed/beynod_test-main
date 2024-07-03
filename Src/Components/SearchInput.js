import { View, Text, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const SearchInput = ({ value,changeFun }) => {
    return (
        <View
            style={{
                marginVertical: Dimensions.get('window').height / 100
            }}
        >
            <TextInput
                style={{
                    borderColor: 'rgba(230, 230, 230, 1)',
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingHorizontal: Dimensions.get('window').width / 10,
                    paddingVertical: Dimensions.get('window').height / 60,

                }}
                placeholder='What are you looking for ?'
                value={value}
                onChangeText={changeFun}
                onFocus={()=>console.log('dfcjkljf')}
            />
            <AntDesign name="search1" size={20} color="rgba(0, 0, 0, 0.5)"
                style={{
                    position: 'absolute',
                    top: Dimensions.get('window').height / 60,
                    left: Dimensions.get('window').width / 22
                }}
            />

        </View>
    )
}

export default SearchInput