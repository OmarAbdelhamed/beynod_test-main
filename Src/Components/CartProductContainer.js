import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from "../assets/Colors"
import { useNavigation } from '@react-navigation/native'
import CartIcon from '../assets/SVG/CartIcon'
const CartProductContainer = ({state,item}) => {
    const navigation = useNavigation()
    return (
        <>
        
        {state==='orderDetails'?
         <View
         style={{
             paddingBottom: 12,
             marginBottom: 12,
            //  backgroundColor:'rgba(250, 250, 250, 1)'
         }}
     >
         <View
             style={{
                 flexDirection: 'row',
             }}
         >
             <View
                 style={{
                     marginRight: 12,
                     width: Dimensions.get('window').width / 2.87,

                 }}
             >

                 <Image source={require('../assets/Images/Rectangle 162.png')} />
             </View>
             <View
                 style={{
                     width: Dimensions.get('window').width / 1.8,
                 }}
             >
                 <Text
                     style={{
                         fontWeight: '700',
                         fontSize: 17,
                         marginBottom: 10
                     }}
                 >{item&&item.name_en}</Text>
                 <View
                     style={{
                         flexDirection: 'row',
                         marginBottom: 7
                     }}
                 >
                     <Text
                         style={{
                             fontWeight: '700',
                             fontSize: 14,
                         }}
                     >Quantity : </Text>
                     <Text

                         style={{
                             fontWeight: '300',
                             fontSize: 14,
                         }}
                     >1 </Text>
                 </View>

                 <View
                     style={{
                         flexDirection: 'row',
                         marginBottom: 7
                     }}
                 >
                     <Text
                         style={{
                             fontWeight: '700',
                             fontSize: 14,
                         }}
                     >Size : </Text>
                     <Text
                         style={{
                             fontWeight: '300',
                             fontSize: 14,
                         }}
                     >L </Text>
                 </View>

                 <View
                     style={{
                         flexDirection: 'row',
                         marginBottom: 7
                     }}
                 >
                     <Text
                         style={{
                             fontWeight: '700',
                             fontSize: 14,
                         }}
                     >Color : </Text>
                     <Text
                         style={{
                             fontWeight: '300',
                             fontSize: 14,
                         }}
                     >Blue Beach</Text>
                 </View>

                 <View
                     style={{
                         flexDirection: 'row',
                         marginBottom: 7
                     }}
                 >
                     <Text
                         style={{
                             fontWeight: '700',
                             fontSize: 14,
                         }}
                     >
                         Brand :
                     </Text>
                     <Text
                         style={{
                             fontWeight: '300',
                             fontSize: 14,
                         }}
                     >ZARA</Text>
                 </View>
             </View>
         </View>
         <View
             style={{
                 flexDirection: 'row',
                 marginTop: 7
             }}
         >
                                <CartIcon width={24} height={24} fill={'#000'} />
             <Text
                 style={{
                     fontWeight: '500',
                     fontSize: 14,
                 }}
             >
                 Delivery by :
             </Text>
             <Text
                 style={{
                     fontWeight: '500',
                     fontSize: 14,
                     color: Colors.secondry
                 }}
             >
                 26 Jan - 28 Jan
             </Text>
         </View>
     </View>
    
    :
    <TouchableOpacity
    style={{
        borderBottomWidth: 1,
        borderColor: '#ededed',
        padding: 12,
        marginBottom: 12,
        // backgroundColor:'rgba(250, 250, 250, 1)'

    }}
    onPress={()=>navigation.navigate('OrderDetails',{
        id:'1'
    })}
>
    <View
        style={{
            flexDirection: 'row',
        }}
    >
        <View
            style={{
                marginRight: 12,
                width: Dimensions.get('window').width / 2.87,

            }}
        >

            <Image source={require('../assets/Images/Rectangle 162.png')} />
        </View>
        <View
            style={{
                width: Dimensions.get('window').width / 1.8,
            }}
        >
            <Text
                style={{
                    fontWeight: '700',
                    fontSize: 17,
                    marginBottom: 10
                }}
            >
                {item&&item.product.name_en}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 7
                }}
            >
                <Text
                    style={{
                        fontWeight: '700',
                        fontSize: 14,
                    }}
                >Quantity : </Text>
                <Text

                    style={{
                        fontWeight: '300',
                        fontSize: 14,
                    }}
                >{item&&item.quantity} </Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 7
                }}
            >
                <Text
                    style={{
                        fontWeight: '700',
                        fontSize: 14,
                    }}
                >Size : </Text>
                <Text
                    style={{
                        fontWeight: '300',
                        fontSize: 14,
                    }}
                >{item&&item.size.en}</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 7
                }}
            >
                <Text
                    style={{
                        fontWeight: '700',
                        fontSize: 14,
                    }}
                >Color : </Text>
                <Text
                    style={{
                        fontWeight: '300',
                        fontSize: 14,
                    }}
                >{item&&item.color.en}</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 7
                }}
            >
                <Text
                    style={{
                        fontWeight: '700',
                        fontSize: 14,
                    }}
                >
                    Brand :
                </Text>
                <Text
                    style={{
                        fontWeight: '300',
                        fontSize: 14,
                    }}
                >{item&&item.product.brand.name.en}</Text>
            </View>
        </View>
    </View>
    <View
        style={{
            flexDirection: 'row',
            marginTop: 7
        }}
    >
        <Image source={require('../assets/Images/Frame40.png')} />
        <Text
            style={{
                fontWeight: '500',
                fontSize: 14,
            }}
        >
            Delivery by :
        </Text>
        <Text
            style={{
                fontWeight: '500',
                fontSize: 14,
                color: Colors.secondry
            }}
        >
            26 Jan - 28 Jan
        </Text>
    </View>
</TouchableOpacity>
    }
        </>
       

    )
}

export default CartProductContainer