import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import ComponentsHeader from '../Components/ComponentsHeader'
import CartProductContainer from '../Components/CartProductContainer'
import CommonBtn from '../Components/CommonBtn'
import { Colors } from '../assets/Colors'

const OrderDetailsScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop: Dimensions.get('screen').height / 15,
                paddingBottom: Dimensions.get('screen').height / 28,

                paddingHorizontal: Dimensions.get('screen').width / 22,
                backgroundColor: 'white',
                justifyContent: 'space-between'


            }}
        >
            
            <View>
                <ComponentsHeader
                    title={'My Order Details'}
                />
                <CartProductContainer
                    state={'orderDetails'}
                />


                <View
                    style={{
                        paddingBottom: Dimensions.get('screen').height / 60
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: '600',
                                color: Colors.black,
                                marginBottom: 5

                            }}
                        >
                            Delivering to

                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                color: Colors.black,
                                marginBottom: 5

                            }}
                        >
                            Hacen Business
                        </Text>

                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: 'rgba(0, 0, 0, 0.7)',
                                marginBottom: 5

                            }}
                        >
                            Al Ashriah St, Al Badi, 32414
                        </Text>

                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                color: Colors.black,
                                marginBottom: 5

                            }}
                        >
                            Saudi Arabia
                        </Text>
                    </View>

                </View>

                <View
                    style={{
                        borderColor: '#ededed',
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        paddingVertical: Dimensions.get('screen').height / 60
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: '600',
                                color: Colors.black

                            }}
                        >
                            Payment

                        </Text>

                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                color: Colors.black,
                                marginTop: 3

                            }}
                        >
                            Visa card ends with XXX6 8228

                        </Text>

                    </View>
                </View>
            </View>
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

                            SAR 40

                        </Text>
                    </View>
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

                            FREE

                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderTopColor: '#ededed',
                        borderTopWidth: 1,
                        paddingTop: Dimensions.get('screen').height / 50
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

                        SAR 40

                    </Text>
                </View>
                <CommonBtn
                    text={'Track my Order'}
                    fontSize={20}
                    color={'rgba(255, 255, 255, 1)'}
                    Radius={10}
                    width={Dimensions.get('screen').width / 1.3}
                    height={Dimensions.get('screen').height / 18}
                    handdleClick={() => navigation.navigate('TrackOrder', { id: "1" })}
                    margintop={Dimensions.get('screen').height / 25}
                    backround={Colors.secondry}
                    fontWeight={'700'}

                />
            </View>
        </View>
    )
}

export default OrderDetailsScreen