import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../assets/Colors'
import { useNavigation } from '@react-navigation/native'

const TotalContainer = ({ coupanState,data }) => {
    const navigation = useNavigation()


    return (
        <View>
            <View
                style={{
                    borderTopColor: '#ededed',
                    borderTopWidth: 1,
                    paddingVertical: Dimensions.get('screen').height / 60
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 7


                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '300',
                            color: Colors.black

                        }}
                    >
                        Sub-total

                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '300',
                            color: Colors.black

                        }}
                    >

                        SAR {data&&data.subTotal}

                    </Text>
                </View>
                {coupanState &&
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 7

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '300',
                                color: Colors.black

                            }}
                        >
                            Coupon savings

                        </Text>
                     <TouchableOpacity
                     onPress={()=>navigation.navigate('Coupons')}
                     >
                     <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '300',
                                color: Colors.secondry

                            }}
                        >

                            Add Coupon

                        </Text>
                     </TouchableOpacity>
                    </View>
                }
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '300',
                            color: Colors.black

                        }}
                    >
                        Shipping

                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '300',
                            color: Colors.black

                        }}
                    >

                        {data&&data.shipping}

                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderTopColor: '#ededed',
                    borderTopWidth: 1,
                    paddingVertical: Dimensions.get('screen').height / 50
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '300',
                        color: Colors.black

                    }}
                >
                    Total Amount:

                </Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: Colors.secondry

                    }}
                >

                    SAR {data&&data.total}

                </Text>
            </View>
        </View>
    )
}

export default TotalContainer