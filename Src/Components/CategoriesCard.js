import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoriesCard = ({
    id,
    name,
    img,
    backgroundColor

}) => {
    const navigation = useNavigation()
    return (
        <View>
        <TouchableOpacity
            style={{
                backgroundColor: backgroundColor,
                marginRight: 7,
                marginBottom: 7,
                width: Dimensions.get('window').width / 4.7,
                height: Dimensions.get('window').height / 10.7,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center'

            }}
            onPress={()=>navigation.navigate('CategoryList',{
                'id':id,
                'name':name
            })}
        >
            <Image source={img}/>
        </TouchableOpacity>
         <Text
         style={{
             color: 'rgba(255, 255, 255, 1)',
             fontWeight: '700',
             fontSize: 14,
             position:'absolute',
             top:'35%',
             left:'10%'
         }}
     >
         {name}
     </Text> 
     </View>
    )
}

export default CategoriesCard